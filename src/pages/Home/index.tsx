import React from "react";
import { useThemeContext } from "../../providers/Theme";

function Home():JSX.Element {
  const { theme } = useThemeContext();
  
  return (
    theme ? (
    <section className="px-20 mt-16">
      <h1 className={`text-lg font-bold text-${theme === 'dark' ? 'white-100': 'black-200'} mb-8`}>Title</h1>

      <div className="flex">
        <div className={`bg-${theme === 'dark' ? 'black-100': 'green-200'} 
          rounded-md w-60 h-56 px-4 flex items-end pb-4 mr-8`}
        >
          <button className="w-full text-black-200 rounded-md h-10 bg-green-100 flex justify-center 
            items-center font-bold"
          >
            BY
          </button>
        </div>

        <div>
          <h2 className={`text-md font-semibold text-${theme === 'dark' ? 'white-100': 'black-200'} mb-8`}>
            Product Name
          </h2>
          <p className={`text-${theme === 'dark' ? 'white-100': 'black-200'} max-w-lg	`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus debitis ipsam cum obcaecati
            vitae! Quidem maxime error tempore. Dolores voluptatum adipisci ea rem hic expedita, harum
            upiditate modi repellat enim.
          </p>
        </div>
      </div>
    </section>
    ) : <></>
  )
};

export default Home;