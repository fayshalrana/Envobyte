import { Link } from "react-router-dom";
import detailsOne from '../../../assets/images/details-1.svg'
import detailsTwo from '../../../assets/images/details-2.svg'
import detailsThree from '../../../assets/images/details-3.svg'
import overlayOne from '../../../assets/images/moreDetail-overly-1.svg'
import overlayTwo from '../../../assets/images/moreDetails-overly-2.svg'

const MoreDetails = () => {
    const details = [
        {
            id: 1,
            icon: detailsOne,
            title: "Why Chose Envobyte",
            subtitle: "Experienced & trustworthy",
            description: "We're experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success."
        },
        {
            id: 2,
            icon: detailsTwo,
            title: "What's Your Benefit",
            subtitle: "No hassle with best price",
            description: "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price."
        },
        {
            id: 3,
            icon: detailsThree,
            title: "What is Combo Offer",
            subtitle: "Get 9 services in one package",
            description: "You're getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!"
        }
    ];

    return (
        <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-[91px] bg-gradient-to-b from-white to-blue-50 relative">
            {/* Overlay Images */}
            <div className="absolute bottom-[-165px] sm:bottom-[-250px] lg:bottom-[-270px] left-0 right-0 w-full pointer-events-none z-0">
                <img
                    src={overlayOne}
                    alt=""
                    className="w-full"
                />
                <img
                    src={overlayTwo}
                    alt=""
                    className="w-full absolute bottom-[-100px] sm:bottom-[-150px] lg:bottom-[-100px] left-0 -translate-y-[42px] sm:-translate-y-[65px] lg:-translate-y-[85px]"
                />
            </div>

            <div className="container_fluid max-w-[1107px] px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-[38px]">
                    <span className="text-[#0A2C8C] uppercase text-xs sm:text-sm font-medium mb-1 sm:mb-2 block tracking-wider">
                        MORE DETAILS
                    </span>
                    <h2 className="text-[#000033] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[1px] sm:tracking-[2px] mt-2 sm:mt-4">
                        Get Your Answers
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 group">
                    {details.map((item, index) => (
                        <div
                            key={item.id}
                            className={`p-6 sm:p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 group/item
                                ${item.id === 1
                                    ? 'bg-[#0A2C8C] border-transparent group-hover:bg-transparent group-hover:border-[#E8E5E5]'
                                    : 'bg-white border border-[#E8E5E5] hover:bg-[#0A2C8C] hover:border-transparent'}
                                ${index === 1 ? 'sm:border-l-0 sm:border-r-0 lg:border-r lg:border-l-0' : ''}
                                ${index === 2 ? 'lg:border-l-0' : ''}`}
                        >
                            <div className={`w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[256px] rounded-[32px] p-6 sm:p-8 transition-all duration-300
                                ${item.id === 1
                                    ? 'bg-gradient-to-b from-[#193CA000]/0 to-[#193CA033]/20 group-hover:bg-transparent'
                                    : 'bg-transparent group-hover/item:bg-gradient-to-b group-hover/item:from-[#193CA000]/0 group-hover/item:to-[#193CA033]/20'}`}>
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-full"
                                />
                            </div>
                            <div className="text-left mt-4 sm:mt-6">
                                <h3 className={`text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2 sm:mb-4 transition-colors
                                    ${item.id === 1
                                        ? 'text-white group-hover:text-[#001246]'
                                        : 'text-[#001246] group-hover:text-[#001246] group-hover/item:text-white'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm sm:text-base lg:text-[16px] font-medium mb-2 sm:mb-4 transition-colors
                                    ${item.id === 1
                                        ? 'text-[#0066FF] group-hover:text-[#0066FF]'
                                        : 'text-[#0066FF] group-hover:text-[#0066FF] group-hover/item:text-white'}`}>
                                    {item.subtitle}
                                </p>
                                <p className={`text-sm sm:text-base lg:text-[16px] font-normal transition-colors
                                    ${item.id === 1
                                        ? 'text-white/80 group-hover:text-[#424242]'
                                        : 'text-[#424242] group-hover:text-[#424242] group-hover/item:text-white/80'}`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See Pricing Button */}
                <div className="text-center mt-8 sm:mt-10 lg:mt-12">
                    <Link
                        to="/pricing"
                        className="inline-block bg-[#FF6B4B] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-[#ff5a37] transition-colors text-sm sm:text-base font-medium"
                    >
                        See Pricing
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MoreDetails; 