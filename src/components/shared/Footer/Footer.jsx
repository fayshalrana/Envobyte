import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000033] pt-16 pb-6">
      <div className="container_fluid">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div>
            <Link to="/" className="block mb-6">
              <img
                src="/assets/images/logo.png"
                alt="Envobyte"
                className="h-8"
              />
            </Link>
            <p className="text-white/70 mb-6">
              We are an IT Company. We help businesses to bring ideas to life easily and affordably.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-white/70 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Learn More</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/combo-offer" className="text-white/70 hover:text-white transition-colors">
                  Combo Offer
                </Link>
              </li>
              <li>
                <Link to="/service-industries" className="text-white/70 hover:text-white transition-colors">
                  Service Industries
                </Link>
              </li>
              <li>
                <Link to="/envobyte-apps" className="text-white/70 hover:text-white transition-colors">
                  Envobyte Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:support@envobyte.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <HiOutlineMail className="text-lg" />
                <span>support@envobyte.com</span>
              </a>
              <a
                href="https://wa.me/16677772477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <BsWhatsapp className="text-lg" />
                <span>+1 (667) 777 2477</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#0066FF] hover:text-white transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://linkedin.com/company/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#0066FF] hover:text-white transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://instagram.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#0066FF] hover:text-white transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://twitter.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#0066FF] hover:text-white transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://pinterest.com/envobyte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#0066FF] hover:text-white transition-colors"
              >
                <FaPinterestP size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6">
          <p className="text-white/50 text-sm">
            @{currentYear} - ENVOBYTE, All rights are reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
