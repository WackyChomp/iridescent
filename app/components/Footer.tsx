import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterLinks } from '../constants';

type ColumnProps = {
  title: string;
  links: Array<string>;
}

{/* Defined component for footer links , grabs data constants.ts */}
const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => <Link href='/' key={link}>{link}</Link>)}
    </ul>
  </div>
)

{/* -------------------------------------------------------------- */}

{/* Main Footer component */}
const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className="flex flex-col gap-10 w-full">
        <div className="flex item-start flex-col">
          <Image 
            src='/vercel.svg'     // image source is in public directory of root directory
            width={120}  
            height={100}
            alt='banner image here'  
          />
          
          <p className="text-start text-sm font-normal mt-7 max-w-xs">
            Iridescent houses a wide range of projects and personal works
            which will inspire a new generation of innovators! 
          </p>
        </div>
          <div className="flex flex-wrap gap-10">
            <FooterColumn 
              title={FooterLinks[0].title}
              links={FooterLinks[0].links}
            />

            <div className="flex-1 flex flex-col gap-4">
              <FooterColumn 
                title={FooterLinks[1].title}
                links={FooterLinks[1].links}
              />

              <FooterColumn 
                title={FooterLinks[2].title}
                links={FooterLinks[2].links}
              />
            </div>

            <FooterColumn 
              title={FooterLinks[3].title}
              links={FooterLinks[3].links}
            />

              <div className="flex-1 flex flex-col gap-4">
                <FooterColumn 
                  title={FooterLinks[4].title}
                  links={FooterLinks[4].links}
                />

                <FooterColumn 
                  title={FooterLinks[5].title}
                  links={FooterLinks[5].links}
                />
              </div>

            <FooterColumn 
              title={FooterLinks[6].title}
              links={FooterLinks[6].links}
            />
          </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@ 2023 Iridescent. All rights reserved</p>
        <p className='text-gray'>
          <span className='text-black font-semibold'>428</span> rojects submitted
        </p>
      </div>
    </footer>
  )
}

export default Footer