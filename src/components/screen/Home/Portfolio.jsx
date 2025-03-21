import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import portfolio1 from "../../../assets/images/portfolio/portfolio1.svg";
import portfolio2 from "../../../assets/images/portfolio/portfolio2.svg";
import portfolio3 from "../../../assets/images/portfolio/portfolio3.svg";
import portfolio4 from "../../../assets/images/portfolio/portfolio4.svg";
import portfolio5 from "../../../assets/images/portfolio/portfolio5.svg";
import portfolio6 from "../../../assets/images/portfolio/portfolio6.svg";
import portfolio7 from "../../../assets/images/portfolio/portfolio7.webp";
import portfolio8 from "../../../assets/images/portfolio/portfolio8.png";

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
            image: portfolio1,
            title: "Modern Dashboard",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 2,
            image: portfolio2,
            title: "Mobile App UI",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 3,
            image: portfolio3,
            title: "Social Network App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 4,
            image: portfolio4,
            title: "Fitness Tracker",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 5,
            image: portfolio5,
            title: "Travel Booking App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 6,
            image: portfolio6,
            title: "Food Delivery UI",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 29,
            image: portfolio7,
            title: "Music Player App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 30,
            image: portfolio8,
            title: "Weather App Design",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 31,
            image: portfolio1,
            title: "Task Manager UI",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 32,
            image: portfolio2,
            title: "Chat Application",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 33,
            image: portfolio3,
            title: "Smart Home App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },
        {
            id: 34,
            image: portfolio4,
            title: "Meditation App",
            subtitle: "UI/UX Design",
            category: "UI/UX"
        },

        // Website Items (12 items)
        {
            id: 7,
            image: portfolio5,
            title: "E-learning Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 8,
            image: portfolio6,
            title: "E-commerce Website",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 9,
            image: portfolio7,
            title: "Real Estate Portal",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 10,
            image: portfolio8,
            title: "News Magazine",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 11,
            image: portfolio1,
            title: "Healthcare Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 12,
            image: portfolio2,
            title: "Job Portal",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 35,
            image: portfolio3,
            title: "Travel Blog",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 36,
            image: portfolio4,
            title: "Restaurant Website",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 37,
            image: portfolio5,
            title: "Portfolio Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 38,
            image: portfolio6,
            title: "Event Management",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 39,
            image: portfolio7,
            title: "Online Course Platform",
            subtitle: "Web Development",
            category: "WEBSITE"
        },
        {
            id: 40,
            image: portfolio8,
            title: "Fitness Website",
            subtitle: "Web Development",
            category: "WEBSITE"
        },

        // SEO Items (10 items)
        {
            id: 13,
            image: portfolio1,
            title: "SEO Optimization",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 14,
            image: portfolio2,
            title: "Local SEO Campaign",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 15,
            image: portfolio3,
            title: "E-commerce SEO",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 16,
            image: portfolio4,
            title: "Content Strategy",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 41,
            image: portfolio5,
            title: "Blog SEO Strategy",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 42,
            image: portfolio6,
            title: "Technical SEO Audit",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 43,
            image: portfolio7,
            title: "International SEO",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 44,
            image: portfolio8,
            title: "Mobile SEO Project",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 45,
            image: portfolio1,
            title: "Enterprise SEO",
            subtitle: "Digital Marketing",
            category: "SEO"
        },
        {
            id: 46,
            image: portfolio2,
            title: "SaaS SEO Campaign",
            subtitle: "Digital Marketing",
            category: "SEO"
        },

        // Logo Design Items (10 items)
        {
            id: 17,
            image: portfolio3,
            title: "Brand Identity",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 18,
            image: portfolio4,
            title: "Restaurant Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 19,
            image: portfolio5,
            title: "Tech Startup Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 20,
            image: portfolio6,
            title: "Fashion Brand Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 47,
            image: portfolio7,
            title: "Sports Brand Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 48,
            image: portfolio8,
            title: "Education Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 49,
            image: portfolio1,
            title: "Healthcare Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 50,
            image: portfolio2,
            title: "Real Estate Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 51,
            image: portfolio3,
            title: "Gaming Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },
        {
            id: 52,
            image: portfolio4,
            title: "Food Brand Logo",
            subtitle: "Logo Design",
            category: "LOGO DESIGN"
        },

        // Banner Design Items (10 items)
        {
            id: 21,
            image: portfolio5,
            title: "Social Media Kit",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 22,
            image: portfolio6,
            title: "Event Banners",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 23,
            image: portfolio7,
            title: "Product Launch",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 24,
            image: portfolio8,
            title: "Sale Campaign",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 53,
            image: portfolio1,
            title: "Festival Banners",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 54,
            image: portfolio2,
            title: "App Launch Banners",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 55,
            image: portfolio3,
            title: "Holiday Campaign",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 56,
            image: portfolio4,
            title: "Fashion Collection",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 57,
            image: portfolio5,
            title: "Tech Conference",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },
        {
            id: 58,
            image: portfolio6,
            title: "Black Friday Sale",
            subtitle: "Banner Design",
            category: "BANNER DESIGN"
        },

        // Google Ads Items (10 items)
        {
            id: 25,
            image: portfolio7,
            title: "Google Ads Campaign",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 26,
            image: portfolio8,
            title: "PPC Campaign",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 27,
            image: portfolio1,
            title: "Display Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 28,
            image: portfolio2,
            title: "Remarketing Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 59,
            image: portfolio3,
            title: "Video Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 60,
            image: portfolio4,
            title: "Shopping Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 61,
            image: portfolio5,
            title: "Local Service Ads",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 62,
            image: portfolio6,
            title: "App Campaign",
            subtitle: "Digital Marketing",
            category: "GOOGLE ADS"
        },
        {
            id: 63,
            image: portfolio7,
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
        <section className="pb-16 bg-[#F8F9FF]">
            <div className="relative">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-8 z-10 relative px-[55px]">
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
                <div className="flex gap-8 mb-12 overflow-x-auto pb-4 px-[55px]">
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