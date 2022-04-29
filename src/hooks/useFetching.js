import { useState } from 'react'

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      await Promise.all([
        callback(...args),
        new Promise((resolve) => {
          setTimeout(() => resolve(''), 1500)
        }),
      ])
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}
