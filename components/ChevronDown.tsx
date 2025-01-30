import { SVGProps } from 'react'

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M18 15l-6-6-6 6' />
  </svg>
)

export default SvgChevronUp
