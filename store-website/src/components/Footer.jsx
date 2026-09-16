import { AtSign, Camera, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:pr-8">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg">
                📚
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                BookNest
              </h2>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              A place for readers to discover stories,
              ideas, and books worth remembering.
            </p>

            <div className="mt-6 flex gap-2">
              <button className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition hover:bg-slate-900 hover:text-white">
                <AtSign size={17} />
              </button>

              <button className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition hover:bg-slate-900 hover:text-white">
                <Camera size={17} />
              </button>

              <button className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition hover:bg-slate-900 hover:text-white">
                <MessageCircle size={17} />
              </button>
            </div>

          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Shop
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <a href="#books" className="block hover:text-slate-900">
                All Books
              </a>

              <a href="#categories" className="block hover:text-slate-900">
                Categories
              </a>

              <a href="#" className="block hover:text-slate-900">
                Best Sellers
              </a>

              <a href="#" className="block hover:text-slate-900">
                New Arrivals
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-slate-900">
                About Us
              </a>

              <a href="#" className="block hover:text-slate-900">
                Contact
              </a>

              <a href="#" className="block hover:text-slate-900">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-slate-900">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-500">

              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+94 77 123 4567</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="shrink-0" />
                <span>hello@booknest.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 BookNest. All rights reserved.
          </p>

          <p>
            Made with ❤️ for book lovers.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

