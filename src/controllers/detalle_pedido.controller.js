import { Router } from 'express'
import detallePedidoService from '../services/detalle_pedido.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await detallePedidoService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  try {
    const user = await detallePedidoService.get(id1, id2)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { id1, id2, cantidad, precio } = req.body
  try {
    const result = await detallePedidoService.post(id1, id2, cantidad, precio)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  const { cantidad, precio } = req.body
  try {
    const result = detallePedidoService.put(id1, id2, cantidad, precio)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  try {
    const result = detallePedidoService.delete(id1, id2)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
