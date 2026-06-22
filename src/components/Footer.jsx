function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-stone-200 bg-stone-950 px-6 py-10 text-stone-300">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-lg font-semibold tracking-wide text-white">Dastaan</h2>
                    <p className="mt-2 text-sm text-stone-400">
                        Timeless clothing crafted with quiet elegance.
                    </p>
                </div>

                <div className="flex gap-5 text-sm">
                    <a href="#" className="transition hover:text-white">
                        Instagram
                    </a>
                    <a href="#" className="transition hover:text-white">
                        Facebook
                    </a>
                    <a href="#" className="transition hover:text-white">
                        Pinterest
                    </a>
                </div>
            </div>

            <p className="mx-auto mt-8 max-w-6xl text-sm text-stone-500">
                © {currentYear} Dastaan. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;