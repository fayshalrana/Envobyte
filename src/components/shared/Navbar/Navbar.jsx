import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../../../assets/images/logo.svg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "SERVICE", path: "/service" },
    { label: "COMBO SALES", path: "/combo-sales" },
    { label: "PORTFOLIO", path: "/portfolio" },
    { label: "ABOUT US", path: "/about-us" },
    { label: "BLOGS", path: "/blogs" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[55px] ${isScrolled ? 'bg-[#000033]/80 backdrop-blur-md shadow-lg' : 'bg-[#001655]'
      } text-white py-4`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Envobyte" className="h-8" />
        </Link>

        {/* Menu Items */}
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

        {/* See Pricing Button */}
        <Link
          to="/pricing"
          className="bg-[#FF693B] text-[14px] leading-5 font-[500] text-white px-[81px] py-5 rounded hover:bg-[#ff5a37] transition-colors"
        >
          See Pricing
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
