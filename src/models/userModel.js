import con from '../db/dbConnection.js'
import { z } from 'zod'

//TODO Testar regex com zod e ChatGPT

const userSchema = z.object({
  id:
    z.number({ message: "ID deve ser um valor numérico." })
      .optional(),
  nome:
    z.string({
      required_error: "Nome é obrigatória.",
      invalid_type_error: "Nome deve ser uma string.",
    })
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres." })
      .max(100, { message: "Nome deve ter no máximo 100 caracteres." }),
  email:
    z.string({
      required_error: "Email é obrigatória.",
      invalid_type_error: "Email deve ser uma string.",
    })
      .email({ message: "Email Inválido." })
      .min(5, { message: "O email deve ter ao menos 5 caracteres." })
      .max(200, { message: "Email deve ter no máximo 200 caracteres." }),
  senha:
    z.string({
      required_error: "Senha é obrigatória.",
      invalid_type_error: "Senha deve ser uma string.",
    })
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres." })
      .max(256, { message: "Senha deve ter no máximo 256 caracteres." }),
  avatar:
    z.string({
      required_error: "Avatar é obrigatória.",
      invalid_type_error: "Avatar deve ser uma string.",
    })
      .url({ message: "Avatar deve ser uma URL válida." })
})


export const validateUser = (user) => {
  return userSchema.safeParse(user)
}


export const showUser = (id, callback) => {
  const sql = "SELECT * FROM usuarios WHERE id = ?;"
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}


export const listAllUsers = (callback) => {
  const sql = "SELECT * FROM usuarios;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}


export const createUser = (user, callback) => {
  const { nome, foto, email, senha } = user
  const sql = 'INSERT INTO usuarios (nome, foto, email, senha) VALUES (?, ?, ?, ?);'
  {/*const sql = 'INSERT INTO cursos SET ?;'*/ }
  const values = [nome, foto, email, senha]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error:  ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}


export const deleteUser = (id, callback) => {
  const sql = 'DELETE FROM usuarios WHERE id = ?;'
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error:  ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}


export const editUser = (user, callback) => {
  const { id, nome, foto, email, senha } = user
  const sql = 'UPDATE usuarios SET nome = ?, foto = ?, email = ?, senha = ? WHERE id = ?;'
  const values = [nome, foto, email, senha, id]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error:  ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}


const userModel = { showUser, listAllUsers, createUser, deleteUser, editUser, validateUser }


export default userModel