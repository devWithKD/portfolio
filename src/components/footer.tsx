import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full max-w-[40rem] pb-4 flex gap-4 bg-slate-50 dark:bg-zinc-950 justify-center items-center">
      <a href="https://github.com/devWithKD">
        <FaGithub size={20} />
      </a>
      <a href="https://www.linkedin.com/in/devwithkd/">
        <FaLinkedin size={20} />
      </a>
      <a href="https://x.com/devWithKD">
        <FaXTwitter size={20} />
      </a>
      <a href="https://www.instagram.com/devwithkd/">
        <FaInstagram size={20} />
      </a>
    </footer>
  );
}

export default Footer;
