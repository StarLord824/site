import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
    projectDetails: {
        title: string;
        description: string;
        imageUrl: string;
        genre: string[];
        technologies: string[];
        link: string;
    };
}

const Card = (props: ProjectCardProps) => {
  return (
    <div className='flex flex-col items-center justify-center w-'>
        <div className='flex items-center justify-between w-full h-full'>
            <div>
                <Image src={'https://picsum.photos/id/10/200/300'} alt="project" width={200} height={300} />
            </div>
            <div id='genre' className='flex items-baseline justify-between w-full h-full'>
                {props.projectDetails.genre.map((genre, index) => {
                    return (
                        <div key={index} className='flex items-center justify-center w-1/4 h-1/4 p-2 m-2 text-sm font-semibold text-white bg-neutral-900 rounded-lg'>
                            {genre}
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            {props.projectDetails.title}
        </div>
        <div>
            {props.projectDetails.description}
        </div>
        <div className='flex items-center justify-between w-full h-full'>
            <div>
                {props.projectDetails.technologies.map((tech, index) => {
                    return (
                        <div key={index} className='flex items-center justify-center w-1/4 h-1/4 p-2 m-2 text-sm font-semibold text-white bg-neutral-900 rounded-full'>
                            {tech}
                        </div>
                    )
                })}
            </div>
            <div>
                <a href={props.projectDetails.link} target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>
    </div>
  )
}

export default Card