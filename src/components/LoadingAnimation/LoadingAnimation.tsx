// components/LoadingSpinner.js
import Image from 'next/image';
import { useEffect, useState } from 'react';
const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-24 h-24">
        <Image
          src="/wheel.png" // Adjust the path if necessary
          alt="Loading"
          layout="fill"
          objectFit="contain"
          className="animate-spin"
        />
      </div>
    </div>
  );
};

export default LoadingAnimation;
