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
        <section className="pt-16 pb-[91px] bg-gradient-to-b from-white to-blue-50 relative">
            {/* Overlay Images */}
            <div className="absolute bottom-[-330px] left-0 right-0 w-full pointer-events-none z-0">
                <img 
                    src={overlayOne} 
                    alt="" 
                    className="w-full"
                />
                <img 
                    src={overlayTwo} 
                    alt="" 
                    className="w-full absolute bottom-[-200px] left-0 -translate-y-[85px]"
                />
            </div>

            <div className="container_fluid max-w-[1107px] relative z-10">
                {/* Header */}
                <div className="text-center mb-[38px]">
                    <span className="text-[#0A2C8C] uppercase text-sm font-medium mb-2 block">
                        MORE DETAILS
                    </span>
                    <h2 className="text-[#000033] h3 tracking-[2px] mt-4">
                        Get Your Answers
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-8 group">
                    {details.map((item) => (
                        <div
                            key={item.id}
                            className={`p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 group/item
                                ${item.id === 1
                                    ? 'bg-[#0A2C8C] border-transparent group-hover:bg-transparent group-hover:border-[#E8E5E5]'
                                    : 'bg-white border border-[#E8E5E5] hover:bg-[#0A2C8C] hover:border-transparent'}`}
                        >
                            <div className={`w-[256px] rounded-[32px] p-8 transition-all duration-300
                                ${item.id === 1
                                    ? 'bg-gradient-to-b from-[#193CA000]/0 to-[#193CA033]/20 group-hover:bg-transparent'
                                    : 'bg-transparent group-hover/item:bg-gradient-to-b group-hover/item:from-[#193CA000]/0 group-hover/item:to-[#193CA033]/20'}`}>
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-full"
                                />
                            </div>
                            <div className="text-left mt-6">
                                <h3 className={`text-[30px] font-semibold mb-4 transition-colors
                                    ${item.id === 1
                                        ? 'text-white group-hover:text-[#001246]'
                                        : 'text-[#001246] group-hover:text-[#001246] group-hover/item:text-white'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-[16px] font-medium mb-4 transition-colors
                                    ${item.id === 1
                                        ? 'text-[#0066FF] group-hover:text-[#0066FF]'
                                        : 'text-[#0066FF] group-hover:text-[#0066FF] group-hover/item:text-white'}`}>
                                    {item.subtitle}
                                </p>
                                <p className={`text-[16px] font-normal transition-colors
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
                <div className="text-center mt-12">
                    <Link
                        to="/pricing"
                        className="inline-block bg-[#FF6B4B] text-white px-8 py-3 rounded-md hover:bg-[#ff5a37] transition-colors font-medium"
                    >
                        See Pricing
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MoreDetails; 