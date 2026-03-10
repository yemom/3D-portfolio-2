import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcasesSection = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const chatAppRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, chatAppRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="project first-project-wrapper" ref={chatAppRef}>
                        <div className="image-wrapper bg-[#E0F7FA]">
                            <a href="https://github.com/yemom/flutter_real_time_chat_app" className="block w-full h-full cursor-pointer">
                                <div className="flex justify-center items-center gap-2 md:gap-4 h-full w-full p-2 md:p-6">
                                    <img
                                        style={{ width: "30%" }}
                                        src="/images/Project-1.png"
                                        alt="Real Time Chat App Interface"
                                        className="object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
                                    />
                                    <img
                                        style={{ width: "30%" }}
                                        src="images/Project-1.1.png"
                                        alt="Real Time Chat App Interface"
                                        className="object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
                                    />
                                    <img
                                        style={{ width: "30%" }}
                                        src="/images/Project-1.2.png"
                                        alt="Real Time Chat App Interface"
                                        className="object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
                                    />
                                </div>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Real Time Chat App</h2>
                            <h4>Real‑Time Chat App is a fully functional mobile chat application developed using Flutter and Firebase. The app leverages Firebase Authentication for secure user sign‑in/sign‑up, Cloud Firestore for real‑time message synchronization, and intuitive UI screens that deliver smooth user experiences on both Android and iOS devices.</h4>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <a href="https://github.com/yemom/fre-selama-mezmur-debter" className="block w-full h-full cursor-pointer">
                                    <div className="flex justify-center items-center gap-2 md:gap-4 h-full w-full p-2 md:p-6">
                                        <img
                                            style={{ width: "30%" }}
                                            src="/images/Project-4.png"
                                            alt="Fre Selama Mezmur Debter Interface"
                                            className="object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
                                        />
                                        <img
                                            style={{ width: "30%" }}
                                            src="/images/Project-4.1.png"
                                            alt="Fre Selama Mezmur Debter Interface"
                                            className="object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
                                        />
                                        <img
                                            style={{ width: "30%" }}
                                            src="/images/Project_4.2.png"
                                            alt="Fre Selama Mezmur Debter Interface"
                                            className="object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="text-content">
                                <h2>Fre Selama Mezmur Debter</h2>
                                <h4>Fre Selama Mezmur Debter is a mobile application designed to provide Ethiopian Christian worship songs and mezmur lyrics in a digital format. The application allows users to easily browse, search, and read mezmur lyrics from a structured collection of Ethiopian spiritual songs.</h4>
                            </div>
                        </div>



                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <a href="https://github.com/yemom/show-case-architects">
                                    <img src="/images/Project-3.png" alt="Showcase Architects Interface" />
                                </a>
                            </div>
                            <div className="text-content">
                                <h2>Showcase Architects</h2>
                                <h4>Show-Case Architects is a responsive web application that presents architectural designs and creative projects through a clean portfolio-style interface. The project demonstrates modern frontend development, responsive UI design, and structured project organization using GitHub.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcasesSection;