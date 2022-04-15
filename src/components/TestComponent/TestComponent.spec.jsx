import { render, screen } from '@testing-library/react'
import { TestComponent } from './TestComponent'

jest.mock('@/hooks/useTestHook', () => {
  return {
    useTestHook: () => {
      return 'Working'
    },
  }
});

describe('Home', () => {
    it('renders a heading', () => {
        const { debug } = render(<TestComponent />)
        debug()

    })
})