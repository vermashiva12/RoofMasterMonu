import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "wouter";
import Logo from "./Logo";
//import MainLogo from "../static/RoofMasters-2.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link> 

{/*              <img src={MainLogo}  alt="Logo" style={{width: '180px' , height: '150px'}} />
            <h2 className='text-3xl text-black '> Roof Masters</h2>
 */}
{/*             <MainLogo className="text-primary w-10 h-10" /> */}
            // <img src="../static/RoofMasters-2.svg" alt="Roof Masters Logo" className="text-primary w-10 h-10" />

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center text-primary">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:(555) 123-4567" className="hover:text-primary/80">
                (780) 729-4400
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="flex items-center text-primary mr-4">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:(555) 123-4567" className="hover:text-primary/80">
                (555) 123-4567
              </a>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
