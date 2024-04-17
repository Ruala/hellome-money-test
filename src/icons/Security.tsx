import React from "react";

const Security = ({ ...restProps }) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" {...restProps}>
      <path
        d="M43.5625 23.1666C43.5625 33.3541 36.1667 42.8958 26.0625 45.6875C25.375 45.875 24.625 45.875 23.9375 45.6875C13.8333 42.8958 6.4375 33.3541 6.4375 23.1666V14.0208C6.4375 12.3125 7.7292 10.375 9.33336 9.72912L20.9375 4.97919C23.5417 3.91669 26.4792 3.91669 29.0833 4.97919L40.6875 9.72912C42.2708 10.375 43.5834 12.3125 43.5834 14.0208L43.5625 23.1666Z"
        fill="#195399"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.9997 26.0416C27.3009 26.0416 29.1663 24.1762 29.1663 21.875C29.1663 19.5738 27.3009 17.7083 24.9997 17.7083C22.6985 17.7083 20.833 19.5738 20.833 21.875C20.833 24.1762 22.6985 26.0416 24.9997 26.0416Z"
        fill="#195399"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 26.0416V32.2916"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Security;
