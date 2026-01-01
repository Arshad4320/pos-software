import { Router } from 'express'
import { AccountController } from './accounts.controller'

const router = Router()
router.post('/create-account', AccountController.createAccount)
router.get('/get-accounts', AccountController.getAllAccounts)
router.get('/get-account/:id', AccountController.getAccountById)
router.patch('/update-account/:id', AccountController.updateAccount)
router.delete('/delete-account/:id', AccountController.deleteAccount)

export const accountRoute = router
