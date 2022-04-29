import { useMemo } from 'react'

export const useUsers = (users, query) => {
  return useMemo(() => {
    if (query) {
      return [...users].filter((user) => {
        const { firstName, lastName, patronymic } = user

        const fullName = `${firstName} ${lastName} ${patronymic}`

        return fullName.toLowerCase().includes(query.toLowerCase())
      })
    }

    return users
  }, [users, query])
}
