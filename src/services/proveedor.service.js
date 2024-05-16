import pool from '../../config/db.config.js'

export default {
  getAll: async () => {
    const query = 'select * from proveedor'
    const { rows } = await pool.query(query)
    return rows
  },
  get: async (id) => {
    const query = 'select * from proveedor where rut_proveedor = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  },
  post: async (rut, nombre, direccion, numero, tipo) => {
    const query = 'insert into proveedor values ($1,$2,$3,$4,$5) returning *'
    const values = [rut, nombre, direccion, numero, tipo]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  put: async (rut, nombre, direccion, numero, tipo) => {
    const query = 'update proveedor set nombre = $2, direccion = $3, numero = $4, tipo = $5 where rut_proveedor = $1 returning *'
    const values = [rut, nombre, direccion, numero, tipo]
    const { rows } = await pool.query(query, values)
    return rows[0]
  },
  delete: async (id) => {
    const query = 'delete from proveedor where rut_proveedor = $1 returning *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }
}
