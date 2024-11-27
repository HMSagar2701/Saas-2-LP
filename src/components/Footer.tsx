import InstaIcon from "@/assets/icons/insta.svg"
import XSocial from "@/assets/icons/x-social.svg"
import TiktokIcon from "@/assets/icons/tiktok.svg"
import YoutubeIcon from "@/assets/icons/youtube.svg"

export const Footer = () => {
  return(
    <footer className="bg-black text-white/60 border-t border-white/40 py-5">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">2024 Your Company, Inc. All rights are reserved</div>
          <div>
            <ul className="flex justify-center gap-2.5">
              <li><XSocial /></li>
              <li><InstaIcon /></li>
              <li><TiktokIcon /></li>
              <li><YoutubeIcon /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};
