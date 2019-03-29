import React from 'react';

const Logo = ({
  className,
  ...props
}) => {
  return (
    <span className={props.className}>
      <svg {...props} viewBox="0 0 288 96" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Logo</title>
        <g id="Icons-Logo-Container" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Icons-Logo" transform="translate(-56.000000, -152.000000)" fill="#008380">
            <path d="M260,160 L340,160 L340,240 L260,240 L260,160 Z M110,160 L160,240 L60,240 L110,160 Z M204,244 C179.699471,244 160,224.300529 160,200 C160,175.699471 179.699471,156 204,156 C228.300529,156 248,175.699471 248,200 C248,224.300529 228.300529,244 204,244 Z" id="logo"></path>
          </g>
        </g>
      </svg>
    </span>
  )
}

export default Logo