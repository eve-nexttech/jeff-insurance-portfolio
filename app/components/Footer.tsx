import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green/80 border-t border-primary-light/20 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-main.png"
                alt="Jeff Muthuri Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in securing a better financial future through
              smart insurance solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition">
                <span>💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary-light transition">Services</a></li>
              <li><a href="#insurance" className="text-gray-300 hover:text-primary-light transition">Insurance Plans</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary-light transition">About Me</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-light transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-light transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-light transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-light transition">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Jeff Muthuri. All rights reserved. | Licensed Insurance Broker</p>
        </div>
      </div>
    </footer>
  );
}
