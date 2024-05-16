import { Router } from 'express'
import proveedorService from '../services/proveedor.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await proveedorService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await proveedorService.get(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { rut, nombre, direccion, numero, tipo } = req.body
  try {
    const result = await proveedorService.post(rut, nombre, direccion, numero, tipo)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { nombre, direccion, numero, tipo } = req.body
  try {
    const result = proveedorService.put(id, nombre, direccion, numero, tipo)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = proveedorService.delete(id)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
