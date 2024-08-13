import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../../constants";
import Button from "../Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";
import logo from "../../assets/logo1.png";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
        <div className="flex flex-col items-center">
  <img
    src={logo}
    alt="Ditech Engineering Logo"
    className="h-16 md:h-20 lg:h-24 w-auto"
  />
  <div className="text-center">
    <p className="text-sm md:text-base">Ditech Engineering Services.</p>
    <p className="text-xs font-light text-orange-500">
      Electro-mechanical turn-key Engineers
    </p>
  </div>
</div>


          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:mr-4 lg:text-sm lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="/teams"
              className="text-sm text-n-1/50 transition-colors hover:text-n-1 mr-8"
            >
              Personnel
            </a>
            <Button className="lg:flex" href="/contact">
              Contact Us
            </Button>
          </div>

          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} className="text-orange-500" />
          </Button>
        </div>
      </header>
     
    </>
  );
};

export default Header;
