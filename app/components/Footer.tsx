import React from 'react';
import Image from 'next/image';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flexStart footer'>
      <div className="flex flex-col gap-10 w-full">
        <div className="flex item-start flex-col">
          <Image 
            src='https://en.bloggif.com/tmp/33206a2ad0de2106772bc85c82fa48e5/text.gif?1688511494'
            width={120}  
            height={100}
            alt='banner image here'  
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer