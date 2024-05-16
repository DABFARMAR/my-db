import express from 'express'
const app = express()



app.get('/',(req,res) => {
    res.send("hELLO");

})

app.listen(3000)

console.log("Server listen...")
/*import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'
import pool from './config/db.config.js'

import clienteController from './src/controllers/cliente.controller.js'
import detalleDevolucionController from './src/controllers/detalle_devolucion.controller.js'
import detallePedidoController from './src/controllers/detalle_pedido.controller.js'
import detalleVentaController from './src/controllers/detalle_venta.controller.js'
import devolucionController from './src/controllers/devolucion.controller.js'
import notificacionController from './src/controllers/notificacion.controller.js'
import pedidoController from './src/controllers/pedido.controller.js'
import productoController from './src/controllers/producto.controller.js'
import proveedorController from './src/controllers/proveedor.controller.js'
import usuarioController from './src/controllers/usuario.controller.js'
import ventaController from './src/controllers/venta.controller.js'

const server = express()
const port = process.env.PORT || 3000

server.use(cors())
server.use(express.json())
server.use(bodyParser.json())

server.use('/cliente', clienteController)
server.use('/detalle_devolucion', detalleDevolucionController)
server.use('/detalle_pedido', detallePedidoController)
server.use('/detalle_venta', detalleVentaController)
server.use('/devolucion', devolucionController)
server.use('/notificacion', notificacionController)
server.use('/pedido', pedidoController)
server.use('/producto', productoController)
server.use('/proveedor', proveedorController)
server.use('/usuario', usuarioController)
server.use('/venta', ventaController)

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error de conexión a la base de datos:', err)
  }
  console.log('Conexión exitosa a la base de datos')
  release()
})

server.listen(port)*/
