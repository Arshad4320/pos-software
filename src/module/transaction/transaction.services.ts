import mongoose from 'mongoose'

import { TransactionModel } from './transaction.model'
import { AccountModel } from '../accounts/accounts.model'
import { ITransaction } from './transaction.interface'

const createTransaction = async (payload: ITransaction) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    const { debitAccount, creditAccount, amount } = payload

    if (amount <= 0) {
      throw new Error('Amount must be greater than zero')
    }

    const debitAcc = await AccountModel.findById(debitAccount).session(session)
    const creditAcc =
      await AccountModel.findById(creditAccount).session(session)

    if (!debitAcc || !creditAcc) {
      throw new Error('Account not found')
    }

    if (debitAcc.balance < amount) {
      throw new Error('Insufficient balance in debit account')
    }
    const newTransaction = await TransactionModel.create([payload], { session })

    await AccountModel.findByIdAndUpdate(
      debitAccount,
      { $inc: { balance: -amount } },
      { session, new: true },
    )
    await AccountModel.findByIdAndUpdate(
      creditAccount,
      { $inc: { balance: amount } },
      { session, new: true },
    )

    await session.commitTransaction()
    session.endSession()

    return newTransaction[0]
  } catch (err) {
    await session.abortTransaction()
    session.endSession()
    console.log(err)
    throw err
  }
}

const getAllTransactions = async () => {
  return await TransactionModel.find()
    .populate('debitAccount')
    .populate('creditAccount')
    .sort({ date: -1 })
}
export const TransactionServices = {
  createTransaction,
  getAllTransactions,
}
