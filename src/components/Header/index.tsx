import React from "react";
import { useThemeContext} from "../../providers/Theme";
import { BsMoon } from "react-icons/bs";
import {RiSunFill} from "react-icons/ri";



function Header():JSX.Element {
  const { theme, setTheme} = useThemeContext();
  
  function handleClick() {
    setTheme(theme === 'dark' ? 'light': 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light': 'dark');
  }

  return (
    <section className={`w-full bg-${theme === 'dark' ? 'black-300' : 'green-200'} h-16 px-20 flex 
      items-center justify-between`}
    >
      <p className="font-bold text-2xl text-white-100">Log<span className="text-green-100">o</span></p>
      
      {theme ? (
        <div className={`bg-black-100 w-12 h-4 rounded-full flex items-center 
          justify-${theme === 'dark' ? 'start': 'end'}`}
        >
          <div className={`w-6 h-6 rounded-full flex justify-center items-center 
            bg-${theme === 'dark' ? 'white-100 -ml-0.5' : 'black-200'} cursor-pointer`} 
            onClick={handleClick}
          >
          {theme === 'dark'
            ? <BsMoon size={20} className="fill-current text-black-300" />
            : <RiSunFill size={18} className="fill-current text-yellow" />
          }
          </div>
        </div>
      ): null}
    </section>
  )
};

export default Header;