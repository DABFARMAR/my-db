import { Router } from 'express'
import productoService from '../services/producto.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await productoService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await productoService.get(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { id, nombre, cat, cant, minCant, precio } = req.body
  try {
    const result = await productoService.post(id, nombre, cat, cant, minCant, precio)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { nombre, cat, cant, minCant, precio } = req.body
  try {
    const result = productoService.put(id, nombre, cat, cant, minCant, precio)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = productoService.delete(id)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
