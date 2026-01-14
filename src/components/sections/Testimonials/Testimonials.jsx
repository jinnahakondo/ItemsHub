"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Title from "@/components/Title/Title";

const testimonials = [
    {
        id: 1,
        name: "Marcus Chen",
        role: "Professional Photographer",
        review:
            "Found a high-quality camera at half the retail price. The verification process gave me peace of mind.",
        avatar: "/images/user1.png",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Digital Creator",
        review:
            "Selling my old gear was effortless. The integrated shipping label saved me so much time.",
        avatar: "/images/user2.png",
    },
    {
        id: 3,
        name: "David Rivera",
        role: "Tech Enthusiast",
        review:
            "The best interface I've used for a marketplace. Clean, fast, and very reliable.",
        avatar: "/images/user3.png",
    },
    {
        id: 4,
        name: "David Rivera",
        role: "Tech Enthusiast",
        review:
            "The best interface I've used for a marketplace. Clean, fast, and very reliable.",
        avatar: "/images/user3.png",
    },
    {
        id: 5,
        name: "David Rivera",
        role: "Tech Enthusiast",
        review:
            "The best interface I've used for a marketplace. Clean, fast, and very reliable.",
        avatar: "/images/user3.png",
    },
    {
        id: 6,
        name: "David Rivera",
        role: "Tech Enthusiast",
        review:
            "The best interface I've used for a marketplace. Clean, fast, and very reliable.",
        avatar: "/images/user3.png",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16">
            {/* Heading */}
            <Title style={'text-center pb-12 '}>
                Trusted by Thousands
            </Title>

            {/* Swiper */}
            <Swiper
                modules={[Autoplay,]}
                autoplay={{ delay: 3500 }}
                spaceBetween={24}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="card bg-base-100 border border-base-200 rounded-2xl p-8 h-full">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-warning text-lg">★</span>
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-base-content/80 italic mb-8 leading-relaxed">
                                “{item.review}”
                            </p>

                            {/* User */}
                            <div className="flex items-center gap-4 mt-auto">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold text-base-content">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-base-content/60">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
