import bcrypt from 'bcrypt'
import { createAccessToken } from '../../auth/utils/jwt'
import { prisma } from '../config/prisma'

export const logIn = async (login: string, password: string) => {
  // Найти юзера с логином
  const user = await prisma.user.findUnique({
    where: {
      login,
    },
  })

  // Если нет юзера - ошибка
  if (!user) 
    throw {
      status: 406,
      message: 'Wrong login or password',
    }
  

  // Юзер есть, проверка паролей
  const checkPassword = bcrypt.compareSync(password, user.password)
  
  // Если пароли не совпадают - ошибка
  if (!checkPassword) 
    throw {
      status: 406,
      message: 'Wrong login or password',
    }
  

  // Если авторизация успешна - Создаем безопасного юзера без пароля

  const secureUser = {
    id: user.id,
    login: user.login,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }

  const accessToken = await createAccessToken(secureUser)

  return {
    ...secureUser,
    accessToken,
  }
}

// export const registerOne = async (req: Request, res: Response) => {
//   try {
//     await userServices.register(req.body)
//     res.status(200).send('Inserted successfully')
//   } catch (error) {
//     return res.status(500).send(getErrorMessage(error))
//   }
// }
