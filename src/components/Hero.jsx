import React from "react";
import backgroundImage from "../assets/B1.jpg"; // Ensure the path is correct

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-cover bg-center h-screen mb-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold mb-4">
            Selamat Datang di Website Desa Sukataris
          </h1>
          <p className="text-white text-xl mb-8">
            Membangun desa dengan inovasi dan kolaborasi.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center"> 
          <h2 className="text-4xl font-bold mb-4">Tentang Desa Sukataris</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sukataris adalah desa yang brada di kecamatan Karangtengah Kabupaten
            Cianjur - Provinsi Jawa Barat, . Desa Sukataris salah satu dari 16
            desa yang ada di Karangtengah.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          #home {
            background-size: cover;
            background-position: center;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
