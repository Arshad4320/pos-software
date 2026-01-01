import { Request, Response } from 'express'
import { TransactionServices } from './transaction.services'

const createTransaction = async (req: Request, res: Response) => {
  try {
    const result = await TransactionServices.createTransaction(req.body)
    res.json({
      success: true,
      message: 'Transaction created successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create transaction',
      error: err,
    })
  }
}

const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const result = await TransactionServices.getAllTransactions()
    res.json({
      success: true,
      message: 'Transaction retrived successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    })
  }
}

export const TransactionController = {
  createTransaction,
  getAllTransactions,
}
