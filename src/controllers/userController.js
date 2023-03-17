import userModel from '../models/userModel.js'


export const showUser = (req, res) => {
  const id = req.params.id
  userModel.showUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}


export const listAllUsers = (req, res) => {
  userModel.listAllUsers((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}


export const createUser = (req, res) => {
  const user = req.body
  //TODO Verificar se os dados são válidos
  userModel.createUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      res.json({
        message: "Usuário Cadastrado!",
        user: {
          id: result.insertId,
          ...user
        }
      })
    }
  })
}


export const deleteUser = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${id} não encontrado` })
      }
    }
  })
}


export const deleteIdUser = (req, res) => {
  const { id } = req.params
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${id} não encontrado` })
      }
    }
  })
}


export const editUser = (req, res) => {
  const id = req.body
  //TODO Verificar se os dados são válidos
  userModel.editUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Atualizado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${id} não encontrado` })
      }
    }
  })
}