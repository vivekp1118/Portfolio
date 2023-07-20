import '../css/PageScroller.css'
import React, { useState ,useContext} from 'react';
import { toggleMenu } from './Functions/menu-functions';
import { useLocation } from 'react-router-dom';
import { MobileContext } from "./Context";


export function PageScroller() {
  const { isMobile } = useContext(MobileContext);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollUp = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      window.scrollTo({
        top: window.scrollY - window.innerHeight,
        behavior: 'smooth',
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Adjust the delay based on your needs
    }
  };

  const scrollDown = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Adjust the delay based on your needs
    }
  };

  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <>
      <div className="page-scroller">
        {
          (!isMobile && currentRoute === '/') &&
          <>
            <div className="scroll-top-btn" onClick={scrollUp}>
              <i class="fa-solid fa-chevron-up"></i>
            </div>
            <div className="scroll-down-btn" onClick={scrollDown}>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </>
        }
        <div className="menu" onClick={toggleMenu}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  )

}