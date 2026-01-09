export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#F5F5F2] text-black px-6 py-4 md:px-10 md:py-5 flex items-center justify-between z-50">
      <div className="text-2xl leading-snug">
        <strong className="font-extrabold">2025 Wrapped for Creators</strong>
        <span className="font-normal"> is here.</span>
      </div>

      <button
        className="
          bg-[#8b5cf6]
          hover:bg-[#a78bfa]
          text-white
          px-6
          py-3
          rounded-full
          font-extrabold 
          text-base
          md:text-lg
          flex
          items-center
          gap-2
          transition-all
          duration-200
          hover:scale-105
          focus:outline-none
          focus:ring-2
          focus:ring-purple-400
        "
      >
        <span className="text-[20px] font-extrabold ">Dive in</span>
        <span aria-hidden className="text-[25px] font-extrabold">
          ↗
        </span>
      </button>
    </div>
  );
}
