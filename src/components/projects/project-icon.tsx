import React from "react"
import { FaCompass, FaGithub } from "react-icons/fa"
import { ProjectType } from "../../types"

export function ProjectIcon({ icon }) {
  return (
    <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
      {icon === "github" ? (
        <FaGithub className="w-6 h-6" />
      ) : (
        <FaCompass className="w-6 h-6" />
      )}
    </span>
  )
}

ProjectIcon.propTypes = {
  icon: ProjectType.icon,
}
