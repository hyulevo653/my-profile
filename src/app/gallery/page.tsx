import AppLayout from '@/components/AppLayout';
import { FiLock, FiImage, FiPlay } from 'react-icons/fi';

const MEDIA_ITEMS = [
    { id: 1, type: 'image', src: 'https://images.pexels.com/photos/2085834/pexels-photo-2085834.jpeg', locked: false },
    { id: 2, type: 'video', src: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg', locked: true }, // Placeholder for video thumb
    { id: 3, type: 'image', src: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg', locked: false },
    { id: 4, type: 'image', src: 'https://images.pexels.com/photos/1954515/pexels-photo-1954515.jpeg', locked: true },
    { id: 5, type: 'image', src: 'https://images.pexels.com/photos/2464731/pexels-photo-2464731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', locked: true },
    { id: 6, type: 'video', src: 'https://images.pexels.com/photos/3313459/pexels-photo-3313459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', locked: false },
];

export default function GalleryPage() {
    return (
        <AppLayout>
            <div className="p-4 md:p-8 min-h-screen">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Exclusive Gallery</h1>
                    <div className="text-sm text-neutral-500">
                        {MEDIA_ITEMS.length} items
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {MEDIA_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="relative group aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 cursor-pointer"
                        >
                            <div
                                className={`w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 ${item.locked ? 'blur-md' : ''}`}
                                style={{ backgroundImage: `url(${item.src})` }}
                            />

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                            {/* Type Icon */}
                            <div className="absolute top-2 right-2 text-white bg-black/50 p-1.5 rounded-full backdrop-blur-sm">
                                {item.type === 'video' ? <FiPlay /> : <FiImage />}
                            </div>

                            {/* Lock Status */}
                            {item.locked && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-md mb-2">
                                        <FiLock size={24} />
                                    </div>
                                    <span className="font-semibold text-sm">Unlock to view</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
