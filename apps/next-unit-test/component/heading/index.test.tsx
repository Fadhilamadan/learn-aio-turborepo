import { render, screen } from '@testing-library/react'

import Heading from './index'

describe('Heading component', () => {
	test('renders the heading text', () => {
		render(<Heading text="Hello, world!" />)
		const headingElement = screen.getByRole('heading', { name: 'Hello, world!' })
		expect(headingElement).toBeInTheDocument()
	})
})
