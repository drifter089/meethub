import React from 'react';
import { Platform } from '@/payload-types';
import Image from 'next/image';


const PlatformIconLink: React.FC<any> = ({image,link}) => {

  const imageUrl = image || '/default-icon.png'; 

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full hover:bg-gray-200 transition"
    >
     <div className="relative h-[40vh] sm:h-[40vh] md:h-[60vh] lg:min-h-[50vh] w-full lg:w-[45%]">
        {typeof image !== 'string' && image?.url && (
          <Image src={image.url} alt={image.alt} fill className="object-contain" />
        )}
      </div>
    </a>
  );
};

export default PlatformIconLink;