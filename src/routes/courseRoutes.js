const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

const { listAllCourses, createCourse, deleteCourse, editCourse} = courseController
//adicionar editCourse quando for testa-lo

router.get('/', listAllCourses);
router.post('/', createCourse);
router.delete('/', deleteCourse);
router.put('/', editCourse);

module.exports = router;