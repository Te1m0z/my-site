import jwt from 'jsonwebtoken'

const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET

export const createAccessToken = (payload: object) => {
  return new Promise((resolve, reject) => {
    // Если нет Секретного ключа - ошибка
    if (!accessTokenSecret) return reject(null)
    // Генерация JWT токена
    jwt.sign(
      { payload },
      accessTokenSecret,
      {
        expiresIn: '1h',
      },
      (err, token) => {
        if (err) reject('Errot')
        resolve(token)
      },
    )
  })
}

// export const verifyAccessToken = (token) => {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, accessTokenSecret, (err, payload) => {
//       if (err) {
//         const message =
//           err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
//         return reject(createError.Unauthorized(message))
//       }
//       resolve(payload)
//     })
//   })
// }
