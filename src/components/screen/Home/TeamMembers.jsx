import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TeamMembers = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const itemsPerView = 4;

    const teamMembers = [
        {
            id: 1,
            name: "Mr Anik",
            position: "Backend Developer",
            image: "/assets/images/team/member1.jpg"
        },
        {
            id: 2,
            name: "Mr Shahed",
            position: "Frontend Developer",
            image: "/assets/images/team/member2.jpg"
        },
        {
            id: 3,
            name: "Mr Mainul Islam",
            position: "SEO Expert",
            image: "/assets/images/team/member3.jpg"
        },
        {
            id: 4,
            name: "Mr Hasib",
            position: "Content Writer",
            image: "/assets/images/team/member4.jpg"
        },
        {
            id: 5,
            name: "Mr Rakib",
            position: "UI/UX Designer",
            image: "/assets/images/team/member5.jpg"
        },
        {
            id: 6,
            name: "Mr Siam",
            position: "Digital Marketer",
            image: "/assets/images/team/member6.jpg"
        },
        {
            id: 7,
            name: "Mr Rony",
            position: "Project Manager",
            image: "/assets/images/team/member7.jpg"
        },
        {
            id: 8,
            name: "Mr Sakib",
            position: "Full Stack Developer",
            image: "/assets/images/team/member8.jpg"
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
        <section className="py-24 bg-white">
            <div className="container_fluid">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#0066FF] uppercase text-sm font-medium mb-4 block">
                        EXPERIENCED TEAM
                    </span>
                    <h2 className="text-[#000033] text-4xl font-bold mb-6">
                        Our Team Members
                    </h2>
                </div>

                {/* Team Members Slider */}
                <div className="relative overflow-hidden px-4">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(-${startIndex * 25}%)` : 'translateX(0)',
                        }}
                    >
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="w-1/4 flex-shrink-0"
                            >
                                <div className="group relative overflow-hidden">
                                    {/* Image */}
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Info Box */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#000066] text-white p-4">
                                        <h3 className="text-xl font-semibold mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm opacity-90">
                                            {member.position}
                                        </p>
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

export default TeamMembers; 