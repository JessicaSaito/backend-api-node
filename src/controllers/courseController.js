import courseModel from '../models/courseModel.js'

export const listCourse = (req, res) => {
  const id = req.params.id
  courseModel.listCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const listAllCourses = (req, res) => {
  courseModel.listAllCourses((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createCourse = (req, res) => {
  const course = req.body
  //TODO Verificar se os dados são válidos
  courseModel.createCourse(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Cadastrado!" })
  })
}

export const deleteCourse = (req, res) => {
  const id = req.body
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Deletado!" })
  })
}

export const deleteIdCourse = (req, res) => {
  const id = req.params
  //TODO Verificar se os dados são válidos
  courseModel.deleteCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Deletado!" })
  })
}

export const editCourse = (req, res) => {
  const id = req.body
  //TODO Verificar se os dados são válidos
  courseModel.editCourse(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Curso Atualizado com sucesso!" })
  })
}