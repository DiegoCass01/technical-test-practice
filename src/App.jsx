import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // gets the fact when rendering the page
  useEffect(async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }, [])

  // gets the image if theres a new fact
  useEffect(() => {
    if (!fact) return
    // getting first word
    const firstWord = fact.split(' ')[0]
    // and setting the url with the fact's first word
    setImageUrl(`${CAT_PREFIX_IMAGE_URL}${firstWord}`)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Extracted from ${fact}`} height={500} />}

    </main>
  )
}
