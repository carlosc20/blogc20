import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectCard = ({ title, link, date, tags, image, imageAlt }) => {

    return (
        <article className="mx-auto bg-white rounded-xl shadow-md overflow-hidden" >
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <GatsbyImage
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        alt={imageAlt}
                        image={getImage(image)}
                    />
                </div>
                <div className="p-8">
                    <h2>
                        <Link className="block text-lg leading-tight font-medium text-black hover:underline" to={link}>
                            {title}
                        </Link>
                    </h2>
                    <p className="text-gray-500" ><b>Posted:</b> {date}</p>
                    <p className="text-gray-500" ><b>Tags:</b> {tags.join(", ")}</p>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard