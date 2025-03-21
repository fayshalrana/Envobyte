import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import client1 from '../../../assets/images/testimoinal/client1.svg';
import client2 from '../../../assets/images/testimoinal/client2.svg';
import client3 from '../../../assets/images/testimoinal/client3.svg';
import fiverr from '../../../assets/images/testimoinal/fiver.svg';
import upwork from '../../../assets/images/testimoinal/upwork.svg';

const Testimonials = () => {
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [secondRowIndex, setSecondRowIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    // Responsive items per view
    const getItemsPerView = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
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

    const testimonials = [
        {
            id: 1,
            name: "Stephanie Powell",
            platform: "From fiverr",
            image: client1,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 2,
            name: "Brian Clark",
            platform: "From upwork",
            image: client2,
            platformIcon: upwork,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 3,
            name: "Christopher White",
            platform: "From fiverr",
            image: client3,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 4,
            name: "Brian Clark",
            platform: "From fiverr",
            image: client1,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 5,
            name: "Christopher White",
            platform: "From upwork",
            image: client2,
            platformIcon: upwork,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 6,
            name: "Stephanie Powell",
            platform: "From freelancer",
            image: client3,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 7,
            name: "Stephanie Powell",
            platform: "From fiverr",
            image: client1,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 8,
            name: "Brian Clark",
            platform: "From upwork",
            image: client2,
            platformIcon: upwork,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 9,
            name: "Christopher White",
            platform: "From freelancer",
            image: client3,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 10,
            name: "Brian Clark",
            platform: "From fiverr",
            image: client1,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 11,
            name: "Christopher White",
            platform: "From upwork",
            image: client2,
            platformIcon: upwork,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 12,
            name: "Stephanie Powell",
            platform: "From freelancer",
            image: client3,
            platformIcon: fiverr,
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        }
    ];

    // Split testimonials into two rows
    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    // Calculate initial second row position to show last 3 items
    const getInitialSecondRowIndex = (rowLength) => {
        if (rowLength <= itemsPerView) return 0;
        return -(rowLength - itemsPerView); // Show last 3 items initially
    };

    useEffect(() => {
        setFirstRowIndex(0);
        setSecondRowIndex(getInitialSecondRowIndex(secondRow.length));
    }, []);

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

    const showNavigation = testimonials.length > itemsPerView;
    const canScrollNext = firstRowIndex < firstRow.length - itemsPerView || secondRowIndex < 0;
    const canScrollPrev = firstRowIndex > 0 || secondRowIndex > getInitialSecondRowIndex(secondRow.length);

    const TestimonialCard = ({ testimonial }) => (
        <div className={`${itemsPerView === 3 ? 'w-1/3' : itemsPerView === 2 ? 'w-1/2' : 'w-full'
            } flex-shrink-0 p-2 sm:p-3 lg:p-[10px]`}>
            <div className="bg-white rounded-[10px] p-4 sm:p-6 lg:p-8 relative before:absolute before:inset-[-2px] before:p-[2px] before:bg-gradient-to-b before:from-[#0A2C8C33] before:to-[#f7f7f7] before:rounded-[10px] before:-z-[1]">
                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                        <AiFillStar
                            key={i}
                            className="text-[#4580FF] w-4 h-4 sm:w-5 sm:h-5"
                        />
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-[#424242] text-xs sm:text-sm lg:text-[14px] leading-relaxed sm:leading-[24px] mb-4 sm:mb-6">
                    "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                        />
                        <div>
                            <h4 className="text-[#0A2C8C] text-sm sm:text-base lg:text-[18px] font-bold">
                                {testimonial.name}
                            </h4>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <img
                                    src={testimonial.platformIcon}
                                    alt={testimonial.platform}
                                    className="h-3 sm:h-4"
                                />
                                <span className="text-[#666666] text-xs sm:text-sm lg:text-[14px]">
                                    {testimonial.platform}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-[#ffffff]">
            <div className="container_fluid px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-14">
                    <span className="text-[#0C89FF] uppercase text-sm sm:text-base lg:text-[16px] tracking-[0.2em] font-semibold mb-2 sm:mb-3 lg:mb-4 block">
                        CLIENT REVIEWS
                    </span>
                    <h2 className="text-[#001246] text-2xl sm:text-3xl lg:text-[48px] font-bold">
                        Our Proud Clients
                    </h2>
                </div>

                {/* Testimonials Slider */}
                <div className="relative overflow-hidden">
                    {/* First Row */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(-${firstRowIndex * (100 / itemsPerView)}%)` : 'translateX(0)',
                        }}
                    >
                        {firstRow.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Second Row */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(${secondRowIndex * (100 / itemsPerView)}%)` : 'translateX(0)',
                        }}
                    >
                        {secondRow.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {showNavigation && (
                        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
                            <button
                                onClick={handlePrevClick}
                                disabled={isSliding || !canScrollPrev}
                                className={`p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-colors 
                                    ${(!canScrollPrev || isSliding) ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                <BsArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button
                                onClick={handleNextClick}
                                disabled={isSliding || !canScrollNext}
                                className={`p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-colors 
                                    ${(!canScrollNext || isSliding) ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                <BsArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 