import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // gets the image if theres a new fact
  useEffect(() => {
    if (!fact) return
    // getting first word
    const firstWord = fact.split(' ')[0]
    // and setting the url with the fact's first word
    setImageUrl(`https://cataas.com/cat/says/${firstWord}`)
  }, [fact])

  return { imageUrl }
}
