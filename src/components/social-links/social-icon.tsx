import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaMediumM,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { SocialType } from "../../types"

export function SocialIcon({ name, ...params }) {
  const icons = {
    behance: FaBehance,
    dribbble: FaDribbble,
    facebook: FaFacebook,
    github: FaGithub,
    medium: FaMediumM,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    twitter: FaTwitter,
    youtube: FaYoutube,
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

SocialIcon.propTypes = {
  name: SocialType.name,
}
