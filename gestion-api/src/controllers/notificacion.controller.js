import { Router } from 'express'
import notificacionService from '../services/notificacion.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await notificacionService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await notificacionService.get(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { fecha, idp, titulo, descripcion } = req.body
  try {
    const result = await notificacionService.post(fecha, idp, titulo, descripcion)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { fecha, idp, titulo, descripcion } = req.body
  try {
    const result = notificacionService.put(id, fecha, idp, titulo, descripcion)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = notificacionService.delete(id)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
