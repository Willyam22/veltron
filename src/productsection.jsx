import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Endoscope",
    price: 49.99,
    shortDesc: "Deskripsi singkat produk pertama.",
    longDesc:
      "Endoscope ini dilengkapi kamera HD, tahan air, dan dapat digunakan untuk inspeksi area yang sulit dijangkau.",
    specs: ["Kamera HD 1080p", "Tahan air IP67", "Panjang kabel 5 meter"],
  },
  {
    id: 2,
    name: "Earphone Bluetooth",
    price: 49.99,
    shortDesc: "Deskripsi singkat produk kedua.",
    longDesc:
      "Earphone Bluetooth dengan kualitas suara jernih, baterai tahan lama, dan desain ergonomis.",
    specs: ["Bluetooth 5.0", "Baterai hingga 20 jam", "Noise cancellation"],
  },
  {
    id: 3,
    name: "Wireless Charger",
    price: 49.99,
    shortDesc: "Deskripsi singkat produk ketiga.",
    longDesc:
      "Wireless Charger cepat dengan output daya tinggi, kompatibel dengan berbagai perangkat, dan desain minimalis.",
    specs: ["Output hingga 15W", "Fast charging", "Desain tipis & ringan"],
  },
  {
    id: 4,
    name: "Power Adaptor",
    price: 19.99,
    shortDesc: "Adaptor daya berkualitas tinggi.",
    longDesc:
      "Adaptor daya universal dengan output stabil, aman digunakan untuk berbagai perangkat elektronik.",
    specs: ["Output 5V/2A", "Perlindungan arus lebih", "Ringkas & ringan"],
  },
];

function ProductSection() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Card yang dipilih pindah ke atas
  const sortedProducts = [...products].sort((a, b) =>
    a.id === expandedCard ? -1 : b.id === expandedCard ? 1 : 0
  );

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Produk Kami
        </h2>

        <motion.div
          layout
          className="flex flex-wrap justify-center gap-8"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {sortedProducts.map((product) => {
              const isExpanded = expandedCard === product.id;
              return (
                <motion.div
                  key={product.id}
                  layout
                  layoutId={`card-${product.id}`}
                  onClick={() => toggleExpand(product.id)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    width: isExpanded ? "80%" : "300px",
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    layout: { type: "spring", stiffness: 300, damping: 30 },
                    duration: 0.4,
                  }}
                  className="bg-gray-100 rounded-2xl shadow-md cursor-pointer overflow-hidden hover:shadow-xl"
                  style={{
                    padding: isExpanded ? "2rem" : "1.5rem",
                  }}
                >
                  {/* Lingkaran / Gambar */}
                  <div className="w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center text-center text-blue-800 font-semibold text-lg mx-auto mb-4">
                    {product.name}
                  </div>

                  {/* Nama Produk */}
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent tracking-wide text-center">
                    {product.name}
                  </h2>

                  {/* Harga */}
                  <p className="text-green-600 font-semibold mb-2 text-lg text-center">
                    <span className="text-base align-top">$</span>
                    {product.price}
                  </p>

                  {/* Deskripsi Singkat */}
                  <p className="text-gray-600 text-sm text-center">
                    {product.shortDesc}
                  </p>

                  {/* Konten tambahan */}
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      height: isExpanded ? "auto" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 text-sm mt-4 mb-3">
                      {product.longDesc}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      {product.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductSection;
