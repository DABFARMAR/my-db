import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from devolucion'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id) => {
    const query = 'select * from devolucion where id_devolucion = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  },
  post: async (id, idv, fecha, descripcion) => {
    const query = 'insert into devolucion values ($1,$2,$3,$4) returning *'
    const values = [id, idv, fecha, descripcion]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (id, idv, fecha, descripcion) => {
    const query = 'update devolucion set id_venta = $2, fecha = $3, descripcion = $4 where id_devolucion = $1 returning *'
    const values = [id, idv, fecha, descripcion]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id) => {
    const query = 'delete from devolucion where id_devolucion = $1 returning *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
