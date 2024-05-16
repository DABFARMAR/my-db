import { Router } from 'express'
import devolucionService from '../services/devolucion.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await devolucionService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await devolucionService.get(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { rut, idv, fecha, descripcion } = req.body
  try {
    const result = await devolucionService.post(rut, idv, fecha, descripcion)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { idv, fecha, descripcion } = req.body
  try {
    const result = devolucionService.put(id, idv, fecha, descripcion)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = devolucionService.delete(id)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
