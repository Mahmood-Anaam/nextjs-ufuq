import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#4F8359] text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">أفق</span>
            </Link>
            <p className="text-sm mt-2 text-center md:text-left">
              منصة تعليمية للأطفال تهدف إلى تعزيز اللغة العربية والتعرف على الشخصيات التاريخية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:items-start">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <Link href="/" className="hover:underline">
              الرئيسية
            </Link>
            <Link href="/about" className="hover:underline">
              من نحن
            </Link>
            <Link href="/contact" className="hover:underline">
              اتصل بنا
            </Link>
            <Link href="/privacy" className="hover:underline">
              سياسة الخصوصية
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:items-start">
            <h4 className="text-lg font-semibold">تابعنا على</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 hover:text-blue-600"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.13h3.128V8.41c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.098 2.797.143v3.24h-1.919c-1.507 0-1.8.716-1.8 1.763v2.31h3.6l-.468 3.577h-3.132V24h6.139c.73 0 1.324-.594 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
                </svg>
              </Link>
              <Link href="https://www.twitter.com" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 hover:text-blue-400"
                >
                  <path d="M24 4.557a9.823 9.823 0 01-2.828.775 4.937 4.937 0 002.165-2.723c-.951.564-2.005.973-3.127 1.194a4.92 4.92 0 00-8.384 4.482c-4.087-.205-7.715-2.164-10.143-5.144A4.822 4.822 0 00.964 7.549a4.935 4.935 0 002.188-.605 4.912 4.912 0 003.921 4.816A4.902 4.902 0 012 12.89v.062a4.919 4.919 0 003.946 4.827 4.997 4.997 0 01-2.212.084 4.923 4.923 0 004.604 3.42A9.87 9.87 0 010 21.54a13.937 13.937 0 007.548 2.213c9.055 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 hover:text-pink-600"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608C4.517 2.496 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.02 7.052.074c-1.393.056-2.64.332-3.725 1.416C2.246 2.555 1.97 3.802 1.914 5.196.86 5.304.84 5.714.84 12s.02 6.696.074 7.976c.056 1.394.332 2.641 1.416 3.725 1.084 1.084 2.331 1.36 3.725 1.416C8.332 23.98 8.741 24 12 24s3.668-.02 4.948-.074c1.394-.056 2.641-.332 3.725-1.416 1.084-1.084 1.36-2.331 1.416-3.725.054-1.28.074-1.69.074-7.976s-.02-6.696-.074-7.976c-.056-1.394-.332-2.641-1.416-3.725C19.589.406 18.342.13 16.948.074 15.668.02 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.142a3.98 3.98 0 110-7.96 3.98 3.98 0 010 7.96zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs md:text-sm">
          © {new Date().getFullYear()} أفق. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
