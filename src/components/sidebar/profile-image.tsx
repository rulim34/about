import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { ProfileType } from "../../types"

export function ProfileImage({ image, name }) {
  return (
    <div className="relative inline-block leading-none">
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={name}
        className="rounded-full relative z-10"
      />
      <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-12"></div>
    </div>
  )
}

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
}
