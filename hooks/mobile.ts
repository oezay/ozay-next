import { useMediaQuery } from 'usehooks-ts'

export function useIsMobile() {
  const matches = useMediaQuery('(min-width: 1024px)')
  return !matches
}
