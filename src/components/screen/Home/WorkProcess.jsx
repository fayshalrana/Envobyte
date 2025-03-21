import { Link } from "react-router-dom";
import teamSilhouette from '../../../assets/images/how-we-work.webp';

const WorkProcess = () => {
    const processSteps = [
        {
            id: "01.",
            title: "Make An Appointment",
            position: "translate-y-12"
        },
        {
            id: "02.",
            title: "Meet Our Team",
            position: "translate-y-48"
        },
        {
            id: "03.",
            title: "Get Consultation",
            position: "translate-y-12"
        },
        {
            id: "04.",
            title: "Start Project",
            position: "translate-y-48"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${teamSilhouette})`,
                }}
            ></div>
            <div className="absolute inset-0 bg-[#001C6C] opacity-50"></div>
            {/* Vertical Text */}
            <div className="absolute right-[9rem] top-[30%] -translate-y-1/2 -rotate-90 origin-center z-10 flex justify-center items-center row-reverse gap-2">
                <span className="text-white/50 tracking-[0.2em] uppercase text-sm">
                    Project In Steps
                </span>
                <div className="h-[2px] w-[50px] bg-white mx-auto"></div>
            </div>

            <div className="container_fluid relative z-20">
                {/* Header */}
                <div className="text-center mb-2 max-w-2xl mx-auto">
                    <span className="text-white uppercase text-[20px] font-[600] mb-5 block">
                        HOW WE WORK
                    </span>
                    <h2 className="text-white text-[45px] font-[800] mb-5 leading-[50px]">
                        Our Process For Delivering Results
                    </h2>
                    <p className="text-white text-[14px] font-[400] leading-[20px]">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative mx-auto mb-[82px] h-[400px]">
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
                                    className="w-48 h-48 p-6 rounded-full flex flex-col items-start justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-lg relative"
                                    style={{
                                        background: 'linear-gradient(to bottom, #FF693B 0%, #001C6C 100%)'
                                    }}
                                >
                                    {step.id}
                                    <h3 className="text-white text-[20px] font-[800] text-left mt-[10px]">
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