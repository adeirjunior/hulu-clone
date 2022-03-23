import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
}
from "@heroicons/react/outline"
import Image from 'next/image';
import HeaderItem from './HeaderItem.jsx';

function Header() {
  return (
    <header className="select-none flex flex-col sm:flex-row m-5 content-center justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
      </div>
      <Image 
      className='object-contain'
      alt='Image'
      width={200}
      height={100}
      src="https://links.papareact.com/ua6"
      />
    </header>
  )
}

export default Header