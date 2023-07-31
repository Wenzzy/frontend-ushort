import { IconProps } from '#types/interfaces'

export function BurgerIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_439)">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_439">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  )
}
