import { GlobeToMapTransform } from '@/components/globe-to-map-transform';

export default function Demo22Page() {
    return (
    <div className="flex justify-center items-center min-h-screen bg-[#1a1a1a]">
      <div className="relative flex flex-col h-[600px] w-[840px] rounded-2xl p-4 justify-stretch items-stretch gap-2 overflow-clip bg-neutral-950">
        <div className="flex flex-col gap-1 my-1">
          <h3 className="text-white mx-2">Globe To Map Transform</h3>
          <p className="text-neutral-400 mx-2 text-sm">
            Interactive visualization that smoothly transforms a 3D globe into a 2D equirectangular map.</p>
        </div>
        <div className="flex p-2 w-full flex-1 min-h-32 justify-center items-center">
          <GlobeToMapTransform />
        </div>
        <div className="flex flex-col gap-1 my-1">
          <p className="text-neutral-400 mx-2 text-sm">
            Controls: "Unroll Globe" to transition to map view, "Roll to Globe" to return, and "Reset" to clear rotation.
          </p>
        </div>
      </div>
    </div>
    );

}
