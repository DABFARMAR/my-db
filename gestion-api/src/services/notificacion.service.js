import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from notificacion'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id) => {
    const query = 'select * from notificacion where id_notificacion = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  },
  post: async (fecha, idp, titulo, descripcion) => {
    const query = 'insert into notificacion (fecha, id_producto, titulo, descripcion) values ($1,$2,$3,$4) returning *'
    const values = [fecha, idp, titulo, descripcion]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (id, fecha, idp, titulo, descripcion) => {
    const query = 'update notificacion set fecha = $2, id_producto = $3, titulo = $4, descripcion = $5 where id_notificacion = $1 returning *'
    const values = [id, fecha, idp, titulo, descripcion]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id) => {
    const query = 'delete from notificacion where id_notificacion = $1 returning *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
