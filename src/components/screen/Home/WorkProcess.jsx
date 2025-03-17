import { Link } from "react-router-dom";

const WorkProcess = () => {
    const processSteps = [
        {
            id: "01.",
            title: "Make An Appointment",
            gradient: "from-[#FF6B4B] to-[#000033]",
            position: "translate-y-12"
        },
        {
            id: "02.",
            title: "Meet Our Team",
            gradient: "from-[#FF6B4B] to-[#000033]",
            position: "translate-y-48"
        },
        {
            id: "03.",
            title: "Get Consultation",
            gradient: "from-[#FF6B4B] to-[#000033]",
            position: "translate-y-12"
        },
        {
            id: "04.",
            title: "Start Project",
            gradient: "from-[#FF6B4B] to-[#000033]",
            position: "translate-y-48"
        }
    ];

    return (
        <section className="py-24 bg-[#000033] relative overflow-hidden">
            {/* Vertical Text */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                <span className="text-white/50 tracking-[0.2em] uppercase text-sm">
                    Project In Steps
                </span>
            </div>

            <div className="container_fluid">
                {/* Header */}
                <div className="text-center mb-32 max-w-2xl mx-auto">
                    <span className="text-[#FF6B4B] uppercase text-sm font-medium mb-4 block">
                        HOW WE WORK
                    </span>
                    <h2 className="text-white text-4xl font-bold mb-6">
                        Our Process For Delivering Results
                    </h2>
                    <p className="text-white/70">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative max-w-5xl mx-auto mb-32 h-[400px]">
                    {/* Curved Connecting Lines */}
                    <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 1000 400">
                        {/* Background dashed line */}
                        <path
                            d="M100,130 C230,130 230,240 400,270 S550,100 650,100 S800,200 900,250"
                            fill="none"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        <style>
                            {`
                                .wavy-line {
                                    stroke-dasharray: 2000;
                                    stroke-dashoffset: 2000;
                                    animation: drawLine 3s ease-out forwards;
                                }
                                @keyframes drawLine {
                                    to {
                                        stroke-dashoffset: 0;
                                    }
                                }
                            `}
                        </style>
                    </svg>

                    {/* Steps */}
                    <div className="flex justify-between items-start relative z-10 h-full px-12">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`text-center ${step.position} transition-transform duration-500`}
                            >
                                <div
                                    className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-lg relative`}
                                    style={{
                                        background: 'linear-gradient(135deg, #FF6B4B 0%, #8B1E1E 100%)'
                                    }}
                                >
                                    {step.id}
                                </div>
                                <h3 className="text-white text-lg font-medium whitespace-nowrap mt-4">
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Button */}
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-[#FF6B4B] text-white px-8 py-3 rounded hover:bg-[#ff5a37] transition-colors"
                    >
                        Contact Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess; 