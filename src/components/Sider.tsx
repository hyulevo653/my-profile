'use client';
import {FiHome, FiLayout, FiMenu, FiSend, FiUser} from 'react-icons/fi';
import {AppConfig} from '@/config/app.config';
import {IconButton} from '@/components/SiderIconButton';
import {createRef, useImperativeHandle, useState} from 'react';
import {cn} from '@/lib/utils/cn';
import {ClassValue} from 'clsx';

interface SiderRefType {
  open: Function,
}

export const siderRef = createRef<SiderRefType>();

export function OpenMenuButton({className}: {className?: ClassValue}) {
  return <a className={cn(
    'p-4 -ml-4 text-[20px] cursor-pointer md:hidden',
    className
  )} onClick={() => siderRef.current?.open()}>
    <FiMenu/>
  </a>;
}

export default function Sider() {
  const [opened, setOpened] = useState<boolean>(false);

  useImperativeHandle(siderRef, () => ({
    open: () => setOpened(true),
  }));

  return <div
    className={'fixed left-0 top-0 bottom-0 md:relative z-40'}
  >
    {opened && <div className={'bg-black/80 fixed left-0 right-0 top-0 bottom-0 z-10 md:hidden'} onClick={() => setOpened(false)}/>}
    <div
      style={{zIndex: 999}}
      className={cn(
      'flex-col h-full justify-between md:items-start px-4 flex xl:w-[240px] py-6 relative bg-white',
      'transition-all duration-300',
      !opened && '-ml-[80px] md:ml-0'
    )}
    >
      <div className={'flex flex-col gap-6'}>
        <div className={''}>
          <div
            className={'text-[20px] w-[32px] h-[32px] bg-neutral-100 rounded-full flex justify-center items-center text-neutral-400 cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary'}>
            <FiUser/>
          </div>
        </div>
        <IconButton
          icon={FiHome}
          label={'Home'}
          url={'/'}
        />
        <IconButton
          icon={FiSend}
          label={'Contact me'}
          url={'/contact'}
        />
        <IconButton
          icon={FiLayout}
          label={'My CV'}
          url={'/my-cv'}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        {AppConfig.socialLinks.map((social, index) => (
          <IconButton
            key={social.name + index}
            icon={social.icon}
            label={social.name}
            onClick={() => window.open(social.url, '_blank')}
          />
        ))}
      </div>
    </div>
  </div>;
}
