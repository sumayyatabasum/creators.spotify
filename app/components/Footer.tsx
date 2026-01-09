export default function Footer() {
  const footerLinks = {
    company: {
      title: "Company",
      links: ["About", "Press & Media", "Careers", "Contact Us"],
    },
    Print: {
      title: "Finger print",
      links: [
        "Legal",
        "Privacy Center",
        "Privacy Policy",
        "Cookies",
        "Cookie Settings",
      ],
    },
    tools: {
      title: "Creator Tools",
      links: [
        "Help Center",
        "Megaphone",
        "Platform for Artists",
        "Platform for Authors",
      ],
    },
    follow: {
      title: "Follow us",
      links: ["𝕏", "▣"],
    },
    get: {
      title: "Get the app",
      links: [
        {
          type: "image",
          src: "/images/apple.png",
          alt: "App Store",
          href: "#",
        },
        {
          type: "image",
          src: "/images/google.png",
          alt: "Google Play",
          href: "#",
        },
      ],
    },
  };

  return (
    <footer className="bg-neutral-900 text-white pt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8 mb-12 ">
          <div className="col-span-2 text-2xl font-semibold">
            Spotify for Creators
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">
                {section.title}
              </h3>

              <ul
                className={`${
                  section.title === "Follow us"
                    ? "flex gap-6 items-center"
                    : "space-y-2"
                }`}
              >
                {section.links.map((link, index) => (
                  <li key={index}>
                    {typeof link === "string" ? (
                      <a
                        href="#"
                        className={`${
                          section.title === "Follow us"
                            ? "text-gray-400 border-2 border-slate-600 rounded-full mt-2 px-4 py-2 text-2xl hover:text-indigo-800 hover:border-indigo-800 transition-colors "
                            : "text-sm hover:text-indigo-800 hover:underline transition-colors"
                        }`}
                      >
                        {link}
                      </a>
                    ) : (
                      <a href={link.href}>
                        <img
                          src={link.src}
                          alt={link.alt}
                          className="h-14 w-auto rounded-md hover:scale-105 transition-transform flex items-center"
                        />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pb-5">
          <p className="text-sm text-white">© 2026 Spotify</p>
        </div>
      </div>
    </footer>
  );
}
