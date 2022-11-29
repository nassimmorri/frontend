import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoStorefrontOutline } from "react-icons/io5"
import avatar from "../assets/nassim.jpg"
import inscription from "./inscription"

const Navbar = () => {
  const [visibile, setVisibile] = useState(false)
  const toggleDropDown = () => {
    setVisibile(!visibile)
  }

  const options = [
    "Profil",
    "Settings",
    "Logout"
  ]

  return (
    <div className="relative w-full h-16 flex justify-between items-center border-b">
    <div className="flex items-center">
      <div className="flex items-center gap-3">
      <IoStorefrontOutline size={34} className="opacity-70"/>
      <h2 className="font-bold text-xl mr-8">Morri Shop</h2>
      
      </div>
        
        <div className="flex space-x-8 items-center">
          <p className="opacity-70">Les Produits</p>
          <p className="opacity-70"  >Inscription</p>
          <p className="opacity-70">contact</p>
          <p className="opacity-70">About </p>
        </div>
    </div>
    <div className="flex items-center gap-10">
    <AiOutlineShoppingCart size={34} className="opacity-70" />
    <img className="w-14 h-14 rounded-full" src={avatar} onClick={toggleDropDown} />
    <div className={` ${!visibile ? 'hidden' : null} absolute top-16 right-[-20px] bg-gray-100 text-center`}>
      {options.map(option => (
        <p className="px-6 py-2 hover:bg-gray-200 border-b">{option}</p>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Navbar