import React from 'react'
import Image from 'next/image';

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    PlayIcon,
    UseGroupIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid"

import {
    FlagIcon,
    Playicon,
    SearchIcon,
    ShoppingCartIcon
}

from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon';
import { signOut , useSession } from 'next-auth/react';

function Header() {

  const [session] = useSession();
  
  return (
    <div className='sticky top-0 z-50 flex items-center p-2 bg-white shadow-md lg:px-5'>

{/*LEFT */}

<div className='flex items-center'>

<Image src="https://links.papareact.com/5me" width={40}  height={40} layout="fixed"/>


<div className='flex items-center p-2 ml-2 bg-gray-100 rounded-full '>
<SearchIcon className = "h-6 text-gray-600" />
    <input className='flex items-center flex-shrink ml-2 placeholder-gray-500 bg-transparent outline-none' type="text" placeholder="Search Facebook"  />
</div>


</div>

{/**CENTER */}
<div className='flex justify-center flex-grow'>
<div className='flex space-x-6 md:space-x-2'>
    <HeaderIcon active Icon={HomeIcon} />
    <HeaderIcon active Icon={FlagIcon} />
    <HeaderIcon active Icon={PlayIcon} />
    <HeaderIcon active Icon={ShoppingCartIcon} />
    <HeaderIcon active Icon={UserGroupIcon} />
</div>
</div>

{/*RIGHT */}
<div className='flex items-center justify-end sm:space-x-2'>
    {/**Profile pics */}
    
    <p className='pr-3 font-semibold whitespace-nowrap'>Fatou Ba</p>
  <ViewGridIcon className='icon' />
  <ChatIcon className='icon' />
  <BellIcon className='icon' />
  <ChevronDownIcon className='icon' />
  
</div>
    </div>
  )
}

export default Header;

