import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>
        React Typescript Scaffold
      </h1>
      <button
        type="button"
        onClick={() => {
          setCount(prevCount => prevCount + 1)
        }}
      >
        You pressed me
        {' '}
        {count}
        {' '}
        times
      </button>
    </div>
  )
}

export default App
