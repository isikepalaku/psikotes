import React, { useEffect } from 'react';

export const ShiningFavicon = () => {
  useEffect(() => {
    const setFavicon = () => {
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      favicon.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="%234338ca">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="50" y="60" text-anchor="middle" font-size="40" fill="white">P</text>
      </svg>`;

      // Hapus favicon yang ada sebelumnya
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        document.head.removeChild(existingFavicon);
      }

      document.head.appendChild(favicon);
    };

    setFavicon();
  }, []);

  return null;
}; 