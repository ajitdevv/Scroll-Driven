
export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="max-w-6xl mx-auto px-6 py-10 items-center justify-center flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-8">
                <div  className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold">Ajeet Bairwa</h2>
                    <p className="text-sm text-muted mt-2">
                        A modern Landing Page.
                    </p>
                </div>

                {/* Quick Links */}
                <div  className="flex flex-col items-center md:items-start">
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-muted flex flex-col items-center md:items-start">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-semibold mb-3">About</h3>
                    <p className="text-sm text-muted">
                        Built using React.js ,Tailwind CSS,Lucide-React and GSAP.
                    </p>
                </div>

            </div>

            <div className="text-center text-sm text-muted border-t py-4">
                © {new Date().getFullYear()} Ajeet Bairwa. All rights reserved.
            </div>
        </footer>
    )
}