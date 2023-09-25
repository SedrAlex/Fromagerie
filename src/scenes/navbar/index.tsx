import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link";
import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage ;
  setSelectedPage: (value: SelectedPage) => void;
};

  


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props  ) => {
  const flexBetween = "flex items-center justify-between";
  const[isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-emerald-800 drop-shadow";
  return (
  <nav>
      <div
       >
        <div className={`${navbarBackground}  ${flexBetween} fixed top-0 z-30 w-full py-2 `}>
            <div className={`${flexBetween} w-full gap-16`}>
                  {/*Left Side*/}
               <img alt = "logo"  src={Logo}  />
                {/*Right Side*/}
                {isAboveMediumScreens ?(
                  <div className={`${flexBetween} w-full`}>
                      <div className={`${flexBetween} gap-8 text-md`}>
                        < Link 
                          page="Home"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        < Link 
                          page="About"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      
                        < Link 
                          page="Products"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        < Link 
                          page="Contact us"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton  setSelectedPage={setSelectedPage}>Be Our Guest</ActionButton>
                  </div>
              </div>
              ) : (

               <button
               className="rounded-full bg-secondary-500 p-2"
               onClick={ () => setIsMenuToggled(!isMenuToggled  ) }
               >
              <Bars3Icon className="h-6 w-6 text-white " />
               </button>
              )}
          </div>
        </div>
      </div> 
 
     {/*MOBILE MENU MODAL*/}
     {!isAboveMediumScreens && isMenuToggled && (
       <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-emerald-800 drop-shadow-xl ">
           {/* CLOSE ICON */} 
                <div className="flex justify-end p-12">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400 " />
                  </button>
              </div>
              {/* MENU ITEMS */}
              <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        < Link 
                          page="Home"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        < Link 
                          page="Our Story"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      
                        < Link 
                          page="Products"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                        < Link 
                          page="Contact us"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                  </div> 
             </div>
     )}
     
  </nav>  
    
    
  )
}
export default Navbar;