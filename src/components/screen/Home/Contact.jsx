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
        <section className="py-24 bg-[#000066] relative overflow-hidden">
            {/* Glowing Overlays */}
            <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#4580FF] opacity-[0.15] blur-[150px]"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#4580FF] opacity-[0.15] blur-[150px]"></div>

            <div className="container_fluid relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Contact Form */}
                    <div className="bg-[#000066]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
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
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
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
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
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
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
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
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
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
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="backdrop-blur-[10px] bg-white/5 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/90 hover:text-black transition-colors border border-[#F1F3F74D]"
                            >
                                Send message →
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="text-white">
                        <h2 className="text-4xl font-bold mb-6">
                            Let us know what <br /> you think!
                        </h2>
                        <p className="text-white mb-12 max-w-[400px]">
                            Got something on your mind? Share it with us! Drop a message, and we'll respond quickly to assist you
                        </p>

                        {/* Contact Links */}
                        <div className="space-y-0 max-w-[400px]">
                            {/* Email */}
                            <a
                                href="mailto:support@envobyte.com"
                                className="flex items-center gap-6 text-white py-6 border-b border-white/10 group"
                            >
                                <span className="w-14 h-14 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#e3e3e4] opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4580FF]/20 to-transparent"></div>
                                    <div className="absolute inset-0 border-2 border-[#4580FF]/40 rounded-lg"></div>
                                    <div className="absolute -inset-1 bg-[#f3f4f5] blur-lg opacity-20"></div>
                                    <img src={facebookIcon} alt="Email" className="relative z-10 w-full" />
                                </span>
                                <div className="flex-grow">
                                    <p className="text-[16px] text-white/60 font-medium">Business:</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[18px] font-semibold">support@envobyte.com</p>
                                        <BsBoxArrowUpRight size={14} className="text-[#4580FF]" />
                                    </div>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/16677772477"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 text-white py-6 border-b border-white/10 group"
                            >
                                <span className="w-14 h-14 border border-white/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#25D366] opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25D366]/20 to-transparent"></div>
                                    <div className="absolute inset-0 border-2 border-[#25D366]/40 rounded-lg"></div>
                                    <div className="absolute -inset-1 bg-[#25D366] blur-lg opacity-20"></div>
                                    <img src={whatsappIcon} alt="WhatsApp" className="relative z-10 w-6 h-6" />
                                </span>
                                <div className="flex-grow">
                                    <p className="text-[16px] text-white/60 font-medium">Whatsapp:</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[18px] font-semibold">+1 (667) 777 2477</p>
                                        <BsBoxArrowUpRight size={14} className="text-[#4580FF]" />
                                    </div>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/envobyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 text-white py-6 border-b border-white/10 group"
                            >
                                <span className="w-14 h-14 border border-white/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#0A66C2] opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A66C2]/20 to-transparent"></div>
                                    <div className="absolute inset-0 border-2 border-[#0A66C2]/40 rounded-lg"></div>
                                    <div className="absolute -inset-1 bg-[#0A66C2] blur-lg opacity-20"></div>
                                    <img src={linkedinIcon} alt="LinkedIn" className="relative z-10 w-6 h-6" />
                                </span>
                                <div className="flex-grow">
                                    <p className="text-[16px] text-white/60 font-medium">Linkiedin:</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[18px] font-semibold">www.linkedin.com/company/envobyte</p>
                                        <BsBoxArrowUpRight size={14} className="text-[#4580FF]" />
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