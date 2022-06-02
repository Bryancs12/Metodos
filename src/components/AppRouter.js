import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Calculate } from './Calculate'
import { Description } from './Description'
import { Footer } from './Footer'
import { Header } from './Header'
import { Homepage } from './Homepage'
import { Navbar } from './Navbar'
import { Table } from './Table'

export const AppRouter = () => {
  return (
      <>
          
          <Header />
          
        <BrowserRouter>
        
        <Navbar />
        
            <Routes>
                <Route path='/homepage' element={<Homepage/>} />
                {/* <Route path='/description' element={<Description/>} /> */}
                <Route path='/calculate' element={<Calculate/>} />
                <Route path='*' element={<Homepage/>} />
                <Route path='table' element={<Table />} />
            </Routes>
        </BrowserRouter>

        <div className='pt-8'>
        <Footer />
        </div>
        
      </>
    
  )
}
