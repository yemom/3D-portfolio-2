import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import TitleHeader from "../component/TitleHeader";
import ContactExperience from "./ContactExperience";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation
        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill in all required fields");
            setLoading(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            toast.error("Please enter a valid email address");
            setLoading(false);
            return;
        }

        const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || "service_1h9yo34";
        const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || "template_3zk488d";
        const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            subject: form.subject || "New Contact Message",
            message: form.message,
            to_name: "Esrom",
            to_email: "12yemom@gmail.com",
        };

        try {
            const sendPromise = PUBLIC_KEY
                ? emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                : emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

            await sendPromise;
            toast.success("Message sent successfully. We'll reply soon.");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("EmailJS send error:", error);
            const detail = error?.text || error?.message || "Unknown error";
            toast.error(`Failed to send message: ${detail}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <Toaster position="bottom-right" />
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in Touch – Let’s Connect"
                    sub="💬 Have questions or ideas? Let’s talk! 🚀"
                />
                <div className="grid-12-cols mt-16">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What’s your good name?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What’s your email address?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows="5"
                                        required
                                    />
                                </div>

                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending..." : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="xl:col-span-7 min-h-96">
                        <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;