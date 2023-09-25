import Navbar from '@/scenes/navbar';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from '@/scenes/home';
import OurStories from '@/scenes/ourstory';
import Products from '@/scenes/products';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type {Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import ContactUs from './scenes/ContactUs';
import Footer from './scenes/footer';

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);


const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  SelectedPage.Home
  );
   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

   useEffect(() => {
    const handleScroll = () => {
       if(window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
       }
       if(window.scrollY !== 0 )setIsTopOfPage(false);  
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll" , handleScroll); 

   },[]);
        



  return (
    <div className="app bg-gray-20">
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{

                background: {
                    // color: {
                    //     value: "#0d47a1",
                    // },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#e3a829",
                    },
                    links: {
                        color: "#7fac75",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 19,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    

     <Navbar 
      isTopOfPage = {isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      

      <Home  setSelectedPage={setSelectedPage} />
      
     
      


      <OurStories setSelectedPage={setSelectedPage} />
      <Products setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer  />
  
      
    </div>   
  )
}

export default App
