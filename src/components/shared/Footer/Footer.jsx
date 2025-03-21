import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import invlop from "../../../assets/icons/envlop.svg";
import whatsapp from "../../../assets/icons/whatsapp-orange.svg";
import facebook from "../../../assets/icons/facebook-2.svg";
import linkedin from "../../../assets/icons/linkedin-2.svg";
import instagram from "../../../assets/icons/instagram.png";
import twitter from "../../../assets/icons/twitter.png";
import pinterest from "../../../assets/icons/pinterest.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001243] pt-8 md:pt-16 border-t border-white/10">
      <div className="container_fluid px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-8 md:pb-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block md:block mb-4 md:mb-6">
              <img
                src={logo}
                alt="Envobyte"
                className="h-8"
              />
            </Link>
            <p className="text-white/70 text-sm md:text-base mb-6 max-w-[300px] mx-auto md:mx-0">
              We are an IT Company. We help businesses to bring ideas to life easily and affordably.
            </p>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-4 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-4 md:mb-6">Learn More</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/combo-offer" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Combo Offer
                </Link>
              </li>
              <li>
                <Link to="/service-industries" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Service Industries
                </Link>
              </li>
              <li>
                <Link to="/envobyte-apps" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Envobyte Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-4 md:mb-6">Support</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-4 md:mb-6">Get in Touch</h3>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:support@envobyte.com"
                className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm md:text-base"
              >
                <img src={invlop} alt="Email" className="w-5 h-5" />
                <span>support@envobyte.com</span>
              </a>
              <a
                href="https://wa.me/16677772477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm md:text-base"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
                <span>+1 (667) 777 2477</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://facebook.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <img src={facebook} alt="Facebook" className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <img src={instagram} alt="Instagram" className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <img src={twitter} alt="Twitter" className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <img src={pinterest} alt="Pinterest" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center py-4 md:py-6 border-t border-white/10">
        <p className="text-white/70 text-xs md:text-sm">
          @{currentYear} - ENVOBYTE, All rights are reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
