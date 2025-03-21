import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import member1 from '../../../assets/images/team-member/member1.svg';
import member2 from '../../../assets/images/team-member/member2.svg';
import member3 from '../../../assets/images/team-member/member3.svg';
import member4 from '../../../assets/images/team-member/member4.svg';

const TeamMembers = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    // Responsive items per view
    const getItemsPerView = () => {
        if (window.innerWidth >= 1280) return 4;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(getItemsPerView());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const teamMembers = [
        {
            id: 1,
            name: "Mr Anik",
            position: "Backend Developer",
            image: member1
        },
        {
            id: 2,
            name: "Mr Shahed",
            position: "Frontend Developer",
            image: member2
        },
        {
            id: 3,
            name: "Mr Mainul Islam",
            position: "SEO Expert",
            image: member3
        },
        {
            id: 4,
            name: "Mr Hasib",
            position: "Content Writer",
            image: member4
        },
        {
            id: 5,
            name: "Mr Rakib",
            position: "UI/UX Designer",
            image: member1
        },
        {
            id: 6,
            name: "Mr Siam",
            position: "Digital Marketer",
            image: member2
        },
        {
            id: 7,
            name: "Mr Rony",
            position: "Project Manager",
            image: member3
        },
        {
            id: 8,
            name: "Mr Sakib",
            position: "Full Stack Developer",
            image: member4
        }
    ];

    const handleNextClick = () => {
        if (isSliding) return;
        setIsSliding(true);

        if (startIndex < teamMembers.length - itemsPerView) {
            setStartIndex(prev => prev + 1);
        }

        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    const handlePrevClick = () => {
        if (isSliding) return;
        setIsSliding(true);

        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }

        setTimeout(() => {
            setIsSliding(false);
        }, 500);
    };

    const showNavigation = teamMembers.length > itemsPerView;
    const canScrollNext = startIndex < teamMembers.length - itemsPerView;
    const canScrollPrev = startIndex > 0;

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
            <div className="container_fluid px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <span className="text-[#0066FF] uppercase text-xs sm:text-sm font-medium mb-2 sm:mb-3 lg:mb-4 block tracking-wider">
                        EXPERIENCED TEAM
                    </span>
                    <h2 className="text-[#000033] text-2xl sm:text-3xl lg:text-4xl font-bold">
                        Our Team Members
                    </h2>
                </div>

                {/* Team Members Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(-${startIndex * (100 / itemsPerView)}%)` : 'translateX(0)',
                        }}
                    >
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className={`${itemsPerView === 4 ? 'w-1/4' :
                                    itemsPerView === 3 ? 'w-1/3' :
                                        itemsPerView === 2 ? 'w-1/2' :
                                            'w-full'
                                    } flex-shrink-0 px-0 sm:px-2`}
                            >
                                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                                    {/* Image */}
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Info Box */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#000066]/90 backdrop-blur-sm text-white p-3 sm:p-4">
                                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-0.5 sm:mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm opacity-90">
                                            {member.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {showNavigation && (
                        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
                            <button
                                onClick={handlePrevClick}
                                disabled={isSliding || !canScrollPrev}
                                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-[4px] transition-all ${(!canScrollPrev || isSliding)
                                    ? 'bg-transparent border-2 border-[#0C89FF] cursor-not-allowed'
                                    : 'bg-[#0C89FF] hover:bg-[#0972d3]'
                                    }`}
                            >
                                <IoIosArrowForward
                                    className={`w-5 h-5 sm:w-6 sm:h-6 rotate-180 ${(!canScrollPrev || isSliding) ? 'text-[#0C89FF]' : 'text-white'
                                        }`}
                                />
                            </button>
                            <button
                                onClick={handleNextClick}
                                disabled={isSliding || !canScrollNext}
                                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-[4px] transition-all ${(!canScrollNext || isSliding)
                                    ? 'bg-transparent border-2 border-[#0C89FF] cursor-not-allowed'
                                    : 'bg-[#FF6B4B] hover:bg-[#ff5a37]'
                                    }`}
                            >
                                <IoIosArrowForward
                                    className={`w-5 h-5 sm:w-6 sm:h-6 ${(!canScrollNext || isSliding) ? 'text-[#0C89FF]' : 'text-white'
                                        }`}
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TeamMembers; 