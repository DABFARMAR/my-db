import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from venta'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id) => {
    const query = 'select * from venta where id_venta = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  },
  post: async (id, rutc, rutu, fecha, venta) => {
    const query = 'insert into venta values ($1,$2,$3,$4,$5) returning *'
    const values = [id, rutc, rutu, fecha, venta]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (id, rutc, rutu, fecha, venta) => {
    const query = 'update venta set rut_cliente = $2, rut_usuario = $3, fecha = $4, venta = $5 where id_venta = $1 returning *'
    const values = [id, rutc, rutu, fecha, venta]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id) => {
    const query = 'delete from venta where id_venta = $1 returning *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
