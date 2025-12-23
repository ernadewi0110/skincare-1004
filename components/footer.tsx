import Link from "next/link";

function IconInstagram(props: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={props.className}>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
    );
}

function IconX(props: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={props.className}>
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconFacebook(props: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className={props.className}>
            <path d="M15 8h2.5V4.5H15c-2.2 0-3.5 1.3-3.5 3.5V12H9v3h2.5v7H15v-7h2.1l.4-3H15V8z" fill="currentColor" />
        </svg>
    );
}

export function Footer() {
    return (
        <footer className="bg-linear-to-tr from-muted/80 to-muted/60 text-muted-foreground border-t border-border">
            <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/">
                            <span className="text-2xl font-semibold tracking-tight">Madagascar Skin</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-3 max-w-xs">Sourced from Madagascar's pristine ecosystems — gentle, potent, sustainably harvested skincare.</p>
                        <div className="mt-4 flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
                            <span className="text-sm text-muted-foreground">Madagascar Skin</span>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div>
                            <h4 className="text-sm font-medium mb-3">Shop</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/shop" className="hover:text-foreground">All Products</Link></li>
                                <li><Link href="/shop" className="hover:text-foreground">Bestsellers</Link></li>
                                <li><Link href="/ingredients" className="hover:text-foreground">Ingredients</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#our-story" className="hover:text-foreground">Our Story</Link></li>
                                <li><Link href="#skin-iq" className="hover:text-foreground">Skin IQ</Link></li>
                                <li><Link href="/cart" className="hover:text-foreground">Cart</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-md bg-card/10 dark:bg-card/20 flex items-center justify-center hover:opacity-90 transition">
                                <IconInstagram className="w-5 h-5 text-foreground" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-9 h-9 rounded-md bg-card/10 dark:bg-card/20 flex items-center justify-center hover:opacity-90 transition">
                                <IconX className="w-5 h-5 text-foreground" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-md bg-card/10 dark:bg-card/20 flex items-center justify-center hover:opacity-90 transition">
                                <IconFacebook className="w-5 h-5 text-foreground" />
                            </a>
                        </div>

                        <p className="text-xs text-muted-foreground mt-6">Free shipping on orders over $50 • Returns within 30 days</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
