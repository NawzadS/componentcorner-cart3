import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('ProductCard', () => {
  it('renders product info from props', () => {
    const product = { id: 1, name: 'Test Item', price: 49.99 }

    renderWithRouter(<ProductCard product={product} addToCart={() => {}} />)

    expect(screen.getByText(/test item/i)).toBeInTheDocument()
    expect(screen.getByText(/49\.99/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('calls addToCart when button is clicked', async () => {
    const user = userEvent.setup()
    const addToCart = vi.fn()
    const product = { id: 2, name: 'Test GPU', price: 299.99 }

    renderWithRouter(<ProductCard product={product} addToCart={addToCart} />)

    await user.click(screen.getByRole('button', { name: /add to cart/i }))
    expect(addToCart).toHaveBeenCalledTimes(1)
  })
})
