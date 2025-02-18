import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('app', () => {
  it('math', () => {
    expect(2 + 2).toBe(4)
  })

  it('app', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(screen.getByRole('button', {
      name: /you pressed me 0 times/i,
    })).toBeInTheDocument()

    await user.click(screen.getByRole('button', {
      name: /you pressed me 0 times/i,
    }))

    expect(screen.queryByRole('button', {
      name: /you pressed me 0 times/i,
    })).not.toBeInTheDocument()

    expect(screen.getByRole('button', {
      name: /you pressed me 1 times/i,
    })).toBeInTheDocument()
  })
})
