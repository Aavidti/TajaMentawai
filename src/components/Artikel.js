import React, { useEffect } from "react";
import "./destination.css";
import "./Header.css";
import api from "../config/api";

const FooterSection = ({ title, description, socialLinks, links }) => {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      {description && <div>{description}</div>}
      {socialLinks && (
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} aria-label={link.alt}>
              <i className={`bi ${link.icon}`} style={{ fontSize: "28px" }}></i>
            </a>
          ))}
        </div>
      )}
      {links && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Artikel = () => {
  const [blogPosts, setBlogPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`${api}/artikel`);
      const data = await response.json();
      console.log(data.artikel);
      setBlogPosts(Array.isArray(data.artikel) ? data.artikel : []);
    } catch (error) {
      setError(error.message);
    }
  };
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "Taman Nasional Siberut",
  //     image: "/taman-siberut.jpg",
  //     author: "Admin Mentawai",
  //     date: "25 Jan 2024",
  //     likes: 258,
  //   },
  //   {
  //     id: 2,
  //     title: "Pulau Sipora",
  //     image: "/pulau-sipora.jpg",
  //     author: "Admin Mentawai",
  //     date: "20 Jan 2024",
  //     likes: 245,
  //   },
  //   {
  //     id: 3,
  //     title: "Air Kulukubuk",
  //     image: "/air-kulukubuk.png",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  //   {
  //     id: 3,
  //     title: "Pulau Awera",
  //     image: "/pulau-awera.jpg",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
  //     image: "/article_3.png",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
  //     image: "/article_3.png",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  // ];

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <h1>TajaMentawai</h1>
          <p>Mengenal Indonesia Lebih Dalam</p>
        </div>
        <nav className="navigation">
          <ul>
            <a
              href="/home-login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Beranda</li>
            </a>
            <a
              href="/destination"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Destinasi</li>
            </a>
            <a
              href="/artikel"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="active">Artikel</li>
            </a>
            <a
              href="/komunitas"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Komunitas</li>
            </a>
          </ul>
        </nav>
        <div className="menu-button">
          <div className="menu-icon"></div>
        </div>
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", height: "100vh" }}>
          <img
            src="/login_kebun_bg.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: "0",
            zIndex: "2",
            background: "#00000073",
            backdropFilter: "blur(2px)",
          }}
        ></div>
        <div
          class="container"
          style={{
            fontSize: "20px",
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: "0",
            zIndex: "3",
            display: "flex",
            color: "white",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>Selamat Membaca</div>
          <div style={{ fontSize: "120px" }}>Artikel & Blog</div>
          <div>
            Anda bisa menemukan beragam cerita, tips, dan panduan untuk
            menjelajahi keindahan Kepulauan Mentawai. Dari petualangan surfing
            di ombak kelas dunia, panduan kuliner lokal, hingga kisah inspiratif
            dari para traveler, jelajahi setiap sudut Mentawai bersama kami.
          </div>
          <div>
            <div style={{ marginTop: "50px" }}>
              <a>Jelajahi Sekarang</a>
              <img alt="" src="" />
            </div>
          </div>
        </div>
      </div>
      <section class="container mt-5 mb-5">
        <div>
          <div class="d-flex gap-5">
            <div
              class="col-6 d-flex rounded overflow-hidden"
              style={{ borderRadius: "10px" }}
            >
              <img
                alt=""
                src="/article_1.png"
                style={{ width: "33.3%", height: "300px", objectFit: "cover" }}
              />
              <img
                alt=""
                src="/mentawai_culture_left.jpg"
                style={{ width: "33.3%", height: "300px", objectFit: "cover" }}
              />
              <img
                alt=""
                src="/destinasi_3.jpg"
                style={{ width: "33.3%", height: "300px", objectFit: "cover" }}
              />
            </div>
            <div class="d-flex flex-column justify-content-around">
              <div style={{ fontWeight: "bold", fontSize: "22px" }}>
                Explore, Experience, Embrace
              </div>
              <div style={{ fontWeight: "bold", fontSize: "40px" }}>
                Petualangan budaya dan wisata menyatu dengan alam dan sejarah.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="blog-section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.artikel_id} className={`blog-card ${post.size}`}>
                <div className="card-image">
                  {(() => {
                    const gambar = post.artikel_gambar
                      ? JSON.parse(post.artikel_gambar)
                      : [];
                    return (
                      <img
                        src={`${api}/${gambar[0]}`}
                        alt={post.artikel_title}
                      />
                    );
                  })()}{" "}
                </div>
                <div className="card-overlay">
                  <h3 style={{ textAlign: "left" }}>{post.artikel_title}</h3>
                  <div className="card-meta">
                    <div className="author">
                      <img
                        src={`/profile.jpg`}
                        alt={post.author.username}
                        className="author-avatar"
                      />
                      <span>{post.author.username}</span>
                    </div>
                    <div className="likes">
                      <i className="fas fa-heart"></i>
                      <span>{post.artikel_likes} Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and Social Links */}
          <FooterSection
            title="TAJAMENTAWAI"
            description="Jelajahi Setiap Sudut Mentawai"
            socialLinks={[
              { href: "#", icon: "bi-facebook", alt: "Facebook" },
              { href: "#", icon: "bi-instagram", alt: "Instagram" },
              { href: "#", icon: "bi-twitter", alt: "Twitter" },
              { href: "#", icon: "bi-linkedin", alt: "LinkedIn" },
            ]}
          />

          {/* Sitemap */}
          <FooterSection
            title="SITEMAP"
            links={[
              { text: "Beranda", href: "#" },
              { text: "Komunitas", href: "#" },
              { text: "Destinasi", href: "#" },
            ]}
          />

          {/* Quick Links */}
          <FooterSection
            title="QUICK LINKS"
            links={[
              { text: "Tentang", href: "#" },
              { text: "Artikel", href: "#" },
              { text: "Blog", href: "#" },
            ]}
          />

          {/* Contact Info */}
          <FooterSection
            title="Let's Talk"
            description={
              <>
                <p>(+62) 812 3456 7890</p>
                <p>info@arunasita.com</p>
                <p>Indonesia, Mentawai</p>
              </>
            }
          />
        </div>
        <div className="footer-bottom">
          <p>
            © Copyright 2024 TajaMentawai. All Rights Reserved | Design by{" "}
            <strong>Team Arunasita</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Artikel;