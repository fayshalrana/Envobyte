import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "SERVICE", path: "/service" },
    { label: "COMBO SALES", path: "/combo-sales" },
    { label: "PORTFOLIO", path: "/portfolio" },
    { label: "ABOUT US", path: "/about-us" },
    { label: "BLOGS", path: "/blogs" },
  ];

  return (
    <nav className="bg-[#000033] text-white py-4">
      <div className="container_fluid">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/envobyte-logo.png" alt="Envobyte" className="h-8" />
          </Link>

          {/* Menu Items */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-sm font-medium hover:text-[#FF6B4B] transition-colors ${item.label === "HOME" ? "text-[#FF6B4B]" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* See Pricing Button */}
          <Link
            to="/pricing"
            className="bg-[#FF6B4B] text-white px-6 py-2 rounded hover:bg-[#ff5a37] transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
