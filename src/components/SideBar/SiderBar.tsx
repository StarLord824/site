"use client"

import { motion } from 'motion/react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function SiderBar() {
    return (
    <motion.div className=" absolute z-100 right-2 top-50 my-auto w-16 h-1/2 flex flex-col items-center justify-around font-semibold text-neutral-600 text-3xl rounded-l-4xl rounded-r-xl dark:text-white dark:2 border-white/20 dark: bg-white/20 "
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // Float up and down
        transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
        }}
    >
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="https://linkedin.com/in/abhinav-shukla-877097267" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            </button>
        </div>
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="github.com/StarLord824" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            </button>
        </div>
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="https://twitter.com/StarLord824" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            </button>
        </div>
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            </button>
        </div>
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="https://discord.com/starLord_009" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
            </a>
            </button>
        </div>
    </motion.div>
    )
}