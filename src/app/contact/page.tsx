import AppLayout from '@/components/AppLayout';
import {FiArrowLeft, FiMessageCircle} from 'react-icons/fi';
import {AppConfig} from '@/config/app.config';
import {Metadata} from 'next';
import {OpenMenuButton} from '@/components/Sider';
import { index } from 'd3';


export const metadata: Metadata = {
  title: `Contact ${AppConfig.name}`,
  description: `Contact ${AppConfig.name} and talk about your idea.`,
}


export default function ContactPage() {
  return <AppLayout hideContact={true}>
    <div className={'flex flex-col md:flex-row md:h-full'}>
      <div
        className={'h-[80vh] md:h-full w-full md:w-[40%] relative'}
        style={{}}
      >
        <div className={'absolute left-4 top-0 z-20'}>
          <OpenMenuButton className={'text-white'}/>
        </div>
        <div
          className={'w-full h-full absolute top-0 left-0 bg-cover bg-center grayscale z-0'}
          style={{
            backgroundImage: `url('${AppConfig.verticalAvatar.src}')`
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent h-full w-full text-black p-4 z-10">
          <div className={'absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center'}>
            <div className={'text-black font-medium text-center mb-4'}>
              Make it real.
            </div>
            <div className={'text-black font-black text-4xl text-center'}>
              Can we talk about your idea?
            </div>
            <a href={'https://t.me/hyulevo666'} target={'_blank'}
               className={'bg-black text-white font-medium text-center py-4 px-8 rounded-full mt-12 text-xl transition-all cursor-pointer duration-300 hover:bg-white hover:text-black hover:shadow-lg flex flex-row gap-2 items-center'}>
              <FiMessageCircle/>
              Message Me
            </a>
          </div>
        </div>
      </div>
      <div className={'bg-white p-8 flex-1'}>
        <div className={'font-black text-4xl'}>
          Let's get in touch.
        </div>
        <div className={'text-[14px] py-4'}>
          {AppConfig.introduction}
        </div>
        <div className={'py-4'}>
          <div className={'space-y-4'}>
            {AppConfig.expertises.map((expertise, index) => (
              <div key={index} className={'bg-neutral-100 p-4 rounded-lg group'}>
                <div className={'font-medium flex flex-row items-center gap-2'}>
                  {expertise.icon({})}
                  {expertise.name}
                </div>
                <div className={'text-[12px] mt-1 text-neutral-500 group-hover:text-black'}>
                  {expertise.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={'mt-4'}>
          <div className={'text-[14px]'}>
            Visit my social profile:
          </div>
          <div className={'flex flex-row items-start gap-4 mt-2'}>
            {AppConfig.socialLinks.map(link => (
              <a href={link.url} target={'_blank'} className={'flex flex-row gap-1 items-center bg-neutral-100 px-4 py-2 rounded-full text-neutral-800 transition-all cursor-pointer duration-300 hover:bg-primary hover:text-white hover:shadow-lg'}>
                <link.icon className={''}/>
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className={'flex flex-col'}>

        </div>

      </div>
    </div>
  </AppLayout>;
}
