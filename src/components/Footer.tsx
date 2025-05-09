import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="container mx-auto space-y-8">
        {/* Brand Name */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Brand Name
          </h1>
        </div>

        {/* Three Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Contact & Apps */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/+1234567890"
                  className="flex items-center justify-center md:justify-start space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faFaceFrownOpen}
                    size="sm"
                    className="h-8 w-8"
                  />
                  <span>+1234567890 (WhatsApp)</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center md:justify-start space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size="lg"
                    className="h-8 w-8"
                  />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                Get Our App
              </h3>
              <div className="flex flex-col space-y-3 items-center md:items-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.brandname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full transition-all hover:scale-105 w-fit"
                >
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    size="lg"
                    className="h-8"
                  />
                  <span>Google Play</span>
                </a>
                <a
                  href="https://apps.apple.com/us/app/brandname/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105 w-fit"
                >
                  <FontAwesomeIcon
                    icon={faAppStore}
                    size="lg"
                    className="h-8"
                  />
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Categories */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-teal-400 mb-4">
              Popular Categories
            </h3>
            <ul className="space-y-3">
              {[
                "Electronics",
                "Fashion",
                "Home & Kitchen",
                "Sports",
                "Beauty",
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Customer Service */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-teal-400 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "Help Center",
                "Shipping & Returns",
                "Privacy Policy",
                "Terms of Service",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider and All Rights Reserved */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Brand Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
