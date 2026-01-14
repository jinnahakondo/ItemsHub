import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Title from "@/components/Title/Title";

const ReadyToStart = () => {
    return (
        <section className="container mx-auto px-4 ">
            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-content px-6 py-14 md:px-16 md:py-20 text-center">

                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>

                {/* Content */}
                <Title>
                    Ready to start browsing?
                </Title>

                <p className="max-w-2xl mx-auto text-base md:text-lg text-primary-content/80 mb-8">
                    Join 50,000+ users trading daily on the most secure local item
                    platform.
                </p>

                <PrimaryButton style={'bg-white text-primary hover:bg-white/90 px-8 text-base font-semibold'}>
                    Create Free Account
                </PrimaryButton>
            </div>
        </section>
    );
};

export default ReadyToStart;
