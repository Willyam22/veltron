function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Alamat</h3>
          <p className="text-sm">
            Jl. Contoh Raya No.123<br />
            Jakarta, Indonesia<br />
            12345
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Kontak</h3>
          <p className="text-sm">
            Telepon: +62 812-3456-7890<br />
            Email: info@contohperusahaan.com
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © 2025 Contoh Perusahaan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
