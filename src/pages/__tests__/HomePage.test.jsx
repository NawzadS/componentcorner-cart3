import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '../HomePage'

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />)
    // If you have an h1/h2, this should pass.
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('shows main content', () => {
    render(<HomePage />)
    // If this fails, we’ll swap it to whatever text is actually on your page.
    expect(screen.getByText(/componentcorner|welcome|shop/i)).toBeInTheDocument()
  })
})
