import React from "react";

const ProfileSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-xl font-semibold mx-auto mb-4">
              CEO
            </div>
            <h3 className="text-xl font-bold">Jonathan Armand</h3>
            <p className="text-gray-600 text-sm mb-2">Chief Executive Officer</p>
            <p className="text-gray-500 text-sm">Memimpin strategi dan visi perusahaan secara keseluruhan.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-xl font-semibold mx-auto mb-4">
              CTO
            </div>
            <h3 className="text-xl font-bold">Amelia Putri</h3>
            <p className="text-gray-600 text-sm mb-2">Chief Technology Officer</p>
            <p className="text-gray-500 text-sm">Bertanggung jawab atas arah teknologi dan pengembangan produk.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-xl font-semibold mx-auto mb-4">
              COO
            </div>
            <h3 className="text-xl font-bold">Rizky Hidayat</h3>
            <p className="text-gray-600 text-sm mb-2">Chief Operating Officer</p>
            <p className="text-gray-500 text-sm">Mengelola operasional harian perusahaan dengan efisien.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
