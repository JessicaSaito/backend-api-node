import con from '../db/dbConnection.js'

export const listCourse = (id, callback) => {
  const sql = "SELECT * FROM cursos WHERE id = ?;"
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log('DB Error:' + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

export const listAllCourses = (callback) => {
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log('DB Error:' + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

export const createCourse = (course, callback) => {
  const { nome, cargahoraria } = course
  const sql = 'INSERT INTO cursos (nome, cargahoraria) VALUES (?, ?);'
  {/*const sql = 'INSERT INTO cursos SET ?;'*/}
  const values = [nome, cargahoraria]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error:  ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const deleteCourse = (course, callback) => {
  const {id} = course
  const sql = 'DELETE FROM cursos WHERE id = ?;'
  const values = [id]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error:  ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const editCourse = (course, callback) => {
  const {id, nome, cargahoraria} = course
  const sql = 'UPDATE cursos SET nome = ?, cargahoraria = ? WHERE id = ?;'
  const values = [nome, cargahoraria, id]
  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error:  ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

const courseModel = { listCourse, listAllCourses, createCourse, deleteCourse, editCourse }

export default courseModel