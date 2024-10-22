import React, { useEffect } from 'react'
import { getComics } from './services/api'


function App() {
  const [comics, setComics] = React.useState([])

  useEffect(() => {
    async function loadComics() {
      try {
        const response = await getComics()
        console.log(response)
        setComics(response.data.data.results)
      } catch (error) {
        console.error('Error fetching comics:', error)
      }
    }

    loadComics()
  }, [])

  useEffect(() => {
    console.log(comics);
  }, [comics]);

  return (
    <div className="App">
      <h1>Marvel Comic Catalog</h1>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
