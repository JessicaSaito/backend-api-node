import express from 'express'
import {
  listAllCourses,
  createCourse,
  deleteCourse,
  editCourse
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.put('/', editCourse) // UPDATE

export default router