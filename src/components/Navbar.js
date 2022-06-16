import { NavLink, Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-slate-100 h-24'>
        
        <div className='flex justify-start sm:justify-center'>
        
        
        <div className='text-2xl pt-8 pr-2 italic'>
        <NavLink to='/homepage'
            className='pl-16'
        >
            Información
        </NavLink>
        </div>
        
        <div className='text-2xl pt-8 pl-8 italic'>
        <NavLink to='/calculate' className='pr-8'>
            Calcular
        </NavLink>
        </div>

        <div className='text-2xl pt-8  italic'>
        <NavLink to='/description' className='pr-24'>
            Creadores
        </NavLink>
        </div>
        
        </div>
        

    </nav>
  )
}
