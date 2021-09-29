import { render, screen } from '@testing-library/react'

import BackgroundLines from '.'

describe('<BackgroundLines />', () => {
  it('should render the heading', () => {
    const { container } = render(<BackgroundLines />)

    expect(
      screen.getByRole('heading', { name: /BackgroundLines/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
