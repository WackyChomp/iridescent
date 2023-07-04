import React from 'react';
import Link from 'next/link';
import { NavLinks } from '../constants';

type Props = {}

const Navbar = (props: Props) => {
  const session = {}

  return (
    <nav className='flexBetween navbar'>
      <div className="flex-1 flexStart gap-10">
        <Link href='/'>
          <span className='text-2xl'>Iridescent</span>

          <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </Link>
      </div>


      {/* Profile icon for sign in */}
      <div className="flexCenter gap-5">
        {session ?(
          <>
            UserPhoto
            <Link href='/'>
              Share Project!
            </Link>
          </>

        ) :(
          <h1>Placeholder</h1>
        )}
      </div>
    </nav>
  )
}

export default Navbar