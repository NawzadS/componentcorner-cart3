import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import CartItem from '../CartItem'

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('CartItem', () => {
  it('renders product info (name, price, quantity)', () => {
    const product = { id: 1, name: 'Keyboard', price: 50 }
    const quantity = 2

    renderWithRouter(
      <CartItem
        product={product}
        quantity={quantity}
        removeFromCart={() => {}}
      />
    )

    expect(screen.getByText(/keyboard/i)).toBeInTheDocument()
    expect(screen.getByText(/\$50/)).toBeInTheDocument()
    expect(screen.getByText(/quantity:\s*2/i)).toBeInTheDocument()
  })

  it('calls removeFromCart when "-" button is clicked', async () => {
    const user = userEvent.setup()
    const removeFromCart = vi.fn()
    const product = { id: 2, name: 'Mouse', price: 20 }
    const quantity = 1

    renderWithRouter(
      <CartItem
        product={product}
        quantity={quantity}
        removeFromCart={removeFromCart}
      />
    )

    await user.click(screen.getByRole('button', { name: '-' }))
    expect(removeFromCart).toHaveBeenCalledTimes(1)
  })
})
