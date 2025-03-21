import { Link } from "react-router-dom";
import heroOverlay from "../../../assets/images/hero-overly.svg";
import heroImg from "../../../assets/images/hero-img.svg";
import bottomOverlay from '../../../assets/images/section-bottom-overly.svg';
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
    <section className="bg-[#001655] text-white pt-12 md:pt-20 pb-16 md:pb-32 relative overflow-hidden">
      {/* Background Overlay */}
      <img
        src={heroOverlay}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      />

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[232px] pointer-events-none">
        <div className="absolute inset-0 z-10"></div>
        <img
          src={bottomOverlay}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container_fluid relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Title & Subtitle */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[75px] leading-tight md:leading-[85px] tracking-wider md:tracking-[3.75px] mb-2 md:mb-4 font-railway font-extrabold">
            DIGITAL SERVICES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-normal md:leading-[31px] mb-8 md:mb-[52px] font-railway">
            BUILDING YOUR EMPIRE DIGITALLY
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-[55px] w-full sm:w-auto">
            <Link
              to="/pricing"
              className="bg-[#FF6B4B] text-white px-6 sm:px-[69px] py-3 sm:py-[19px] rounded hover:bg-[#ff5a37] transition-colors text-center"
            >
              SEE PRICING
            </Link>
            <Link
              to="/appointment"
              className="border border-white px-6 sm:px-[21px] py-3 sm:py-[19px] rounded hover:bg-white hover:text-[#000033] transition-colors text-center"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 w-full max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <span className="w-10 md:w-[48px] h-10 md:h-[48px]">
                    <img src={stat.icon} alt={stat.label} className="w-full h-full" />
                  </span>
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-xl md:text-2xl lg:text-[24px] leading-tight md:leading-[32px] font-bold">
                      {stat.count}
                    </h3>
                    <p className="text-sm md:text-base lg:text-[16px] leading-normal md:leading-[24px] text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={heroImg}
                alt="Envobyte Team"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
