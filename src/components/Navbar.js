import { NavLink, Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-[#65D6C0] h-24 rounded-lg'>
        
        <div className='flex justify-start sm:justify-center'>
        
        
        <div className='text-2xl pt-8 pr-8'>
        <NavLink to='/homepage'
            className='pl-24'
        >
            Homepage
        </NavLink>
        </div>
       

        {/* <NavLink to='/description'>
            Description
        </NavLink> */}
        
        <div className='text-2xl pt-8 pl-8'>
        <NavLink to='/calculate' className='pr-24'>
            Calculate
        </NavLink>
        </div>
        
        </div>
        

    </nav>
  )
}
