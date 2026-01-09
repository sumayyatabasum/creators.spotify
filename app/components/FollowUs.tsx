export default function FollowUs() {
  return (
    <section className="bg-[#9b9bff] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <h2 className="text-6xl font-bold text-black">Follow us</h2>

          <p className="max-w-md text-black text-sm">
            Don’t miss out on the latest tips, features, and updates from
            Spotify for Creators, and join in on the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div
            className="
             text-zinc-500
             rounded-[32px] 
             overflow-hidden
             bg-[#f6f6f4]
             transition-all 
             duration-300
             hover:scale-105
             hover:text-blue-600"
          >
            <div className="relative">
              <img
                src="/images/insta.webp"
                alt="Instagram"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl">▣</span>
              </div>
            </div>

            <div className="p-6 flex justify-center items-center">
              <span className="font-semibold">Instagram ➜</span>
            </div>
          </div>

          <div
            className="
             text-zinc-500
             rounded-[32px] 
             overflow-hidden 
             bg-[#f6f6f4]
             transition-all
             duration-300
             hover:scale-105
             hover:text-blue-600"
          >
            <div className="relative">
              <img
                src="/images/facebook.webp"
                alt="Facebook"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl">f</span>
              </div>
            </div>

            <div className="p-6 flex justify-center items-center">
              <span className="font-semibold">Facebook ➜</span>
            </div>
          </div>

          <div
            className="
             text-zinc-500
             rounded-[32px]
             overflow-hidden 
             bg-[#f6f6f4]
             transition-all
             duration-300
             hover:scale-105
             hover:text-blue-600"
          >
            <div className="relative">
              <img
                src="/images/x.webp"
                alt="X"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl">𝕏</span>
              </div>
            </div>
            <div className="p-6 flex  items-center justify-center">
              <span className="font-semibold">X ➜</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
