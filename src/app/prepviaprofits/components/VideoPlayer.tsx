interface VideoPlayerProps {
  videoSrc: string;
  title: string;
  description: string;
}

export function VideoPlayer({
  videoSrc,
  title,
  description,
}: VideoPlayerProps) {
  return (
    <div className="relative mb-24 pt-6 max-w-7xl mx-auto">
       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[65%] h-20 bg-cyan-400/50 rounded-full blur-3xl"></div>
      <div className="relative  bg-gray-100 rounded-xl p-4 flex flex-col items-center">
        <h3 className="text-base font-semibold text-gray-600 my-2">{title}</h3>
        <div className="absolute top-4 right-5 z-10 flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-cyan-600"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-600 opacity-80"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-600 opacity-60"></div>
        </div>
        <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6 group">
          <video
            src={videoSrc}
            loop
            autoPlay
            muted
            controls
            className="w-full h-full object-cover"
          ></video>
        </div>
        <p className="text-gray-600 text-center max-w-2xl">{description}</p>
      </div>
      
    </div>
  );
}
