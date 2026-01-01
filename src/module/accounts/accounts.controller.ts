import { Request, Response } from 'express'
import { AccountServices } from './accounts.services'

const createAccount = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.createAccount(req.body)
    res.json({
      success: true,
      message: 'account created successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create account',
      error: err,
    })
  }
}
const getAllAccounts = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.getAllAccounts()
    res.json({
      success: true,
      message: 'account retrived successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}
const getAccountById = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.getAccountById(req.params.id)
    res.json({
      success: true,
      message: 'single account retrived successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}
const updateAccount = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.updateAccount(req.params.id, req.body)
    res.json({
      success: true,
      message: 'account updated successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}
const deleteAccount = async (req: Request, res: Response) => {
  try {
    const result = await AccountServices.deleteAccount(req.params.id)

    res.json({
      success: true,
      message: 'account deleted successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}

export const AccountController = {
  createAccount,
  getAccountById,
  getAllAccounts,
  deleteAccount,
  updateAccount,
}
