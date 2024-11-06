import React, { useEffect, useState } from "react";
import defaultImage from "../assets/berita1.jpg"; // Gambar default jika gambar tidak ada

const BeritaDesa = () => {
  const [news, setNews] = useState([]);

  // Fungsi untuk mengambil data berita dari API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api-kawal-desa.lskk.co.id/api/report/village?guid=e3dbc848-facd-4ce2-9c77-ad18258f9a7d&page=1&limit=10&type=news" // Sesuaikan dengan URL API
        );
        const result = await response.json();

        if (result.status) {
          setNews(result.data); // Menyimpan data berita jika API berhasil
        }
      } catch (error) {
        console.error("Gagal mengambil data berita:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-12 bg-gray-100 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Berita Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={`https://api-kawal-desa.lskk.co.id/${item.file}`} // URL gambar yang benar
                alt={item.description} // Menggunakan deskripsi sebagai alt teks
                onError={(e) => (e.target.src = defaultImage)} // Gambar default jika gagal load
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{item.description}</h3> {/* Menampilkan deskripsi sebagai judul */}
                <p className="text-gray-600 mb-4">
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)}...` // Memotong deskripsi jika terlalu panjang
                    : item.description}
                </p>
                <p className="text-gray-500 text-sm">Tanggal: {item.reportDateTime.date}</p> {/* Menggunakan tanggal yang benar */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeritaDesa;
