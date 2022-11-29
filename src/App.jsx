import Navbar from './components/Navbar'
import Product from './components/Product'
import './index.css'


function App() {

  return (
    <div className='w-full h-screen flex-col justify-center py-4 px-8'>
      <Navbar />
      <main className='w-full flex'>
        <Product />
      </main>
      
    </div>
  )
}

export default App
