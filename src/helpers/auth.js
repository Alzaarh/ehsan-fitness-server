import jwt from 'jsonwebtoken'

export const sign = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
      (e, token) => {
        if (e) return reject(e)
        resolve(token)
      }
    )
  })
}
