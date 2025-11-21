export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-gray-900">
      <div className="container-padding">
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact Us
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
        </div>

        <p className="text-center text-xs text-gray-500 mb-4">
          "Lifetime access" applies only to program content and excludes
          support, mentorship, and private communities.
        </p>

        <p className="text-center text-sm text-gray-600">
          ©2025 Educate.io. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
