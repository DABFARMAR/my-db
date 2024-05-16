import { Router } from 'express'
import detalleVentaService from '../services/detalle_venta.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await detalleVentaService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  try {
    const user = await detalleVentaService.get(id1, id2)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { id1, id2, cantidad, precio } = req.body
  try {
    const result = await detalleVentaService.post(id1, id2, cantidad, precio)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  const { cantidad, precio } = req.body
  try {
    const result = detalleVentaService.put(id1, id2, cantidad, precio)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  try {
    const result = detalleVentaService.delete(id1, id2)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
