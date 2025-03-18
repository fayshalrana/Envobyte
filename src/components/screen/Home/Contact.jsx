import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

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
        <section className="py-24 bg-[#000066]">
            <div className="container_fluid">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Contact Form */}
                    <div className="bg-[#000066]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="text-white/60 text-sm mb-2 block">
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
                                    <label className="text-white/60 text-sm mb-2 block">
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
                                    <label className="text-white/60 text-sm mb-2 block">
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
                                    <label className="text-white/60 text-sm mb-2 block">
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
                                <label className="text-white/60 text-sm mb-2 block">
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
                                className="bg-white text-[#000066] px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
                            >
                                Send message →
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="text-white">
                        <h2 className="text-4xl font-bold mb-6">
                            Let us know what you think!
                        </h2>
                        <p className="text-white/70 mb-12">
                            Got something on your mind? Share it with us! Drop a message, and we'll respond quickly to assist you
                        </p>

                        {/* Contact Links */}
                        <div className="space-y-6">
                            {/* Email */}
                            <a
                                href="mailto:support@envobyte.com"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <span className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <HiOutlineMail size={24} />
                                </span>
                                <div>
                                    <p className="text-sm text-white/50">Business:</p>
                                    <p>support@envobyte.com</p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/16677772477"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <span className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <BsWhatsapp size={24} />
                                </span>
                                <div>
                                    <p className="text-sm text-white/50">WhatsApp:</p>
                                    <p>+1 (667) 777 2477</p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/envobyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <span className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <BsLinkedin size={24} />
                                </span>
                                <div>
                                    <p className="text-sm text-white/50">LinkedIn:</p>
                                    <p>www.linkedin.com/company/envobyte</p>
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