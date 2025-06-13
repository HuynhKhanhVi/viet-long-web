"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/gioi-thieu", label: "Giới thiệu" },
    { href: "/dong-san-pham", label: "Dòng sản phẩm" },
    { href: "/quy-trinh-dat-may", label: "Quy trình đặt may" },
    { href: "/bao-gia", label: "Báo giá" },
    // { href: "/tin-tuc", label: "Tin tức" },
    { href: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <>
      <div className="bg-zinc-800 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>CÔNG TY TNHH TM DV SX XNK VIỆT LONG</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>0987 788 352</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>Vietlongmaymac@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  layout="fill"
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-zinc-800">
                  VIỆT LONG MAY MẶC
                </div>
                <div className="text-sm text-zinc-600">
                  Design & Manufacture
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-700 hover:text-green-500 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-zinc-700" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-700" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 hover:text-teal-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-2 border-t mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-zinc-600">
                    <Phone className="w-4 h-4" />
                    <span>0868 900 187</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-zinc-600">
                    <Mail className="w-4 h-4" />
                    <span>contact@xuongmay.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
