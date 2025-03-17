import { Link } from "react-router-dom";
import { FaGlobe, FaUsers, FaUserFriends } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import heroOverlay from "../../../assets/images/hero-overly.svg";
import heroImg from "../../../assets/images/hero-img.svg";

const Hero = () => {
  const stats = [
    {
      icon: <FaGlobe className="text-2xl" />,
      count: "2k+",
      label: "Websites build",
    },
    {
      icon: <AiFillStar className="text-2xl" />,
      count: "97%",
      label: "Client satisfaction",
    },
    {
      icon: <FaUserFriends className="text-2xl" />,
      count: "25+",
      label: "Team members",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      count: "500+",
      label: "Amazing clients",
    },
  ];

  return (
    <section className="bg-[#000033] text-white pt-20 pb-32 relative overflow-hidden">
      {/* Background Overlay */}
      <img
        src={heroOverlay}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="container_fluid relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Title & Subtitle */}
          <h1 className="h1 mb-4">
            DIGITAL SERVICES
          </h1>
          <p className="text-lg mb-8">
            BUILDING YOUR EMPIRE DIGITALLY
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-16">
            <Link
              to="/pricing"
              className="bg-[#FF6B4B] text-white px-8 py-3 rounded hover:bg-[#ff5a37] transition-colors"
            >
              SEE PRICING
            </Link>
            <Link
              to="/appointment"
              className="border border-white px-8 py-3 rounded hover:bg-white hover:text-[#000033] transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-3">
                  <span className="text-[#FF6B4B] bg-white/10 p-2 rounded">{stat.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{stat.count}</h3>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/20 mx-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="bg-[#1a237e] rounded-lg p-4">
              <img
                src={heroImg}
                alt="Envobyte Team"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
