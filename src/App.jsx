import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        // getting the fact
        const { fact } = data
        setFact(fact)
        // getting first word
        const firstWord = fact.split(' ')[0]
        // and setting the url with the fact's first word
        setImageUrl(`${CAT_PREFIX_IMAGE_URL}${firstWord}`)
      })
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Extracted from ${fact}`} height={500} />}
    </main>
  )
}
