import React from 'react';

import configPromise from '@payload-config';
import { getPayload } from 'payload';
import PlatformIconLink from '@/collections/Platforms/PlatformIconLink';

const Socials = async () => {
  const payload = await getPayload({ config: configPromise });
  const platforms = await payload.find({
    collection: 'platforms',
    draft: false,
    limit: 1000,
  });

  console.log("platforms", platforms);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Socials</h2>
        <p className="text-sm text-gray-600 mt-2">Follow us</p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        {platforms.docs.map((platform) => (
          <PlatformIconLink key={platform.id} platform={platform} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
