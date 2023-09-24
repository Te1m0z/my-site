type TEnvKey = 'JWT_SECRET_KEY' | 'JWT_EXPIRES_IN';

/**
 *  Tries to find and return a value by the provided key
 *
 * @param {TEnvKey} key - Name of process env variable
 * @returns {string} Value of process env variable
 */
function getEnv(key: TEnvKey): string {
  const value = process.env[key]
  // if value not found then throw an error
  if (!value || value.length === 0) {
    throw new Error(`The environment variable ${key} is not set`)
  }

  return value
}

export { getEnv }

