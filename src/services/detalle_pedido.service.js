import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from detalle_pedido'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id1, id2) => {
    const query = 'select * from detalle_pedido where id_pedido = $1 and id_producto = $2'
    const { rows } = await pool.query(query, [id1, id2])
    return rows[0]
  },
  post: async (id1, id2, cantidad, precio) => {
    const query = 'insert into detalle_pedido values ($1,$2,$3,$4) returning *'
    const values = [id1, id2, cantidad, precio]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (id1, id2, cantidad, precio) => {
    const query = 'update detalle_pedido set cantidad = $3, precio_total = $4 where id_pedido = $1 and id_producto = $2 returning *'
    const values = [id1, id2, cantidad, precio]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id1, id2) => {
    const query = 'delete from detalle_pedido where id_pedido = $1 and id_producto = $2 returning *'
    const { rows } = await pool.query(query, [id1, id2])
    return rows[0]
  }
}
