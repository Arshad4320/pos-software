import { model, Schema } from 'mongoose'
import { ITransaction } from './transaction.interface'

const transactionSchema = new Schema(
  {
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
      enum: ['Sales', 'Purchase', 'Receipt', 'Payment'],
    },
    debitAccount: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      required: true,
    },
    creditAccount: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
)

export const TransactionModel = model<ITransaction>(
  'TransactionModel',
  transactionSchema,
)
