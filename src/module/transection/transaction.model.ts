import { model, Schema } from 'mongoose'
import { ITransaction } from './transection.interface'

const transactionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
    enum: ['sales', 'purchase', 'receipt', 'payment'],
  },
  debitAccount: {
    type: Number,
    required: true,
  },
  creditAccount: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  referenceAccountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Account',
  },
})

export const TransactionModel = model<ITransaction>(
  'TransactionModel',
  transactionSchema,
)
