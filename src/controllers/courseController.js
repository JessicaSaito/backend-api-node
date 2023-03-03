const mysql = require('mysql')
const courseModel = require('../models/courseModel')

const listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

const createCourse = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

const deleteCourse = (req, res) => {

  const id = req.body
  //TODO Verificar se os dados são válidos

  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Deletado!" })
  })
}

const editCourse = (req, res) => {

  const id = req.body
  //TODO Verificar se os dados são válidos

  courseModel.editCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Atualizado com sucesso!" })
  })
}

module.exports = { listAllCourses, createCourse, deleteCourse, editCourse }