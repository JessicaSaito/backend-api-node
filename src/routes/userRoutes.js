import express from 'express'
import {
  showUser,
  listAllUsers,
  createUser,
  deleteUser,
  deleteIdUser,
  editUser
} from '../controllers/userController.js'


const router = express.Router()


router.get('/:id', showUser) // SELECT ID
router.get('/', listAllUsers) // SELECT
router.post('/', createUser) // INSERT
router.delete('/', deleteUser) // DELETE
router.delete('/:id', deleteIdUser) // DELETE ID
router.put('/', editUser) // UPDATE


export default router