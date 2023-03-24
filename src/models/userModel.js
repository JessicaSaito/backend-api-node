import con from '../db/dbConnection.js'
import { z } from 'zod'

const userSchema = z.object({
  id: z.number().optional(),
  nome: z.string().min(3).max(50),
  email:
    z.string({ message: "Email Inválido" })
      .email({ message: "Email Inválido" })
      .min(5, { message: "O email deve ter ao menos 5 Caracteres" })
      .max(50),
  senha: z.string().min(3).max(50),
  avatar: z.string()
})

export const validateUser = (user) => {
  return userSchema.parse(user)
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