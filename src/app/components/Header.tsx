import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  const tabs= [
    {
      title: 'Projects',
      link: '/projects'
    },{
      title: 'Blogs',
      link: '/blogs'
    },{
      title: 'Courseworks',
      link: '/courseworks'
    }]
  return (
    <header className="flex items-center justify-around w-full h-1/9 border-b-2 border-white/20 text-xl font-semibold">
        <div className='text-3xl font-bold'>StarLord.dev</div>
        <div className='flex gap-3 text-xl font-semibold text-neutral-500'>
            {tabs.map( (tab, index)=>{
              return (
                <div key={index} className='flex items-center justify-center hover:text-white hover:bg-neutral-800 rounded-lg h-12 w-40 p-2 transition ease-in'>
                  <button><a href={tab.link}>{tab.title}</a></button>
                </div>)
            })
          }
        </div>
        <div className="flex gap-10">
          <SearchBar/>
          <div>Dark/Light</div>
          <div> 
            Options
          </div>
        </div>
      </header>
  )
}

export default Header