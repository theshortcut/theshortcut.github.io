import React, { FC, SVGProps } from 'react';

const Logo: FC<SVGProps<SVGSVGElement>> = ({
  width = 404,
  height = 241,
  fill = '#000',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 404 241"
    fill="none"
    {...props}
  >
    <path
      d="M128.8 240c15-1.7 29.4-5.8 43-13v-.1a112.6 112.6 0 0018-12.4l.3-.1.2-.2 1.1-1.3c5.6-5 10.8-10.5 15.6-16.6 11.9-15.4 19.5-32.3 22.7-50.8h77.5a20 20 0 0014-5.1h.2v-.2c3.7-3.6 5.5-8.3 5.5-13.6 0-5.2-1.8-9.8-5.5-13.4a19.4 19.4 0 00-14.2-5.4h-73A83.7 83.7 0 01255 67.4a81.2 81.2 0 0125-17.9 70.4 70.4 0 0129.8-6.4H322a12.7 12.7 0 00.9 0 24.5 24.5 0 008.4-2.2c2.4-1 5-2.8 7-5.6a18 18 0 003.3-10.8c0-4.3-1.2-7.9-3.3-10.7-2-2.8-4.6-4.5-7-5.6A24.2 24.2 0 00322 6h-12.3A111.9 111.9 0 00227 41.2a120.3 120.3 0 00-24.6 38.2 124 124 0 00-8.7 46.7 104 104 0 01-4 24 75.2 75.2 0 01-25.5 36.6 82.1 82.1 0 01-39.3 16.1 78.6 78.6 0 01-38.5-5.7A81.2 81.2 0 0144.8 153c-4-10.1-6-21-6-32.7 0-11.5 2-22.2 6-32.1 4-10.2 9.5-19.1 16.5-26.7a81.2 81.2 0 0125-17.9 70.4 70.4 0 0129.9-6.4c12 0 21.3 1.6 28 4.5 7.1 3 14 7.4 20.8 13.3h.1l.1.1c4.2 3.3 9 5 14 4.8h.3c4.6-.5 8.7-2.2 12-5.3a17 17 0 005.7-13c0-3-.5-5.8-1.6-8.3a21 21 0 00-6-7.3A114.2 114.2 0 00156 6.1C144.6 2 131.4 0 116.2 0a111.9 111.9 0 00-82.8 35.2A120.3 120.3 0 008.7 73.4C3 87.9 0 103.4 0 120.2c0 16.9 2.9 32.7 8.7 47.4 6 14.6 14.2 27.4 24.6 38.4h.1c10.6 10.9 23 19.4 37 25.6a116.3 116.3 0 0058.4 8.5z"
      fill={fill}
    />
  </svg>
);

export default Logo;