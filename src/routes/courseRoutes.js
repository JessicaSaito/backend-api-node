import express from 'express'
import {
  listCourse,
  listAllCourses,
  createCourse,
  deleteCourse,
  deleteIdCourse,
  editCourse
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/:id', listCourse) // SELECT ID
router.get('/', listAllCourses) // SELECT
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) //  ID FROM BODY JSON
router.delete('/:id', deleteIdCourse) // DELETE ID FROM PARAMS
router.put('/', editCourse) // UPDATE

export default router