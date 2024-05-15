import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from detalle_devolucion'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id1, id2) => {
    const query = 'select * from detalle_devolucion where id_devolucion = $1 and id_producto = $2'
    const { rows } = await pool.query(query, [id1, id2])
    return rows[0]
  },
  post: async (id1, id2, cantidad) => {
    const query = 'insert into detalle_devolucion values ($1,$2,$3) returning *'
    const values = [id1, id2, cantidad]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (id1, id2, cantidad) => {
    const query = 'update detalle_devolucion set cantidad = $3 where id_devolucion = $1 and id_producto = $2 returning *'
    const values = [id1, id2, cantidad]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id1, id2) => {
    const query = 'delete from detalle_devolucion where id_devolucion = $1 and id_producto = $2 returning *'
    const { rows } = await pool.query(query, [id1, id2])
    return rows[0]
  }
}
