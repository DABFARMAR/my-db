import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from pedido'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id) => {
    const query = 'select * from pedido where id_pedido = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  },
  post: async (id, rutp, rutu, fecha, compra) => {
    const query = 'insert into pedido values ($1,$2,$3,$4,$5) returning *'
    const values = [id, rutp, rutu, fecha, compra]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (id, rutp, rutu, fecha, compra) => {
    const query = 'update pedido set rut_proveedor = $2, rut_usuario = $3, fecha = $4, compra_total = $5 where id_pedido = $1 returning *'
    const values = [id, rutp, rutu, fecha, compra]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id) => {
    const query = 'delete from pedido where id_pedido = $1 returning *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
