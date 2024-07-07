import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar/Searchbar'
import ProductCarousel from './components/ProductCarousel/ProductCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <div>
        <div> 
          <p>
            Demo introduction text
          </p>

          <h1>
            TAGLINE TO BE INSERTED
          </h1>

          <p>
            DESCRIPTIVE TEXT
          </p>

          <ProductCarousel/>

        </div>

        <Searchbar/>
        
      </div>
    </section>
  </>
  )
}

export default App
