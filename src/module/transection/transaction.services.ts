import mongoose from 'mongoose'
import { ITransaction } from './transection.interface'
import { TransactionModel } from './transaction.model'
import { AccountModel } from '../accounts/accounts.model'

const createTransaction = async (payload: ITransaction) => {
  const session = await mongoose.startSession()
  session.startTransaction()
  try {
    const newTransaction = await TransactionModel.create([payload], { session })
    await AccountModel.findByIdAndUpdate(
      payload.debitAccount,
      { $inc: { balance: payload.amount } },
      { session },
    )
    await AccountModel.findByIdAndUpdate(
      payload.creditAccount,
      { $inc: { balance: -payload.amount } },
      { session },
    )
    await session.commitTransaction()
    session.endSession()
    return newTransaction[0]
  } catch (err) {
    await session.abortTransaction()
    session.endSession()
    console.log(err)
  }
}
const getAllTransactions = async () => {
  return await TransactionModel.find().populate('referenceAccountId')
}
export const TransactionServices = {
  createTransaction,
  getAllTransactions,
}
