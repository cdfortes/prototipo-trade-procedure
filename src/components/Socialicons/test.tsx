import { render, screen } from '@testing-library/react'

import Socialicons from '.'

describe('<Socialicons />', () => {
  it('should render the heading', () => {
    const { container } = render(<Socialicons bordered />)

    expect(
      screen.getByRole('heading', { name: /Socialicons/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
