import { Router } from 'express'

import { accountRoute } from '../module/accounts/accounts.routes'
import { transactionRoute } from '../module/transection/transaction.routes'

const router = Router()

router.use('/account', accountRoute)
router.use('/transaction', transactionRoute)

export default router
