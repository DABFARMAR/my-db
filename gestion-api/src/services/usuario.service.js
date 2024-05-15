import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from usuario'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (rut) => {
    const query = 'select * from usuario where rut_usuario = $1'
    const { rows } = await pool.query(query, [rut])
    return rows[0]
  },
  post: async (rut, correo, pwd, nombre, apellido) => {
    const query = 'insert into usuario values ($1,$2,$3,$4,$5) returning *'
    const values = [rut, correo, pwd, nombre, apellido]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (rut, correo, pwd, nombre, apellido) => {
    const query = 'update usuario set correo = $2, contrasena = $3, nombre = $4, apellido = $5 where rut_usuario = $1 returning *'
    const values = [rut, correo, pwd, nombre, apellido]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (rut) => {
    const query = 'delete from usuario where rut_usuario = $1 returning *'
    const { rows } = await pool.query(query, [rut])
    return rows[0]
  }
}
