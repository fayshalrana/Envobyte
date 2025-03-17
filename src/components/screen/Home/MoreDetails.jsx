import { Link } from "react-router-dom";

const MoreDetails = () => {
    const details = [
        {
            id: 1,
            icon: "/assets/images/envobyte-icon.png",
            title: "Why Chose Envobyte",
            subtitle: "Experienced & trustworthy",
            description: "We're experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success."
        },
        {
            id: 2,
            icon: "/assets/images/benefit-icon.png",
            title: "What's Your Benefit",
            subtitle: "No hassle with best price",
            description: "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price."
        },
        {
            id: 3,
            icon: "/assets/images/combo-icon.png",
            title: "What is Combo Offer",
            subtitle: "Get 9 services in one package",
            description: "You're getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="container_fluid">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#0066FF] uppercase text-sm font-medium mb-2 block">
                        MORE DETAILS
                    </span>
                    <h2 className="text-[#000033] text-4xl font-bold">
                        Get Your Answers
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-8">
                    {details.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-lg"
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-32 h-32 mb-6"
                            />
                            <h3 className="text-[#000033] text-2xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[#0066FF] font-medium mb-4">
                                {item.subtitle}
                            </p>
                            <p className="text-gray-600">
                                {item.description}
                            </p>
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