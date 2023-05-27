import { getFromDb } from '@/services/firebase'
import { useEffect, useState } from 'react'

export const useCollection = (collection: string) => {
  const [data, setData] = useState<any>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      setIsFetching(true)

      const docs = await getFromDb(collection)

      setData(docs)

      if (mounted) {
        setIsFetching(false)
      }
    }

    fetchData()

    return () => {
      mounted = false
    }
  }, [collection])

  return { data, isFetching }
}
