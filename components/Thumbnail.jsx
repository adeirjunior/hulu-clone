import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
    const title = result.original_title || result.title;

    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="group mx-3 cursor-pointer transition duration-200 ease-in  mb-10 transform sm:hover:scale-105 hover:z-50">
        <Image 
        alt ={title}
        layout='responsive'
        height={1080}
        width={1920}
        className='rounded-lg select-none hover:drop-shadow-2xl'
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
        }
        />
        <div className='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className='text-2xl text-white mt-1 transition-all duration-120 ease-in-out group-hover:font-bold'>
            {title}
            </h2>
            <p className='flex select-none items-center opacity-0 group-hover:opacity-100'>
                {result.media_type && `${result.media_type}`}{" "}
                {result.release_date || result.first_air_date}{" "}
                <ThumbUpIcon className='h-5 mx-2'/> {result.vote_count}
            </p>
        </div>
    </div>
  )
})

export default Thumbnail;