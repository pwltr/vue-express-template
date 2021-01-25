import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: '../.env' })
}

/**
 * Returns value stored in environment variable with the given `name`.
 * Throws Error if no such variable or if variable undefined; thus ensuring type-safety.
 * @param name - name of variable to fetch from this process's environment.
 */
export function env(name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`)
  }

  return value
}
