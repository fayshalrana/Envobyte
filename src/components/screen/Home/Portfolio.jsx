import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("UI/UX");
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [secondRowIndex, setSecondRowIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const itemsPerView = 3;

    const tabs = ["UI/UX", "WEBSITE", "SEO", "LOGO DESIGN", "BANNER DESIGN", "GOOGLE ADS"];

    const portfolioItems = [
        // UI/UX Items (12 items)
        {
            id: 1,
            image: "/assets/images/portfolio/portfolio-1.jpg",
            title: "Modern Dashboard",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 2,
            image: "/assets/images/portfolio/portfolio-7.jpg",
            title: "Mobile App UI",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 3,
            image: "/assets/images/portfolio/portfolio-9.jpg",
            title: "Social Network App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 4,
            image: "/assets/images/portfolio/portfolio-10.jpg",
            title: "Fitness Tracker",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 5,
            image: "/assets/images/portfolio/portfolio-11.jpg",
            title: "Travel Booking App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 6,
            image: "/assets/images/portfolio/portfolio-12.jpg",
            title: "Food Delivery UI",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 29,
            image: "/assets/images/portfolio/portfolio-29.jpg",
            title: "Music Player App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 30,
            image: "/assets/images/portfolio/portfolio-30.jpg",
            title: "Weather App Design",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 31,
            image: "/assets/images/portfolio/portfolio-31.jpg",
            title: "Task Manager UI",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 32,
            image: "/assets/images/portfolio/portfolio-32.jpg",
            title: "Chat Application",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 33,
            image: "/assets/images/portfolio/portfolio-33.jpg",
            title: "Smart Home App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 34,
            image: "/assets/images/portfolio/portfolio-34.jpg",
            title: "Meditation App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },

        // Website Items (12 items)
        {
            id: 7,
            image: "/assets/images/portfolio/portfolio-2.jpg",
            title: "E-learning Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 8,
            image: "/assets/images/portfolio/portfolio-8.jpg",
            title: "E-commerce Website",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 9,
            image: "/assets/images/portfolio/portfolio-13.jpg",
            title: "Real Estate Portal",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 10,
            image: "/assets/images/portfolio/portfolio-14.jpg",
            title: "News Magazine",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 11,
            image: "/assets/images/portfolio/portfolio-15.jpg",
            title: "Healthcare Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 12,
            image: "/assets/images/portfolio/portfolio-16.jpg",
            title: "Job Portal",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 35,
            image: "/assets/images/portfolio/portfolio-35.jpg",
            title: "Travel Blog",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 36,
            image: "/assets/images/portfolio/portfolio-36.jpg",
            title: "Restaurant Website",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 37,
            image: "/assets/images/portfolio/portfolio-37.jpg",
            title: "Portfolio Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 38,
            image: "/assets/images/portfolio/portfolio-38.jpg",
            title: "Event Management",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 39,
            image: "/assets/images/portfolio/portfolio-39.jpg",
            title: "Online Course Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 40,
            image: "/assets/images/portfolio/portfolio-40.jpg",
            title: "Fitness Website",
            subtitle: "Web Development",
            category: "WEBSITE"
        },

        // SEO Items (10 items)
        {
            id: 13,
            image: "/assets/images/portfolio/portfolio-3.jpg",
            title: "SEO Optimization",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 14,
            image: "/assets/images/portfolio/portfolio-17.jpg",
            title: "Local SEO Campaign",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 15,
            image: "/assets/images/portfolio/portfolio-18.jpg",
            title: "E-commerce SEO",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 16,
            image: "/assets/images/portfolio/portfolio-19.jpg",
            title: "Content Strategy",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 41,
            image: "/assets/images/portfolio/portfolio-41.jpg",
            title: "Blog SEO Strategy",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 42,
            image: "/assets/images/portfolio/portfolio-42.jpg",
            title: "Technical SEO Audit",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 43,
            image: "/assets/images/portfolio/portfolio-43.jpg",
            title: "International SEO",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 44,
            image: "/assets/images/portfolio/portfolio-44.jpg",
            title: "Mobile SEO Project",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 45,
            image: "/assets/images/portfolio/portfolio-45.jpg",
            title: "Enterprise SEO",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 46,
            image: "/assets/images/portfolio/portfolio-46.jpg",
            title: "SaaS SEO Campaign",
            subtitle: "Digital Marketing",
            category: "SEO"
        },

        // Logo Design Items (10 items)
        {
            id: 17,
            image: "/assets/images/portfolio/portfolio-4.jpg",
            title: "Brand Identity",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 18,
            image: "/assets/images/portfolio/portfolio-20.jpg",
            title: "Restaurant Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 19,
            image: "/assets/images/portfolio/portfolio-21.jpg",
            title: "Tech Startup Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 20,
            image: "/assets/images/portfolio/portfolio-22.jpg",
            title: "Fashion Brand Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 47,
            image: "/assets/images/portfolio/portfolio-47.jpg",
            title: "Sports Brand Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 48,
            image: "/assets/images/portfolio/portfolio-48.jpg",
            title: "Education Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 49,
            image: "/assets/images/portfolio/portfolio-49.jpg",
            title: "Healthcare Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 50,
            image: "/assets/images/portfolio/portfolio-50.jpg",
            title: "Real Estate Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 51,
            image: "/assets/images/portfolio/portfolio-51.jpg",
            title: "Gaming Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 52,
            image: "/assets/images/portfolio/portfolio-52.jpg",
            title: "Food Brand Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },

        // Banner Design Items (10 items)
        {
            id: 21,
            image: "/assets/images/portfolio/portfolio-5.jpg",
            title: "Social Media Kit",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 22,
            image: "/assets/images/portfolio/portfolio-23.jpg",
            title: "Event Banners",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 23,
            image: "/assets/images/portfolio/portfolio-24.jpg",
            title: "Product Launch",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 24,
            image: "/assets/images/portfolio/portfolio-25.jpg",
            title: "Sale Campaign",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 53,
            image: "/assets/images/portfolio/portfolio-53.jpg",
            title: "Festival Banners",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 54,
            image: "/assets/images/portfolio/portfolio-54.jpg",
            title: "App Launch Banners",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 55,
            image: "/assets/images/portfolio/portfolio-55.jpg",
            title: "Holiday Campaign",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 56,
            image: "/assets/images/portfolio/portfolio-56.jpg",
            title: "Fashion Collection",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 57,
            image: "/assets/images/portfolio/portfolio-57.jpg",
            title: "Tech Conference",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 58,
            image: "/assets/images/portfolio/portfolio-58.jpg",
            title: "Black Friday Sale",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },

        // Google Ads Items (10 items)
        {
            id: 25,
            image: "/assets/images/portfolio/portfolio-6.jpg",
            title: "Google Ads Campaign",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 26,
            image: "/assets/images/portfolio/portfolio-26.jpg",
            title: "PPC Campaign",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 27,
            image: "/assets/images/portfolio/portfolio-27.jpg",
            title: "Display Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 28,
            image: "/assets/images/portfolio/portfolio-28.jpg",
            title: "Remarketing Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 59,
            image: "/assets/images/portfolio/portfolio-59.jpg",
            title: "Video Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 60,
            image: "/assets/images/portfolio/portfolio-60.jpg",
            title: "Shopping Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 61,
            image: "/assets/images/portfolio/portfolio-61.jpg",
            title: "Local Service Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 62,
            image: "/assets/images/portfolio/portfolio-62.jpg",
            title: "App Campaign",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 63,
            image: "/assets/images/portfolio/portfolio-63.jpg",
            title: "Discovery Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 64,
            image: "/assets/images/portfolio/portfolio-64.jpg",
            title: "Performance Max",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        }
    ];

    const filteredPortfolio = portfolioItems.filter(item => item.category === activeTab);
    const showNavigation = filteredPortfolio.length > 3;

    // Split filtered items into two rows
    const firstRow = filteredPortfolio.slice(0, Math.ceil(filteredPortfolio.length / 2));
    const secondRow = filteredPortfolio.slice(Math.ceil(filteredPortfolio.length / 2));

    // Calculate initial second row position to show last 3 items
    const getInitialSecondRowIndex = (rowLength) => {
        if (rowLength <= itemsPerView) return 0;
        return -(rowLength - itemsPerView); // Show last 3 items initially
    };

    // Update indices when activeTab changes
    useEffect(() => {
        setFirstRowIndex(0);
        setSecondRowIndex(getInitialSecondRowIndex(secondRow.length));
    }, [activeTab]);

    const handleNextClick = () => {
        if (isSliding) return;
        setIsSliding(true);

        // First row: moves left until last item is in view
        if (firstRowIndex < firstRow.length - itemsPerView) {
            setFirstRowIndex(prev => prev + 1);
        }

        // Second row: moves left one item at a time
        if (secondRowIndex < 0) {
            setSecondRowIndex(prev => prev + 1);
        }

        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    const handlePrevClick = () => {
        if (isSliding) return;
        setIsSliding(true);

        // First row: moves right if not at start
        if (firstRowIndex > 0) {
            setFirstRowIndex(prev => prev - 1);
        }

        // Second row: moves right one item at a time
        const minSecondRowIndex = getInitialSecondRowIndex(secondRow.length);
        if (secondRowIndex > minSecondRowIndex) {
            setSecondRowIndex(prev => prev - 1);
        }

        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setFirstRowIndex(0);
        setSecondRowIndex(getInitialSecondRowIndex(secondRow.length));
    };

    const canScrollNext = firstRowIndex < firstRow.length - itemsPerView || secondRowIndex < 0;
    const canScrollPrev = firstRowIndex > 0 || secondRowIndex > getInitialSecondRowIndex(secondRow.length);

    return (
        <section className="py-16 bg-[#F8F9FF]">
            <div className="container_fluid">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-[#0066FF] uppercase text-sm font-medium mb-2 block">
                                UI/UX PORTFOLIO
                            </span>
                            <h2 className="text-[#000033] text-4xl font-bold">
                                Check Our Previous Work
                            </h2>
                        </div>
                        <Link
                            to="/portfolio"
                            className="bg-[#FF6B4B] text-white px-6 py-2 rounded hover:bg-[#ff5a37] transition-colors"
                        >
                            All Portfolio
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
                                ? "text-[#0066FF] bg-[#0066FF]/10"
                                : "text-gray-600 hover:text-[#0066FF]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="relative overflow-hidden">
                    {/* First Row */}
                    <div
                        className="flex mb-8 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(-${firstRowIndex * 33.33}%)` : 'translateX(0)',
                        }}
                    >
                        {firstRow.map((item) => (
                            <div
                                key={item.id}
                                className="w-1/3 flex-shrink-0 px-2"
                            >
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-[#000033] text-xl font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#0066FF]">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(${secondRowIndex * 33.33}%)` : 'translateX(0)',
                        }}
                    >
                        {secondRow.map((item) => (
                            <div
                                key={item.id}
                                className="w-1/3 flex-shrink-0 px-2"
                            >
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-[#000033] text-xl font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#0066FF]">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {showNavigation && (
                        <div className="flex justify-center gap-4 mt-12">
                            <button
                                onClick={handlePrevClick}
                                disabled={isSliding || !canScrollPrev}
                                className={`p-3 border border-gray-300 rounded-full hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-colors 
                                    ${(!canScrollPrev || isSliding) ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                <BsArrowLeft size={20} />
                            </button>
                            <button
                                onClick={handleNextClick}
                                disabled={isSliding || !canScrollNext}
                                className={`p-3 border border-gray-300 rounded-full hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-colors 
                                    ${(!canScrollNext || isSliding) ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                <BsArrowRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio; 