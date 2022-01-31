
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

import Image from 'next/image'
import HeaderItem from './HeaderItem';

function Header() {
  return (
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
          <div className="flex flex-grow justify-evenly max-w-2xl mt-8">
              <HeaderItem title="HOME" Icon={HomeIcon}/>
              <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
              <HeaderItem title="VERIFICADOS" Icon={BadgeCheckIcon}/>
              <HeaderItem title="COLEÇÕES" Icon={CollectionIcon}/>
              <HeaderItem title="PESQUISAR" Icon={SearchIcon}/>
              <HeaderItem title="CONTA" Icon={UserIcon}/>
          </div>
          <Image
            className="object-contain cursor-pointer"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
          />
      </header>
  );
}

export default Header;
