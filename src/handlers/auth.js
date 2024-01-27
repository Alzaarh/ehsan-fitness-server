import { sign } from '../helpers/auth.js'

export const signin = async (req, res, next) => {
  try {
    const token = await sign({ id: 1 })
    res.send({ data: { token } })
  } catch (e) {
    next(e)
  }
}
