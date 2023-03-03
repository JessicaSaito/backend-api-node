const con = require('../db/dbConnection')

const courseModel = {}

courseModel.listAllCourses = (callback) => {
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

courseModel.createCourse = (course, callback) => {
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

courseModel.deleteCourse = (course, callback) => {
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

courseModel.editCourse = (course, callback) => {
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

module.exports = courseModel