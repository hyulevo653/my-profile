import {AppConfig} from '@/config/app.config';
import {FiMenu, FiShare} from 'react-icons/fi';
import {OpenMenuButton, siderRef} from '@/components/Sider';

import avatarImage from '../assets/image/IMG_20250925_193508.png';
import verticalAvatar from '../assets/image/abc.png';


export default function ProfileHeader() {
  console.log(avatarImage);
  return <div className={'bg-white border-b'}>
    <div
      className={'h-[200px] bg-cover bg-center'}
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?cs=srgb&dl=pexels-eberhardgross-1287075.jpg&fm=jpg)`,
      }}
    >

      <div className="bg-gradient-to-b from-black/60 to-transparent h-[80%] w-full text-white p-4">

        <div className={'flex flex-row items-center'}>
          <OpenMenuButton/>
          <div className={'md:px-4'}>
            <div className={'font-semibold'}>
              Duc Huy Nguyen
            </div>
            <div className={'text-[12px]'}>
              3 Posts, 25K Views
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={'flex flex-row justify-between px-4'}>
      <div
        className={'overflow-hidden rounded-full w-[100px] h-[100px] bg-cover bg-center border-2 border-white -mt-[32px]'}
        style={{
          backgroundImage: `url(${avatarImage.src})`
        }}
      />
      <div className={'pt-4'}>
        <div className={'border border-neutral-200 w-12 h-12 rounded-full flex justify-center items-center'}>
          <FiShare width="24px"/>
        </div>
      </div>
    </div>
    <div className={'p-4'}>
      <div className={'text-[20px] font-semibold'}>
        {AppConfig.name}
      </div>
      <div className={'flex flex-row text-neutral-500 gap-1 items-center'}>
        <div className={'text-[12px]'}>
          @{AppConfig.username}
        </div>
        <div>
          •
        </div>
        <div className={'text-[12px]'}>
          Available to work <span className={'underline'}>remotely</span>
        </div>
      </div>
      <div className={'text-[14px] mt-1 flex flex-col gap-0.5'}>
        <p className={'leading-relaxed whitespace-pre-wrap line-clamp-3'}>
          {AppConfig.introduction}
        </p>
        <div className={'text-primary font-medium text-[12px] cursor-pointer mt-2'}>
          More info
        </div>
      </div>
    </div>
  </div>;
}
