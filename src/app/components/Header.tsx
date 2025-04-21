import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-around w-full h-1/9 border-b-blue-700 border-b-2 border-b-solid">
        <div>StarLord.dev</div>
        <div>
          <ul className="flex space-x-4">
            <li>Projects</li>
            <li>Blogs</li>
            <li>CourseWorks</li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <div> Search </div>
          <div>Dark/Light</div>
          <div> Options</div>
        </div>
      </header>
  )
}

export default Header