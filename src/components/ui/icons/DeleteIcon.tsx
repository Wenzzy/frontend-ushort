import { IconProps } from '#types/interfaces'

export function DeleteIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <g id="delete_sweep" clipPath="url(#clip0_12_460)">
        <path
          id="Vector"
          d="M15 16H19V18H15V16ZM15 8H22V10H15V8ZM15 12H21V14H15V12ZM3 18C3 19.1 3.9 20 5 20H11C12.1 20 13 19.1 13 18V8H3V18ZM14 5H11L10 4H6L5 5H2V7H14V5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_460">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  )
}
