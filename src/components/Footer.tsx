import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="container px-6 lg:px-12 py-16 md:py-24">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Wildcat" className="h-8 w-auto invert" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              Cultural Intelligence & Brand Building. We bring clarity to complex challenges.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/wildcatco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-amber hover:border-brand-amber transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/wildcat-digital-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-brand-amber hover:border-brand-amber transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/capabilities"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Capabilities
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/interventions"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Interventions
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/observations"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Observations
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/who-we-are"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Who We Are
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-6">
              What We Do
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-neutral-400">Market Intelligence & Opportunity</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">Positioning & Category Strategy</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">Messaging & Authority Systems</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">Demand & Growth Infrastructure</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-6">
              Connect
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@wildcatdigital.in"
                className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@wildcatdigital.in
              </a>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4" />
                Bangalore, India
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  (window as any).Calendly?.initPopupWidget({
                    url: "https://calendly.com/wildcatdigitalconsulting/30min",
                  });
                }}
                className="inline-flex items-center gap-3 bg-brand-amber text-black px-6 py-3 text-sm font-medium uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Wildcat. Cultural Intelligence & Brand Building.
            </p>
            <div className="flex gap-6 text-xs text-neutral-500">
              <span className="hover:text-neutral-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-neutral-400 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
