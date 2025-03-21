import { Link } from "react-router-dom";
import teamSilhouette from '../../../assets/images/how-we-work.webp';

const WorkProcess = () => {
    const processSteps = [
        {
            id: "01.",
            title: "Make An Appointment",
            position: "sm:translate-y-12"
        },
        {
            id: "02.",
            title: "Meet Our Team",
            position: "sm:translate-y-48"
        },
        {
            id: "03.",
            title: "Get Consultation",
            position: "sm:translate-y-12"
        },
        {
            id: "04.",
            title: "Start Project",
            position: "sm:translate-y-48"
        }
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${teamSilhouette})`,
                }}
            ></div>
            <div className="absolute inset-0 bg-[#001C6C] opacity-50"></div>

            {/* Vertical Text - Hidden on mobile */}
            <div className="hidden lg:flex absolute right-[9rem] top-[30%] -translate-y-1/2 -rotate-90 origin-center z-10 justify-center items-center flex-row-reverse gap-2">
                <span className="text-white/50 tracking-[0.2em] uppercase text-sm">
                    Project In Steps
                </span>
                <div className="h-[2px] w-[50px] bg-white mx-auto"></div>
            </div>

            <div className="container_fluid relative z-20 px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
                    <span className="text-white uppercase text-base sm:text-lg lg:text-[20px] font-semibold mb-3 sm:mb-4 lg:mb-5 block">
                        HOW WE WORK
                    </span>
                    <h2 className="text-white text-2xl sm:text-3xl lg:text-[45px] font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight sm:leading-snug lg:leading-[50px]">
                        Our Process For Delivering Results
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base lg:text-[14px] font-normal leading-relaxed px-4">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative mx-auto mb-8 sm:mb-12 lg:mb-[82px]">
                    {/* Curved Connecting Lines - Hidden on mobile */}
                    <div className="hidden sm:block">
                        <svg className="absolute top-0 left-0 w-full h-[400px] z-0" viewBox="0 0 1000 400">
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
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start relative z-10 sm:h-[400px] gap-8 sm:gap-4 px-0 sm:px-12">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`text-center ${step.position} transition-transform duration-500 w-full sm:w-auto`}
                            >
                                <div
                                    className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 p-4 sm:p-5 lg:p-6 rounded-full flex flex-col items-start justify-center text-xl sm:text-2xl font-bold mb-4 mx-auto shadow-lg relative"
                                    style={{
                                        background: 'linear-gradient(to bottom, #FF693B 0%, #001C6C 100%)'
                                    }}
                                >
                                    <h3 className="text-white text-base sm:text-lg lg:text-[20px] font-bold text-left">{step.id}</h3>
                                    <h3 className="text-white text-base sm:text-lg lg:text-[20px] font-bold text-left mt-2 sm:mt-[10px]">
                                        {step.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Button */}
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-[#FF6B4B] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-[#ff5a37] transition-colors text-sm sm:text-base font-medium"
                    >
                        Contact Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess; 