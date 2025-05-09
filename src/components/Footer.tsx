import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ShoppingBag,
  Shield,
  Truck,
  Gift,
  Smartphone,
} from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              BrandName
            </h1>
            <p className="text-gray-400 text-sm">
              Revolutionizing your shopping experience with curated collections
              and seamless service.
            </p>
            <div className="flex space-x-4">
              <button className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all hover:-translate-y-1">
                <Smartphone className="w-6 h-6 text-teal-400" />
              </button>
              <button className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all hover:-translate-y-1">
                <Gift className="w-6 h-6 text-blue-400" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-teal-400 mb-4">
              Shop Categories
            </h3>
            <ul className="space-y-3">
              {[
                "Electronics",
                "Fashion",
                "Home & Kitchen",
                "Beauty",
                "Sports",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="flex items-center text-gray-300 hover:text-teal-400 transition-colors group"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2 text-gray-400 group-hover:text-teal-400 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {[
                "Contact Support",
                "Order Tracking",
                "FAQs",
                "Returns Policy",
                "Size Guide",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <Shield className="w-5 h-5 mr-2 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Apps */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-400">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-300 hover:text-teal-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 mr-2 text-gray-400 group-hover:text-teal-400 transition-colors" />
                  +1 (234) 567-890
                </a>
                <a
                  href="mailto:support@brand.com"
                  className="flex items-center text-gray-300 hover:text-teal-400 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 text-gray-400 group-hover:text-teal-400 transition-colors" />
                  support@brand.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">
                Mobile Apps
              </h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all group"
                >
                  <div className="flex items-center">
                    <span className="mr-3">📱</span>
                    <div>
                      <p className="text-sm text-gray-300 group-hover:text-white">
                        Get on
                      </p>
                      <p className="font-medium">Google Play</p>
                    </div>
                  </div>
                  <Truck className="w-5 h-5 text-blue-400" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all group"
                >
                  <div className="flex items-center">
                    <span className="mr-3">🍎</span>
                    <div>
                      <p className="text-sm text-gray-300 group-hover:text-white">
                        Download on
                      </p>
                      <p className="font-medium">App Store</p>
                    </div>
                  </div>
                  <Truck className="w-5 h-5 text-teal-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BrandName. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
