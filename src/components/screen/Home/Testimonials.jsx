import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

const Testimonials = () => {
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [secondRowIndex, setSecondRowIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const itemsPerView = 3;

    const testimonials = [
        {
            id: 1,
            name: "Stephanie Powell",
            position: "From fiverr",
            image: "/assets/images/testimonials/user1.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 2,
            name: "Brian Clark",
            position: "From upwork",
            image: "/assets/images/testimonials/user2.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 3,
            name: "Christopher White",
            position: "From freelancer",
            image: "/assets/images/testimonials/user3.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 4,
            name: "Brian Clark",
            position: "From fiverr",
            image: "/assets/images/testimonials/user4.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 5,
            name: "Christopher White",
            position: "From upwork",
            image: "/assets/images/testimonials/user5.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 6,
            name: "Stephanie Powell",
            position: "From freelancer",
            image: "/assets/images/testimonials/user6.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 7,
            name: "Stephanie Powell",
            position: "From fiverr",
            image: "/assets/images/testimonials/user1.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 8,
            name: "Brian Clark",
            position: "From upwork",
            image: "/assets/images/testimonials/user2.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 9,
            name: "Christopher White",
            position: "From freelancer",
            image: "/assets/images/testimonials/user3.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 10,
            name: "Brian Clark",
            position: "From fiverr",
            image: "/assets/images/testimonials/user4.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 11,
            name: "Christopher White",
            position: "From upwork",
            image: "/assets/images/testimonials/user5.jpg",
            text: "Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"
        },
        {
            id: 12,
            name: "Stephanie Powell",
            position: "From freelancer",
            image: "/assets/images/testimonials/user6.jpg",
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
        <div className="w-1/3 flex-shrink-0 px-4">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <AiFillStar
                            key={i}
                            className="text-[#FFB800]"
                            size={20}
                        />
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 mb-6">
                    "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="text-[#000033] font-semibold flex items-center gap-2">
                            {testimonial.name}
                            <BsCheckCircleFill className="text-[#0066FF] text-sm" />
                        </h4>
                        <p className="text-gray-500 text-sm">
                            {testimonial.position}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-white">
            <div className="container_fluid">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#0066FF] uppercase text-sm font-medium mb-4 block">
                        CLIENT REVIEWS
                    </span>
                    <h2 className="text-[#000033] text-4xl font-bold mb-6">
                        Our Proud Clients
                    </h2>
                </div>

                {/* Testimonials Slider */}
                <div className="relative overflow-hidden">
                    {/* First Row */}
                    <div
                        className="flex mb-8 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: showNavigation ? `translateX(-${firstRowIndex * 33.33}%)` : 'translateX(0)',
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
                            transform: showNavigation ? `translateX(${secondRowIndex * 33.33}%)` : 'translateX(0)',
                        }}
                    >
                        {secondRow.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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

export default Testimonials; 