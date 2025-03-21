import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../../../assets/images/logo.svg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Set background transparency
      setIsScrolled(currentScrollY > 0);

      // Hide navbar on scroll down, show immediately on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) { // Scrolling down & not at top
        setIsHidden(true);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding navbar
      } else { // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "SERVICE", path: "/service" },
    { label: "COMBO SALES", path: "/combo-sales" },
    { label: "PORTFOLIO", path: "/portfolio" },
    { label: "ABOUT US", path: "/about-us" },
    { label: "BLOGS", path: "/blogs" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-[#000033]/80 backdrop-blur-md shadow-lg' : 'bg-[#001655]'
          } text-white py-4 px-4 md:px-[55px] transform transition-transform duration-500 ease-in-out ${isHidden ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Envobyte" className="h-8" />
          </Link>

          {/* Menu Items - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-sm font-medium hover:text-[#FF693B] transition-colors ${item.label === "HOME" ? "text-[#FF693B]" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button - Mobile/Tablet */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* See Pricing Button - Desktop */}
          <Link
            to="/pricing"
            className="hidden lg:block bg-[#FF693B] text-[14px] leading-5 font-[500] text-white px-[81px] py-5 rounded hover:bg-[#ff5a37] transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[72px] sm:right-0 bg-[#001655] shadow-lg z-40 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          w-full sm:w-[50%]`}
      >
        <div className="px-4 sm:px-6 py-6 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-base font-medium hover:text-[#FF693B] transition-colors ${item.label === "HOME" ? "text-[#FF693B]" : "text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
          {/* See Pricing Button - Mobile */}
          <Link
            to="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full bg-[#FF693B] text-center text-[14px] leading-5 font-[500] text-white px-6 py-4 rounded hover:bg-[#ff5a37] transition-colors mt-6"
          >
            See Pricing
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
