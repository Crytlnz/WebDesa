import React, { useEffect, useState } from "react";
import defaultAparat from "../assets/businessman.png";

const AparatDesa = () => {
  const [apparatuses, setApparatuses] = useState([]);
  const [visible, setVisible] = useState(false);

  // Fungsi untuk mengambil data dari API
  useEffect(() => {
    const fetchAparatData = async () => {
      try {
        const response = await fetch(
          "https://api-kawal-desa.lskk.co.id/api/village/profile?guid=2305e536-0ef6-48e7-9aac-79ca236433fa"
        );
        const result = await response.json();

        // Menyimpan data organisasi jika status API berhasil
        if (result.status) {
          setApparatuses(result.vaillage.organizationalStructure);
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchAparatData();

    const onScroll = () => {
      const section = document.getElementById("aparat");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setVisible(true);
          window.removeEventListener("scroll", onScroll);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="aparat" className="py-12 bg-gray-200 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-12 transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Daftar Aparat Desa
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {apparatuses.map((aparat, index) => (
            <div
              key={aparat.guid}
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src={`https://bucket-2.nos.wjv-1.neo.id/${aparat.file || ""}`}
                onError={(e) => (e.target.src = defaultAparat)} // Gambar default jika gagal load
                alt={aparat.name || "Aparat Desa"}
                className="w-32 h-32 mx-auto mb-6 object-cover border-4 border-gray-300 transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2">{aparat.name}</h3>
              <p className="text-gray-600">{aparat.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AparatDesa;
