import logo from '../assets/img/Logo-name.png'

const NavBar = () => {
  return (
    <nav className='py-4 px-4 w-1/2 m-auto'>
        <ul className='flex py-3 justify-between items-center'>
          <li className='px-6 hover:text-accent cursor-pointer'>
            About Me
          </li>
          <li className='px-6 hover:text-accent cursor-pointer'>My Skills</li>
          <li className='px-6 hover:text-accent cursor-pointer'>
            <img src={logo} alt="logo icon" className='w-15'/>
          </li>
          <li className='px-6 hover:text-accent cursor-pointer'>
            Projects
          </li>
          <li className='px-6 hover:text-accent cursor-pointer'>Contact Me</li>
        </ul>
      </nav>
  )
}

export default NavBar