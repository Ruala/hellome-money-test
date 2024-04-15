import React from 'react';

const Close = ({ ...restProps }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...restProps}>
      <g fill="none" fillRule="evenodd">
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="M16 5 5 16M16 16 5 5" />
        </g>
      </g>
    </svg>
  );
};

export default Close;
