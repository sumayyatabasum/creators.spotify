export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative z-10 flex items-center justify-start pt-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white text-[70px] leading-[0.95] font-extrabold mb-3">
            Make your show <br /> the next big thing
          </h1>

          <p className="text-white text-[20px] sm:text-[24px] lg:text-[30px] mb-10 max-w-xl">
            Powerful tools from Spotify to manage <br />
            and grow your audio or video podcast.
          </p>

          <button className="bg-white text-black px-4 py-2.5 rounded-full font-bold hover:bg-gray-200 transition">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
