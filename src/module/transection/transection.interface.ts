import { Types } from 'mongoose'

type TransactionType = 'sales' | 'purchase' | 'receipt' | 'payment'

export interface ITransaction {
  date: Date
  description: string
  transactionType: TransactionType
  debitAccount: number
  creditAccount: number
  amount: number
  referenceAccountId: Types.ObjectId
}
