import { Coffee, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-coffee-800 border-t border-white/5 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-accent-gold" />
          <span className="font-serif text-xl font-bold tracking-wider text-accent-cream">
            AURA
          </span>
        </div>

        <div className="flex gap-8 text-sm text-accent-cream/60 tracking-widest">
          <a href="#" className="hover:text-accent-gold transition-colors">
            PRIVACY
          </a>
          <a href="#" className="hover:text-accent-gold transition-colors">
            TERMS
          </a>
          <a href="#" className="hover:text-accent-gold transition-colors">
            CONTACT
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-all"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-all"
          >
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center text-xs text-accent-cream/40">
        &copy; {new Date().getFullYear()} Aura Roasters. All rights reserved.
      </div>
    </footer>
  );
}
