import React from "react"
import { Link } from "gatsby"

const ProjectCard = ({ title, link, date, tags }) => {

  return (
    <article className="mx-auto bg-white rounded-xl shadow-md overflow-hidden" >
        <div className="p-8">
        <h2>
            <Link className="block text-lg leading-tight font-medium text-black hover:underline font-semibold" to={link}>
                {title}
            </Link>
        </h2>
        <p className="text-gray-500" ><b>Posted:</b> {date}</p>
        <p className="text-gray-500" ><b>Tags:</b> {tags.join(", ")}</p>
        </div>
    </article>
  )
}

export default ProjectCard