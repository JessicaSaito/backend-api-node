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
router.delete('/', deleteUser) // DELETE ID FROM BODY JSON
router.delete('/:id', deleteIdUser) // DELETE ID FROM PARAMS
router.put('/', editUser) // UPDATE


export default router