import React from 'react';
import { Platform } from '@/payload-types';

interface PlatformIconLinkProps {
  platform: Platform;
}

const PlatformIconLink: React.FC<PlatformIconLinkProps> = ({ platform }) => {
  if (!platform) return null;

  const { name, link, image } = platform;

  const imageUrl = image || '/default-icon.png'; 

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full hover:bg-gray-200 transition"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-12 h-12 object-cover rounded-full"
      />
    </a>
  );
};

export default PlatformIconLink;
