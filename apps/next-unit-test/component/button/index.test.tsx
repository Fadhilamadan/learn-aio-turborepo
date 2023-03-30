import { render, screen } from '@testing-library/react'

import Button from './index'

describe('Button component', () => {
	it('renders the button with the correct label', () => {
		render(<Button text="Click me" />)
		const buttonElement = screen.getByRole('button', { name: 'Click me' })
		expect(buttonElement).toBeInTheDocument()
	})
})
