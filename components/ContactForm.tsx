"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdSend } from "react-icons/md";
import { FaUser, FaEnvelope, FaMessage } from "react-icons/fa6";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-[1500px] relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-10 h-[2px] bg-primary"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Get in touch</span>
                        <div className="w-10 h-[2px] bg-primary"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-center"
                    >
                        Ready to <span className="text-primary italic">Collaborate?</span>
                    </motion.h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass p-8 md:p-12 rounded-[2.5rem] border border-foreground/5 shadow-2xl relative overflow-hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                                            <FaUser />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                                            <FaEnvelope />
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Message</label>
                                <div className="relative group">
                                    <div className="absolute left-5 top-6 text-muted-foreground group-focus-within:text-primary transition-colors">
                                        <FaMessage />
                                    </div>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-foreground/5 border border-foreground/10 rounded-3xl py-6 pl-14 pr-6 text-sm font-bold focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full relative group overflow-hidden bg-primary py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm text-white shadow-[0_0_30px_rgba(255,0,72,0.3)] hover:shadow-[0_0_50px_rgba(255,0,72,0.5)] transition-all duration-500 disabled:opacity-50"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {status === "loading" ? "Sending..." : (
                                        <>
                                            Send Message <MdSend size={18} />
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>

                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-green-500 font-bold text-sm"
                                >
                                    Fariintaada waa la diray. Mahadsanid!
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-red-500 font-bold text-sm"
                                >
                                    Wali qalad ayaa jira. Fadlan mar kale isku day.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
