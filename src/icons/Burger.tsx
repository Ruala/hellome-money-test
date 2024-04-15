import React from 'react';

const Burger = ({ ...restProps }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" {...restProps}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M24.667 20.583a.75.75 0 01.101 1.493l-.101.007H7.334a.75.75 0 01-.102-1.493l.102-.007h17.333zm0-5.333a.75.75 0 01.101 1.493l-.101.007H7.334a.75.75 0 01-.102-1.493l.102-.007h17.333zm0-5.333a.75.75 0 01.101 1.493l-.102.007H7.333a.75.75 0 01-.101-1.493l.101-.007h17.333z"
        />
      </g>
    </svg>
  );
};

export default Burger;
