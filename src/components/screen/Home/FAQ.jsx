import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const faqData = [
        {
            id: 1,
            question: "What Is Included In Your Web Development Service?",
            answer: "We provide comprehensive web development services including custom design, responsive development, CMS integration, e-commerce functionality, API integration, and thorough testing. Our service also includes basic SEO setup and performance optimization."
        },
        {
            id: 2,
            question: "What Technologies Do You Use For Web Development?",
            answer: "We use modern technologies such as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL to ensure your website is scalable, secure, and responsive."
        },
        {
            id: 3,
            question: "What If I Need Ongoing Support After The Website Is Launched?",
            answer: "We offer dedicated post-launch support packages that include regular maintenance, updates, security monitoring, and technical support to ensure your website continues to perform optimally."
        },
        {
            id: 4,
            question: "Can I Customize My Website According To My Business Needs?",
            answer: "Yes, we offer fully customizable solutions tailored to your specific business requirements. Our team works closely with you to implement custom features, designs, and functionality that align with your business goals."
        },
        {
            id: 5,
            question: "Do You Offer Seo Services As Part Of Your Web Development?",
            answer: "Yes, we provide integrated SEO services including on-page optimization, technical SEO setup, and basic search engine optimization strategies to help improve your website's visibility in search results."
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#F8F9FF]">
            <div className="container_fluid">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <h2 className="text-[#000066] text-4xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqData.map((faq) => (
                            <div
                                key={faq.id}
                                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => handleToggle(faq.id)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#0066FF] text-sm font-medium">
                                            {String(faq.id).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-[#000033] font-medium">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <span className="text-[#0066FF] flex-shrink-0">
                                        {activeIndex === faq.id ? (
                                            <IoRemove size={20} />
                                        ) : (
                                            <IoAdd size={20} />
                                        )}
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${activeIndex === faq.id ? 'max-h-40' : 'max-h-0'
                                        }`}
                                >
                                    <p className="p-5 pt-0 text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ; 