import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { IoIosArrowForward } from "react-icons/io";
import serviceImg1 from '../../../assets/images/service1.svg'
import serviceImg2 from '../../../assets/images/service2.svg'
import serviceImg from '../../../assets/images/service.svg'
import bottomOverlay from '../../../assets/images/section-bottom-overly.svg'

const Services = () => {
    const [activeTab, setActiveTab] = useState("WEBSITE");
    const [startIndex, setStartIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

    const tabs = ["WEBSITE", "UI/UX", "SEO", "LOGO DESIGN", "BANNER DESIGN", "GOOGLE ADS"];

    // Array of imported images
    const serviceImages = [serviceImg, serviceImg1, serviceImg2];

    // Memoize the services array with random images
    const services = useMemo(() => [
        {
            id: 1,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "WordPress Website",
            subtitle: "Design & Development",
            category: "WEBSITE"
        },
        {
            id: 2,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "Content Writing",
            subtitle: "For entire project",
            category: "WEBSITE"
        },
        {
            id: 3,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "Monthly SEO",
            subtitle: "Rank #1 on google",
            category: "WEBSITE"
        },
        {
            id: 4,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "eCommerce Website",
            subtitle: "Full Development",
            category: "WEBSITE"
        },
        {
            id: 5,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "React Development",
            subtitle: "Modern Web Apps",
            category: "WEBSITE"
        },
        {
            id: 6,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "UI/UX Design",
            subtitle: "Modern Interface",
            category: "UI/UX"
        },
        {
            id: 7,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "SEO Audit",
            subtitle: "Complete Analysis",
            category: "SEO"
        },
        {
            id: 8,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "Logo Design",
            subtitle: "Brand Identity",
            category: "LOGO DESIGN"
        },
        {
            id: 9,
            image: serviceImages[Math.floor(Math.random() * serviceImages.length)],
            title: "Banner Design",
            subtitle: "Social Media & Web",
            category: "BANNER DESIGN"
        }
    ], []); // Empty dependency array means this will only run once when component mounts

    const filteredServices = services.filter(service => service.category === activeTab);
    const showNavigation = filteredServices.length > 3;

    const handleNextClick = () => {
        if (isSliding || startIndex >= filteredServices.length - itemsPerView) return;
        setIsSliding(true);
        setStartIndex(prev => prev + 1);
        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    const handlePrevClick = () => {
        if (isSliding || startIndex === 0) return;
        setIsSliding(true);
        setStartIndex(prev => prev - 1);
        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setStartIndex(0);
    };

    return (
        <section className="px-4 sm:px-6 lg:px-[55px] pt-8 sm:pt-12 lg:pt-[55px] pb-12 sm:pb-16 lg:pb-[85px] w-full max-w-[1790px] mx-auto bg-[#001655] relative overflow-hidden">
            {/* Glowing Circle Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[640px] h-[300px] sm:h-[450px] lg:h-[658px] rounded-full bg-[#0A3CCA99] blur-[100px] opacity-30 pointer-events-none"></div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-[120px] sm:h-[180px] lg:h-[232px] pointer-events-none">
                <div className="absolute inset-0 z-10"></div>
                <img
                    src={bottomOverlay}
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Content Container with relative positioning */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                        <div>
                            <span className="text-[#FF6B4B] uppercase text-sm sm:text-[16px] font-semibold mb-2 sm:mb-4 block tracking-[3px] sm:tracking-[5px]">
                                DIGITAL SERVICES
                            </span>
                            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">Check Our Available Services</h2>
                        </div>
                        <Link
                            to="/services"
                            className="bg-[#FF6B4B] text-white px-6 sm:px-[46px] py-3 sm:py-4 rounded hover:bg-[#ff5a37] transition-colors text-sm sm:text-[16px] font-medium whitespace-nowrap"
                        >
                            All Services
                        </Link>
                    </div>
                    <div className="h-px bg-white/10 w-full"></div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 sm:gap-8 mb-8 sm:mb-12 lg:mb-[76px] overflow-x-auto pb-4 scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded transition-colors text-sm sm:text-[16px] font-medium tracking-[1px] leading-3 ${activeTab === tab
                                ? "text-[#0C89FF]"
                                : "text-white hover:text-[#0C89FF]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Service Cards Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${startIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {filteredServices.map((service) => (
                            <div
                                key={service.id}
                                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-21px)] min-w-[280px] backdrop-blur-[72px] bg-white/5 border border-white/20 text-white p-6 sm:p-8 rounded-lg flex flex-col items-center text-center"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[120px] sm:w-[150px] lg:w-[185px] h-auto sm:h-20 lg:h-24 mb-4"
                                />
                                <h3 className="text-xl sm:text-2xl lg:text-[24px] text-white font-semibold mb-2 sm:mb-4">{service.title}</h3>
                                <p className="text-white text-sm sm:text-base lg:text-[16px] mb-4 sm:mb-6">{service.subtitle}</p>
                                <div className="flex gap-2">
                                    <Link
                                        to={`/portfolio/${service.id}`}
                                        className="px-4 sm:px-[36px] py-2 sm:py-[13px] border border-transparent hover:border-[#0C89FF] rounded-full bg-[#0C89FF] hover:bg-transparent transition-colors text-white text-xs sm:text-[14px] font-medium"
                                    >
                                        Portfolio
                                    </Link>
                                    <Link
                                        to={`/order/${service.id}`}
                                        className="px-4 sm:px-[23px] py-2 sm:py-[13px] bg-transparent border border-[#0C89FF] rounded-full hover:bg-[#0C89FF] transition-colors text-[#0C89FF] hover:text-white text-xs sm:text-[14px] font-medium"
                                    >
                                        Order
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                {showNavigation && (
                    <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
                        <button
                            onClick={handlePrevClick}
                            disabled={isSliding || startIndex === 0}
                            className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-[4px] transition-all ${isSliding || startIndex === 0
                                    ? 'bg-transparent border-2 border-[#0C89FF] cursor-not-allowed'
                                    : 'bg-[#0C89FF] hover:bg-[#0972d3]'
                                }`}
                        >
                            <IoIosArrowForward
                                className={`w-5 h-5 sm:w-6 sm:h-6 rotate-180 ${isSliding || startIndex === 0 ? 'text-[#0C89FF]' : 'text-white'
                                    }`}
                            />
                        </button>
                        <button
                            onClick={handleNextClick}
                            disabled={isSliding || startIndex >= filteredServices.length - itemsPerView}
                            className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-[4px] transition-all ${isSliding || startIndex >= filteredServices.length - itemsPerView
                                    ? 'bg-transparent border-2 border-[#0C89FF] cursor-not-allowed'
                                    : 'bg-[#FF6B4B] hover:bg-[#ff5a37]'
                                }`}
                        >
                            <IoIosArrowForward
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${isSliding || startIndex >= filteredServices.length - itemsPerView ? 'text-[#0C89FF]' : 'text-white'
                                    }`}
                            />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services; 