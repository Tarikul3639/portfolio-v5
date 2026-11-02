import type { SVGProps } from "react"

export function AwsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <text
        x="5"
        y="29"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        fontSize="23"
        fontWeight="700"
        letterSpacing="-1.8"
      >
        aws
      </text>
      <path
        d="M10 35.5c9.2 5.1 20.8 5.1 29 0"
        stroke="#ff9900"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path d="m35.8 33.8 4.1 1.2-2 3.7" fill="#ff9900" />
    </svg>
  )
}
