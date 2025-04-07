"use client";
import {
  Bell,
  BookOpen,
  Gamepad,
  Home,
  Lightbulb,
  Menu,
  Search,
 
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from '@/public/assets/Logo.svg'; 

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gradient-to-r from-white to-blue-50 shadow-md`}
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative group">
          <Image
            src={Logo}
              alt="/Logo"
              width={0}  
              height={0} 
              className="object-contain w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="items-center hidden md:flex">
            <h1 className="font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
              WorkPlay
            </h1>
            <div className="mx-2 h-6 w-px bg-gray-300"></div>
            <h1 className="font-bold text-gray-700 hover:text-primary transition-colors duration-300">
              LevelUp
            </h1>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md group">
            <input
              type="text"
              placeholder="ค้นหาทักษะ คอร์ส หรือเนื้อหา..."
              className="w-full px-4 py-2 border rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-primary transition-colors duration-300"
            />
          </div>
        </div>

       
        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <div className="relative group">
            <Link href="/" className="nav">
              <Home size={16} />
              <span className="">หน้าหลัก</span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/" className="nav">
              <BookOpen size={16} />
              <span className="">คอร์สเรียน</span>
            </Link>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full hidden group-hover:block"></div>
          </div>
          <div className="relative group">
            <Link href="#" className="nav">
              <Lightbulb size={16} />
              <span className="">ทักษะอาชีพ</span>
            </Link>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full hidden group-hover:block"></div>
          </div>

          <Link
            href="/auth/sign-in"
            className="px-4 py-2 font-bold rounded-md border hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
          >
            เข้าสู่ระบบ
          </Link>
          <Link
            href="#"
            className="px-4 py-2 font-bold rounded-md border bg-gradient-to-r from-green-500 to-green-400 text-white hover:from-green-600 hover:to-green-500 flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <Gamepad color="white" size={18} />
            <span>ทำแบบทดสอบ</span>
          </Link>
        </div>

      
        <div className="md:hidden flex items-center gap-3">
          <div className="relative"></div>
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

    
    </div>
  );
};

export default Navbar;
