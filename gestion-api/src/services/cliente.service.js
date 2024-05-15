import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from cliente'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id) => {
    const query = 'select * from cliente where rut_cliente = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  },
  post: async (rut, nombre, apellido) => {
    const query = 'insert into cliente values ($1,$2,$3,$4,$5) returning *'
    const values = [rut, nombre, apellido]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (rut, nombre, apellido) => {
    const query = 'update cliente set nombre = $2, apellido = $3 where rut_cliente = $1 returning *'
    const values = [rut, nombre, apellido]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id) => {
    const query = 'delete from cliente where rut_cliente = $1 returning *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
