import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcasesSection = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

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
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <a href="https://github.com/yemom/AAiT_School_project_mobileapp_exam_app">

                                <img src="/images/project1.jpg" alt="Exam App Interface" />
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>
                                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                                called Exam App
                            </h2>
                            <h4>
                                A mobile-based exam application built using Flutter, designed for academic use at AAiT. This project simulates real exam experiences with clean UI, timed quizzes, and question handling – ideal for student assessments and testing systems.
                            </h4>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <a href="https://github.com/yemom/mobile_user_page">

                                    <img
                                        src="/images/project2.jpg"
                                        alt="NeuroParent App Interface"
                                    />
                                </a>
                            </div>
                            <h2>The NeuroParent Mobile App</h2>
                            <h4>Flutter application that connects parents with mental health professionals, offering parenting tips, event listings, and community features. Built with Flutter and Dart, it provides a seamless user experience across platforms.</h4>

                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <a href="https://github.com/yemom/Blog-Web-App">

                                    <img src="/images/project3.jpg" alt="Blog Web App Interface" />
                                </a>
                            </div>
                            <h2>Blog Web App</h2>
                            <h4>A full-stack blog application built with Node.js, Express.js, MongoDB, and EJS templating engine. This project allows users to 🛠️ create, 📖 read, and 🗑️ manage blog posts in a clean, responsive web interface.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcasesSection;