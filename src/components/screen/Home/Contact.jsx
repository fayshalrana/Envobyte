import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import facebookIcon from "../../../assets/icons/facebook.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <section className="py-12 md:py-24 bg-[#001243] relative overflow-hidden">
            {/* Glowing Overlays */}
            <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#4580FF] opacity-[0.15] blur-[150px]"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#4580FF] opacity-[0.15] blur-[150px]"></div>

            <div className="container_fluid relative z-10 px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
                    {/* Contact Form */}
                    <div className="bg-[#001243]/10 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                {/* Name */}
                                <div>
                                    <label className="text-white text-sm mb-2 block">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 text-sm md:text-base"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="text-white text-sm mb-2 block">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="support@envobyte.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 text-sm md:text-base"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="text-white text-sm mb-2 block">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (667) 777 2477"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 text-sm md:text-base"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="text-white text-sm mb-2 block">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Envobyte"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 text-sm md:text-base"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-white text-sm mb-2 block">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type your message here..."
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 resize-none text-sm md:text-base"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto backdrop-blur-[10px] bg-white/5 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium hover:bg-white/90 hover:text-black transition-colors border border-[#F1F3F74D] text-sm md:text-base"
                            >
                                Send message →
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                            Let us know what <br className="hidden md:block" /> you think!
                        </h2>
                        <p className="text-white/80 text-sm md:text-base mb-8 md:mb-12 max-w-[400px]">
                            Got something on your mind? Share it with us! Drop a message, and we'll respond quickly to assist you
                        </p>

                        {/* Contact Links */}
                        <div className="space-y-4 max-w-[400px]">
                            {/* Email */}
                            <a
                                href="mailto:support@envobyte.com"
                                className="flex items-center gap-3 md:gap-4 text-white group"
                            >
                                <span className="w-10 h-10 md:w-12 md:h-12 bg-[#4580FF] rounded-lg flex items-center justify-center relative">
                                    <img src={facebookIcon} alt="Email" className="w-6 h-6 md:w-7 md:h-7" />
                                </span>
                                <div className="flex-grow border-b border-white/10 pb-3 md:pb-4">
                                    <p className="text-[13px] md:text-[14px] text-white/60 font-medium">Business:</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[15px] md:text-[16px] font-semibold truncate mr-2">support@envobyte.com</p>
                                        <BsBoxArrowUpRight size={12} className="text-white/60 flex-shrink-0" />
                                    </div>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/16677772477"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 md:gap-4 text-white group"
                            >
                                <span className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] rounded-lg flex items-center justify-center relative">
                                    <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 md:w-7 md:h-7" />
                                </span>
                                <div className="flex-grow border-b border-white/10 pb-3 md:pb-4">
                                    <p className="text-[13px] md:text-[14px] text-white/60 font-medium">Whatsapp:</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[15px] md:text-[16px] font-semibold truncate mr-2">+1 (667) 777 2477</p>
                                        <BsBoxArrowUpRight size={12} className="text-white/60 flex-shrink-0" />
                                    </div>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/envobyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 md:gap-4 text-white group"
                            >
                                <span className="w-10 h-10 md:w-12 md:h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center relative">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7" />
                                </span>
                                <div className="flex-grow border-b border-white/10 pb-3 md:pb-4">
                                    <p className="text-[13px] md:text-[14px] text-white/60 font-medium">Linkedin:</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[15px] md:text-[16px] font-semibold truncate mr-2">www.linkedin.com/company/envobyte</p>
                                        <BsBoxArrowUpRight size={12} className="text-white/60 flex-shrink-0" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 