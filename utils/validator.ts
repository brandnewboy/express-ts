import { UserLoginForm } from '../types/user'

export const validateLoginForm = (formData: UserLoginForm) => {
  const { username, password } = formData
  if (!username || !password) return false
  return true
}
