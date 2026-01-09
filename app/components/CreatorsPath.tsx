export default function CreatorPaths() {
  return (
    <section className="bg-gradient-to-b from-[#12002b] to-[#2b0a6b] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative rounded-[40px] border-2 border-lime-400 p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">
              Interested in audio podcasts?
            </h3>

            <p className="text-lg leading-relaxed mb-12 text-white/90">
              Discover all the ways Spotify for Creators helps you distribute
              your show, engage your listeners, track your growth, and more — no
              matter where you’re hosted.
            </p>

            <div className="flex items-center justify-between">
              <button
                className="
              border-2
              bg-white 
              text-black 
              px-8 
              py-3 
              rounded-full 
              font-semibold 
              hover:scale-105 
              hover:text-white 
              hover:border-white
              transition-colors 
              hover:bg-transparent"
              >
                Learn more
              </button>
              <span className="text-4xl">🎙️</span>
            </div>
          </div>

          {/* VIDEO CARD */}
          <div className="relative rounded-[40px] border-2 border-lime-400 p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Looking to add video?</h3>

            <p className="text-lg leading-relaxed mb-12 text-white/90">
              Find out how Spotify is bringing video to the forefront, and
              explore all the tools you need to upload your videos, get
              discovered, build a loyal following, and grow your show.
            </p>

            <div className="flex items-center justify-between">
              <button
                className="
              border-2
              bg-white 
              text-black 
              px-8 
              py-3 
              rounded-full 
              font-semibold 
              hover:scale-105 
              hover:text-white 
              hover:border-white
              transition-colors 
              hover:bg-transparent"
              >
                Learn more
              </button>
              <span className="text-4xl">▶️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
