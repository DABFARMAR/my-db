import { Router } from 'express'
import usuarioService from '../services/usuario.service.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await usuarioService.getAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await usuarioService.get(id)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  const { rut, correo, pwd, nombre, apellido } = req.body
  try {
    const result = await usuarioService.post(rut, correo, pwd, nombre, apellido)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { correo, pwd, nombre, apellido } = req.body
  try {
    const result = usuarioService.put(id, correo, pwd, nombre, apellido)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = usuarioService.delete(id)
    return res.json(result)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export default router
