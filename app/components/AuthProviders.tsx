"use client";     // this code has to be on the 1st line!!!
import React from 'react';
import { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react';



type Props = {
  id: string;
  name: string;
  type: string;
  signInUrl: string;
  callbackUrl: string;
  signInUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = (props: Props) => {
  const [providers, setProviders] = useState<Providers | null>(null);


  // fetches the providers
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();       // library from next-auth
      console.log(res);
      setProviders(res);
    }
    fetchProviders();
  }, [])
  

    if(providers){
      return(
        <div>
          {Object.values(providers).map((provider: Provider, i) => (
            <button key={i}>{provider.id}</button>
          ))}
        </div>
      )
      
    }
}

export default AuthProviders