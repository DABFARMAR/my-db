import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from producto'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id) => {
    const query = 'select * from producto where id_producto = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  },
  post: async (id, nombre, cat, cant, minCant, precio) => {
    const query = 'insert into producto values ($1,$2,$3,$4,$5,$6) returning *'
    const values = [id, nombre, cat, cant, minCant, precio]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (id, nombre, cat, cant, minCant, precio) => {
    const query = 'update producto set nombre = $2, categoria = $3, cantidad = $4, min_cantidad = $5, precio_venta = $6 where id_producto = $1 returning *'
    const values = [id, nombre, cat, cant, minCant, precio]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id) => {
    const query = 'delete from producto where id_producto = $1 returning *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
