import { render, screen } from '@testing-library/react'

import Layout from '.'

describe('<Layout />', () => {
  it('should render the heading', () => {
    const { container } = render(<Layout />)

    expect(screen.getByRole('heading', { name: /Layout/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
