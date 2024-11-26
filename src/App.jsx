import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  // gets the fact when rendering the page
  useEffect(async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }, [])

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
