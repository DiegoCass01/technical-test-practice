import { useEffect, useState } from 'react'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // gets the image if theres a new fact
  useEffect(() => {
    if (!fact) return
    // getting first word
    const firstWord = fact.split(' ')[0]
    // and setting the url with the fact's first word
    setImageUrl(firstWord)
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
