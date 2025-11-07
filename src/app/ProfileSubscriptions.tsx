import {AppConfig} from '@/config/app.config';
import {cn} from '@/lib/utils/cn';

export default function ProfileSubscriptions() {
  return <div className={'p-4 bg-white my-2'}>
    <div className={'text-neutral-500 font-medium'}>
      SUBSCRIPTION
    </div>
    <div className={'flex flex-col gap-2 mt-4'}>
      {AppConfig.subscriptions.map(sub => (
        <a
          key={sub.name}
          href={'/contact'}
          className={cn(
            'flex flex-row justify-between bg-primary cursor-pointer text-white px-5 py-3 rounded-full font-semibold text-[14px]',
            !sub.preferred && 'border border-primary text-primary bg-transparent'
          )}>
          <span className={'uppercase'}>{sub.name}</span>
          <span className={'uppercase'}>{sub.price}</span>
        </a>
      ))}
    </div>
  </div>
}
