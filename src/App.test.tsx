import { render, screen } from '@testing-library/react'
import App from './App'

describe('app', () => {
  it('math', () => {
    expect(2 + 2).toBe(4)
  })

  it('app', () => {
    render(<App />)
    expect(screen.getByRole('button', {
      name: /click here!/i,
    })).toBeInTheDocument()
  })
})
