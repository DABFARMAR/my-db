import { Router } from 'express'
import detalleDevolucionService from '../services/detalle_devolucion.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await detalleDevolucionService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  try {
    const user = await detalleDevolucionService.get(id1, id2)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { id1, id2, cantidad } = req.body
  try {
    const result = await detalleDevolucionService.post(id1, id2, cantidad)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  const { cantidad } = req.body
  try {
    const result = detalleDevolucionService.put(id1, id2, cantidad)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id1/:id2', async (req, res) => {
  const { id1, id2 } = req.params
  try {
    const result = detalleDevolucionService.delete(id1, id2)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
