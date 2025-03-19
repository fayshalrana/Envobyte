import { Link } from "react-router-dom";
import heroOverlay from "../../../assets/images/hero-overly.svg";
import heroImg from "../../../assets/images/hero-img.svg";
import domain from '../../../assets/icons/heroIcon.svg'
import star from '../../../assets/icons/heroIcon1.svg'
import user from '../../../assets/icons/heroIcon2.svg'
import users from '../../../assets/icons/heroIcon3.svg'

const Hero = () => {
  const stats = [
    {
      icon: domain,
      count: "2k+",
      label: "Websites build",
    },
    {
      icon: star,
      count: "97%",
      label: "Client satisfaction",
    },
    {
      icon: users,
      count: "25+",
      label: "Team members",
    },
    {
      icon: user,
      count: "500+",
      label: "Amazing clients",
    },
  ];

  return (
    <section className="bg-[#001655] text-white pt-20 pb-32 relative overflow-hidden">
      {/* Background Overlay */}
      <img
        src={heroOverlay}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      />

      <div className="container_fluid relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Title & Subtitle */}
          <h1 className="text-[75px] leading-[85px] tracking-[3.75px] mb-2 font-railway font-[800]">
            DIGITAL SERVICES
          </h1>
          <p className="text-[25px]  leading-[31px] mb-[52px] font-railway">
            BUILDING YOUR EMPIRE DIGITALLY
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-[55px]">
            <Link
              to="/pricing"
              className="bg-[#FF6B4B] text-white px-[69px] py-[19px] rounded hover:bg-[#ff5a37] transition-colors"
            >
              SEE PRICING
            </Link>
            <Link
              to="/appointment"
              className="border border-white px-[21px] py-[19px]  rounded hover:bg-white hover:text-[#000033] transition-colors"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center gap-3">
                  <span className="w-[48px] h-[48px]">
                    <img src={stat.icon} alt={stat.label} className="w-full h-full" />
                  </span>
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-[24px] leading-[32px] font-bold">{stat.count}</h3>
                    <p className="text-[16px] leading-[24px] text-gray-300">{stat.label}</p>
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/20 mx-12"></div>
                )}
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-4xl mx-auto transform">
            <div className="max-w-[982px] rounded-[4px]">
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
