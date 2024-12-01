import React from 'react';
import { Platform } from '@/payload-types';
import Image from 'next/image';
import { Media } from '@/payload-types';

interface PlatformIconLinkProps {
  image?: string | Media | null;
  link: string;
}

const PlatformIconLink: React.FC<PlatformIconLinkProps> = ({ image, link }) => {

  const imageUrl = typeof image === 'string' ? image : image?.url || '/default-icon.png';

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full hover:bg-gray-200 transition"
    >
      {typeof image !== 'string' && image?.url && (
        <div className="relative h-[40vh] sm:h-[40vh] md:h-[60vh] lg:min-h-[50vh] w-full lg:w-[45%]">
          <Image
            src={image.url}
            alt={image.alt || 'Image description'}
            fill
            className="object-contain"
          />
        </div>
      )}
    </a>

  );
};

export default PlatformIconLink;