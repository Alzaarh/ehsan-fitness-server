import { matchedData, validationResult } from 'express-validator'

export const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res
      .status(400)
      .send({ errors: errors.array(), message: 'Validation error' })
  req.body = matchedData(req)
  next()
}
