import EventHost from '@/collections/Users/EventHost';
import VenueComponent from '@/collections/Venues/VenueComponent';
import { Post } from '@/payload-types';
import React from 'react';

const EventDescription: React.FC<{ page: Post }> = ({ page }) => {
    return (
        <div className="flex flex-col lg:flex-row w-100 py-8">
            <div className="flex flex-col justify-start items-start min-w-[50%] py-4">
                <h3 className="text-[1.5rem] font-bold py-2">Description:</h3>
                <p className="text-black text-2xl font-normal pb-5 pr-[5vw]">{page.content}</p>
                <div className="my-auto">
                    {page.platforms &&
                        page.platforms.map((platform) =>
                            typeof platform === 'object' && platform.link && platform.name ? (
                                <span key={platform.name} className="py-1 block text-black text-2xl font-normal">
                                    {platform.name} : {platform.link}
                                </span>
                            ) : null
                        )}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center min-w-[50%] gap-4 w-full lg:w-[36rem] py-8">
                {page.authors &&
                    page.authors.map((author, index) =>
                        typeof author === 'object' && author !== null ? (
                            <EventHost
                                key={index}
                                imageLink={
                                    typeof author.image === 'object' && author.image !== null && author.image.url
                                        ? author.image.url
                                        : ''
                                }
                                name={author.name || ''}
                            />
                        ) : (
                            <EventHost key={index} imageLink="" name={author as string} />
                        )
                    )}
                <div className="w-full max-w-full">
                    <VenueComponent key={page.id} eventDateTime={page.eventDateTime || ''} eventVenue={page.venue || ''} />
                </div>
            </div>
        </div>
    );
};

export default EventDescription;