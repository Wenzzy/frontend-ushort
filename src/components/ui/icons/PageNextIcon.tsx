import { IconProps } from '#types/interfaces'

export function PageNextIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <g id="chevron_right" clipPath="url(#clip0_12_468)">
        <path id="Vector" d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" />
      </g>
      <defs>
        <clipPath id="clip0_12_468">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  )
}
