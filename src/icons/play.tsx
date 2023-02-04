import { useState } from 'react';

const PlayIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
      }}
    >
      <circle
        opacity={isHovered ? '1' : '0.25'}
        cx="37.5"
        cy="37.5"
        r="37.5"
        fill="#a445ed"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 27V48L50 37.5L29 27Z"
        fill={isHovered ? '#ffffff' : '#a445ed'}
      />
    </svg>
  );
};

export default PlayIcon;
