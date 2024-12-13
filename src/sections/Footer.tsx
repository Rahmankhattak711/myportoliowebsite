import ArowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const footerlinks = [
    {
      title: "LinkDin",
      link: "#",
    },
    {
      title: "Whatsapp",
      link: "#",
    },
  ];
  return (
    <footer className="flex [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <div className="container">
        <div className="flex justify-between md:flex-row flex-col-reverse items-center border-t-2 border-white/20 py-4">
          <div>$copy; 2024. All rights reserved.</div>
          <nav className="flex gap-4">
            {footerlinks.map((link) => (
              <a href={link.link} className="flex items-center gap-2">
                <span>{link.title}</span>
                <span>
                  <ArowUpRightIcon className="size-4" />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
