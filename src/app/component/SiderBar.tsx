import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function SiderBar() {
    return (
    <div className=" absolute z-100 right-0 top-50 my-auto w-16 h-2/5 flex flex-col items-center justify-around border-t-2 border-white/20 font-semibold bg-white/20 text-white text-3xl rounded-l-4xl">
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="https://linkedin.com/in/abhinav-shukla-877097267" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            </button>
        </div>
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="https://github.com/StarLord824" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            </button>
        </div>
        <div>
            <button className='hover:scale-120 duration-150'>
            <a href="https://twitter.com/StarLord824" target="_blank" rel="noopener noreferrer">
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
    </div>
    )
}