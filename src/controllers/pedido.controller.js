import { Router } from 'express'
import pedidoService from '../services/pedido.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await pedidoService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await pedidoService.get(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { id, rutp, rutu, fecha, venta } = req.body
  try {
    const result = await pedidoService.post(id, rutp, rutu, fecha, venta)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { rutp, rutu, fecha, venta } = req.body
  try {
    const result = pedidoService.put(id, rutp, rutu, fecha, venta)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = pedidoService.delete(id)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
