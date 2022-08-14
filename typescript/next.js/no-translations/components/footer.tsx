import { MODERN_WEBSITES_REPOSITORY_URL } from '../lib/constants'

export default function Footer() {
  return (
    <footer>
      <span>
        © 2022{' '}
        <a target="__blank" rel="external" href={MODERN_WEBSITES_REPOSITORY_URL}>
          Modern Websites
        </a>. All rights reserved.
      </span>
    </footer>
  )
}