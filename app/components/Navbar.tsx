import React from 'react';
import Link from 'next/link';
import { NavLinks } from '../constants';
import AuthProviders from './AuthProviders';

type Props = {}

const Navbar = (props: Props) => {
  const session = {};         // null by default

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
        {/* Signed In */}
        {session ?(
          <>
            {/* Icon */}
            UserPhoto
            {/* Button */}
            <Link href='/'>
              Share Project!
            </Link>
          </>

        // Signed Out
        ) :(
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar