import Link from "next/link";
import { Mail, Share2, Globe } from "lucide-react";
import Logo from "@/components/Logo/Logo";

const Footer = () => {
    return (
        <footer className="bg-base-100 border-t border-base-200">
            <div className="container mx-auto px-4 py-16">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href={'/'} className="mb-4">
                            <Logo />
                        </Link>
                        <p className="text-base-content/70 max-w-sm mb-6">
                            The modern way to buy and sell items locally. Fast, secure, and
                            beautiful.
                        </p>

                        <div className="flex gap-4 text-base-content/60">
                            <Globe className="w-5 h-5 hover:text-primary cursor-pointer" />
                            <Share2 className="w-5 h-5 hover:text-primary cursor-pointer" />
                            <Mail className="w-5 h-5 hover:text-primary cursor-pointer" />
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <ul className="space-y-3 text-base-content/70">
                            <li><Link href="#">Featured Items</Link></li>
                            <li><Link href="#">New Listings</Link></li>
                            <li><Link href="#">Categories</Link></li>
                            <li><Link href="#">Popular Areas</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-base-content/70">
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Press Kit</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3 text-base-content/70">
                            <li><Link href="#">Safety Center</Link></li>
                            <li><Link href="#">Buyer Protection</Link></li>
                            <li><Link href="#">Seller Terms</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-base-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-base-content/60">
                    <p>© 2024 ItemPlatform Inc. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link href="#">Terms</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
