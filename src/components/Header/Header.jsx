import React, { useRef, useEffect } from "react";

const Header = () => {

  {/*menu toggle */}
  const menuRef = useRef(null);
  const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu')
 {/*menu toggle */}

  {
    /*header ko scroll */
  }
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  {
    /*header ko scroll */
  }

  {
    /*link components */
  }
  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr)?.offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth", // Thêm hiệu ứng cuộn mượt
    });
  };
  {
    /*link components */
  }


  
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center flex-wrap"
    >
      <div className="container">
        <div className="flex ỉtems-center justify-between">
          {/*logo*/}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px ] font-[500] rounded-full flex items-center justify-center">
              M
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smarllTextColor font-[700]">
                Mach Tan Tai
              </h2>
              <p className="text-smarllTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/*menu*/}
          <div className="menu" onClick={toggleMenu} ref={menuRef}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smarllTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smarllTextColor font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smarllTextColor font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smarllTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*menu right*/}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smarllTextColor font-[600] border border-solid border-smarllTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smarllTextColor hover:text-white hover:font-[700] ease-in duration-300">
              <i class="ri-send-plane-line"> Let Talk</i>
            </button>
            <span onClick={toggleMenu} className="text-2xl text-smarllTextColor md:hidden cursor:pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
