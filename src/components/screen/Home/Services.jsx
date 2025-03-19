import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import serviceImg1 from '../../../assets/images/service1.svg'
import serviceImg2 from '../../../assets/images/service2.svg'
import serviceImg from '../../../assets/images/service.svg'
import bottomOverlay from '../../../assets/images/section-bottom-overly.svg'

const Services = () => {
    const [activeTab, setActiveTab] = useState("WEBSITE");
    const [startIndex, setStartIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const itemsPerView = 3;

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
        <section className="px-[55px] pt-[55px] pb-[85px] w-full max-w-[17970px] mx-auto bg-[#001655] relative overflow-hidden">
            {/* Glowing Circle Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[658px] rounded-full bg-[#0A3CCA99] blur-[100px] opacity-30 pointer-events-none"></div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-[232px] pointer-events-none">
                <div className="absolute inset-0  z-10"></div>
                <img
                    src={bottomOverlay}
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Content Container with relative positioning */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-[#FF6B4B] uppercase text-[16px] font-[600] mb-4 block tracking-[5px]">
                                DIGITAL SERVICES
                            </span>
                            <h2 className="text-white h3">Check Our Available Services</h2>
                        </div>
                        <Link
                            to="/services"
                            className="bg-[#FF6B4B] text-white px-[46px] py-4 rounded hover:bg-[#ff5a37] transition-colors text-[16px] font-[400]"
                        >
                            All Services
                        </Link>
                    </div>
                    <div className="h-px bg-white/10 w-full"></div>
                </div>

                {/* Tabs */}
                <div className="flex gap-8 mb-[76px] overflow-x-auto pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`whitespace-nowrap px-4 py-2 rounded transition-colors text-[16px] font-[400] tracking-[1px] leading-3 ${activeTab === tab
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
                        className="flex gap-8 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(-${startIndex * 33.33}%)` : 'translateX(0)',
                        }}
                    >
                        {filteredServices.map((service) => (
                            <div
                                key={service.id}
                                className="backdrop-blur-[72px] bg-white/5 border border-white/20 text-white p-8 rounded-lg flex flex-col items-center text-center min-w-[calc(33.33%-1.33rem)]"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[185px] h-24 mb-4"
                                />
                                <h3 className="text-[24px] text-white font-semibold mb-4">{service.title}</h3>
                                <p className="text-white text-16px mb-6">{service.subtitle}</p>
                                <div className="flex gap-2">
                                    <Link
                                        to={`/portfolio/${service.id}`}
                                        className="px-[36px] py-[13px] border border-transparent hover:border-[#0C89FF] rounded-full bg-[#0C89FF] hover:bg-transparent transition-colors text-white text-[14px] font-[400]"
                                    >
                                        Portfolio
                                    </Link>
                                    <Link
                                        to={`/order/${service.id}`}
                                        className="px-[23px] py-[13px] bg-transparent border border-[#0C89FF] rounded-full hover:bg-[#0C89FF] transition-colors text-[#0C89FF] hover:text-white text-[14px] font-[400]"
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
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={handlePrevClick}
                            disabled={isSliding || startIndex === 0}
                            className={`w-12 h-12 flex items-center justify-center rounded-[4px] transition-all
                                ${(isSliding || startIndex === 0)
                                    ? 'bg-transparent border-2 border-[#0C89FF] cursor-not-allowed'
                                    : 'bg-[#0C89FF] hover:bg-[#0972d3]'}`}
                        >
                            <HiOutlineArrowLeft
                                className={`w-6 h-6 ${(isSliding || startIndex === 0) ? 'text-[#0C89FF]' : 'text-white'}`}
                            />
                        </button>
                        <button
                            onClick={handleNextClick}
                            disabled={isSliding || startIndex >= filteredServices.length - itemsPerView}
                            className={`w-12 h-12 flex items-center justify-center rounded-[4px] transition-all
                                ${(isSliding || startIndex >= filteredServices.length - itemsPerView)
                                    ? 'bg-transparent border-2 border-[#0C89FF] cursor-not-allowed'
                                    : 'bg-[#FF6B4B] hover:bg-[#ff5a37]'}`}
                        >
                            <HiOutlineArrowRight
                                className={`w-6 h-6 ${(isSliding || startIndex >= filteredServices.length - itemsPerView) ? 'text-[#0C89FF]' : 'text-white'}`}
                            />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services; 