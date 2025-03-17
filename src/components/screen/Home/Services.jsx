import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Services = () => {
    const [activeTab, setActiveTab] = useState("WEBSITE");
    const [startIndex, setStartIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const itemsPerView = 3;

    const tabs = ["WEBSITE", "UI/UX", "SEO", "LOGO DESIGN", "BANNER DESIGN", "GOOGLE ADS"];

    const services = [
        {
            id: 1,
            image: "/services/wordpress.svg",
            title: "WordPress Website",
            subtitle: "Design & Development",
            category: "WEBSITE"
        },
        {
            id: 2,
            image: "/services/content.svg",
            title: "Content Writing",
            subtitle: "For entire project",
            category: "WEBSITE"
        },
        {
            id: 3,
            image: "/services/seo.svg",
            title: "Monthly SEO",
            subtitle: "Rank #1 on google",
            category: "WEBSITE"
        },
        {
            id: 4,
            image: "/services/ecommerce.svg",
            title: "eCommerce Website",
            subtitle: "Full Development",
            category: "WEBSITE"
        },
        {
            id: 5,
            image: "/services/react.svg",
            title: "React Development",
            subtitle: "Modern Web Apps",
            category: "WEBSITE"
        },
        {
            id: 6,
            image: "/services/ui-design.svg",
            title: "UI/UX Design",
            subtitle: "Modern Interface",
            category: "UI/UX"
        },
        {
            id: 7,
            image: "/services/seo-audit.svg",
            title: "SEO Audit",
            subtitle: "Complete Analysis",
            category: "SEO"
        },
        {
            id: 8,
            image: "/services/logo.svg",
            title: "Logo Design",
            subtitle: "Brand Identity",
            category: "LOGO DESIGN"
        },
        {
            id: 9,
            image: "/services/banner.svg",
            title: "Banner Design",
            subtitle: "Social Media & Web",
            category: "BANNER DESIGN"
        }
    ];

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
        <section className="py-16">
            <div className="container_fluid">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-[#FF6B4B] uppercase text-sm font-medium mb-2 block">
                                DIGITAL SERVICES
                            </span>
                            <h2 className="h3">Check Our Available Services</h2>
                        </div>
                        <Link
                            to="/services"
                            className="bg-[#FF6B4B] text-white px-6 py-2 rounded hover:bg-[#ff5a37] transition-colors"
                        >
                            All Services
                        </Link>
                    </div>
                    <div className="h-px bg-gray-200 w-full"></div>
                </div>

                {/* Tabs */}
                <div className="flex gap-8 mb-12 overflow-x-auto pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`whitespace-nowrap px-4 py-2 rounded transition-colors ${activeTab === tab
                                ? "text-[#FF6B4B] bg-[#FF6B4B]/10"
                                : "text-gray-600 hover:text-[#FF6B4B]"
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
                                className="bg-[#000033] text-white p-8 rounded-lg flex flex-col items-center text-center min-w-[calc(33.33%-1.33rem)]"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-24 h-24 mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-300 mb-6">{service.subtitle}</p>
                                <div className="flex gap-4">
                                    <Link
                                        to={`/portfolio/${service.id}`}
                                        className="px-6 py-2 border border-white rounded hover:bg-white hover:text-[#000033] transition-colors"
                                    >
                                        Portfolio
                                    </Link>
                                    <Link
                                        to={`/order/${service.id}`}
                                        className="px-6 py-2 bg-[#FF6B4B] rounded hover:bg-[#ff5a37] transition-colors"
                                    >
                                        Order
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows - Only show if more than 3 items */}
                {showNavigation && (
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={handlePrevClick}
                            disabled={isSliding || startIndex === 0}
                            className={`p-3 border border-gray-300 rounded-full hover:bg-[#FF6B4B] hover:border-[#FF6B4B] hover:text-white transition-colors 
                                ${(isSliding || startIndex === 0) ? 'cursor-not-allowed opacity-50' : ''}`}
                        >
                            <BsArrowLeft size={20} />
                        </button>
                        <button
                            onClick={handleNextClick}
                            disabled={isSliding || startIndex >= filteredServices.length - itemsPerView}
                            className={`p-3 border border-gray-300 rounded-full hover:bg-[#FF6B4B] hover:border-[#FF6B4B] hover:text-white transition-colors 
                                ${(isSliding || startIndex >= filteredServices.length - itemsPerView) ? 'cursor-not-allowed opacity-50' : ''}`}
                        >
                            <BsArrowRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services; 