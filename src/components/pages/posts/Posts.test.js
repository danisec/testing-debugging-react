import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Post from './PostsPages'

test('renders halaman post dengan benar', async () => {
  render(<Post />)

  //  search text pages post
  const linkElement = screen.getByText(
    /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
  )
  expect(linkElement).toBeInTheDocument()

  // search button back to home post
  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Back to Home')

  // search text API
  const post = await waitFor(
    () => {
      return screen.findAllByText(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      )
    },
    { timeout: 5000 }
  )
  expect(post).toBeInTheDocument()
})
