import React from 'react';
import logo from './assets/logo.png'

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-blue-700 to-red-600 py-24">
      <div className="flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
        {/* Lingkaran Logo */}
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg overflow-hidden">
          <img
            src={logo} // Ganti path ini sesuai lokasi gambar
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Teks */}
        <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wide">
          <span className="font-semibold text-yellow-300">Veltron</span> adalah brand terpercaya
          yang menghadirkan beragam produk elektronik inovatif untuk mendukung gaya hidup modern.
          Dengan mengutamakan kualitas, desain stylish, dan teknologi terkini,
          <span className="font-semibold text-yellow-300"> Veltron</span> berkomitmen menjadi
          solusi pintar yang memudahkan aktivitas Anda setiap hari.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
