import { Router } from 'express'
import ventaService from '../services/venta.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await ventaService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await ventaService.get(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { rut, rutc, rutu, fecha, venta } = req.body
  try {
    const result = await ventaService.post(rut, rutc, rutu, fecha, venta)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { rutc, rutu, fecha, venta } = req.body
  try {
    const result = ventaService.put(id, rutc, rutu, fecha, venta)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = ventaService.delete(id)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
