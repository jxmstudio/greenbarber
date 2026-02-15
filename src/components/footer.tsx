import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/services/hedge-trimming", label: "Hedge Trimming" },
    { href: "/services/tree-pruning", label: "Tree Pruning & Reductions" },
    { href: "/services/tree-removal", label: "Tree Removal" },
    { href: "/services/stump-grinding", label: "Stump Grinding" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceAreas = [
    "Dodges Ferry",
    "Carlton Beach",
    "Eagle Hawk Neck",
    "Midway Point",
    "Sorrell",
    "Hobart",
    "Howrah",
    "West Hobart",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.jpg"
                alt="The Green Barber Logo"
                width={150}
                height={60}
                className="h-12 md:h-14 w-auto object-contain"
                suppressHydrationWarning
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Green Barber</h3>
            <p className="mb-4">
              Professional tree services throughout Southern Tasmania. Expert arborists serving
              Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart and surrounding areas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:0433804284" className="hover:text-primary transition-colors">
                  0433 804 284
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:thegreenbarbertas@gmail.com" className="hover:text-primary transition-colors">
                  thegreenbarbertas@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>70 Carlton Beach Rd, Dodges Ferry, TAS, Australia</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61573561687111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <Facebook className="h-4 w-4 mr-2 text-gray-300" />
                  <span className="text-gray-300">Follow us on Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/the_green_barber_tas/?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors !text-gray-300"
                  style={{ color: '#d1d5db' }}
                >
                  <Instagram className="h-4 w-4 mr-2" style={{ color: '#d1d5db' }} />
                  <span style={{ color: '#d1d5db' }}>Follow us on Instagram</span>
                </a>
                <a
                  href="https://share.google/NOEKTr9PjbX1xX0Vv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4 mr-2 text-gray-300" />
                  <span className="text-gray-300">Visit us on Google</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm">
                  {area}
                </li>
              ))}
              <li className="text-sm text-gray-400 mt-2">and surrounding suburbs</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} The Green Barber. All rights reserved. | Professional Tree
              Services in Southern Tasmania
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
