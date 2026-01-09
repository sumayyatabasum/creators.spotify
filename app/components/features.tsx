export default function Features() {
  return (
    <section className="bg-[#f1f1ec] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-7xl text-center font-bold mb-32 text-black">
          All the tools to grow your show
        </h2>

        <div className="grid md:grid-cols-2 items-center gap-24 mb-40">
          <img
            src="/images/img-0.webp"
            alt=""
            className="w-full max-w-[800px] rounded-2xl"
          />

          <div>
            <h3 className="text-6xl font-bold mb-6 text-black">
              Build a dedicated following
            </h3>
            <p className="text-2xl leading-relaxed text-black mb-8">
              Tap into millions of fans on Spotify who can discover and interact
              directly with your episodes. Upload clips, manage comments, and
              keep tabs on your analytics to grow your fanbase.
            </p>
            <button
              className="
              border
              border-[#232323]
              text-black
              px-8
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-200
              hover:scale-105
              hover:border-black
              hover:border-2
              hover:text-blue-600 "
            >
              More about growth on Spotify
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-24 mb-40">
          <div>
            <h3 className="text-5xl font-bold mb-6 text-black">
              Earn on your show
            </h3>
            <p className="text-2xl leading-relaxed text-gray-800 mb-8">
              Choose from a range of monetization tools designed to help you
              earn effortlessly. See how Spotify Partner Program unlocks
              additional income streams across audio and video.
            </p>
            <button
              className="
              border
              border-[#232323]
              text-black
              px-8
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-200
              hover:scale-105
              hover:border-black
              hover:border-2
              hover:text-blue-600 "
            >
              More about monetization on Spotify
            </button>
          </div>

          <img
            src="/images/img-1.webp"
            alt=""
            className="w-full max-w-[800px] rounded-2xl"
          />
        </div>

        <div className="grid md:grid-cols-2 items-center gap-20">
          <img
            src="/images/img-2.webp"
            alt=""
            className="w-full max-w-[800px] rounded-2xl"
          />

          <div>
            <h3 className="text-5xl font-bold mb-6 text-black">
              Stand out on Spotify
            </h3>
            <p className="text-2xl leading-relaxed text-gray-800 mb-8">
              Take control over how your show appears on Spotify with
              customization tools for thumbnails, descriptions, and video
              previews.
            </p>
            <button
              className="
              border
             border-[#232323]
             text-black
              px-8
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-200
              hover:scale-105
             hover:border-black
              hover:border-2
              hover:text-blue-600 "
            >
              More about customization on Spotify
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button
            className="
           bg-black
           text-white
           text-xl
           px-8
           py-3
           rounded-full
           font-bold
           transition-all
           duration-200
           hover:scale-105
           hover:border-2
           hover:border-black
           hover:text-purple-300
           "
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
