import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Dashboard() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* ---------------- NAVBAR ---------------- */}
      <Navbar />

      {/* ---------------- PROMO BANNER ---------------- */}
      <section style={styles.banner}>
        <div style={styles.bannerContent}>
          <div style={styles.bannerLeft}>
            <h1 style={styles.bannerTitle}>Star Motors</h1>

            <p style={styles.bannerSubtitle}>
              Finance Solutions for Two-Wheelers as Good as New
            </p>

            <div style={styles.bannerFeatures}>
              <div style={styles.featureItem}>🚀 Upto 85% of Vehicle Cost</div>
              <div style={styles.featureItem}>⚡ Instant Approval</div>
              <div style={styles.featureItem}>🏆 Best Interest Rates</div>
            </div>

            <button style={styles.exploreBtn}>Explore Vehicles</button>
          </div>

          <div style={styles.bannerRight}>
            <img
              src="https://content.jdmagicbox.com/v2/comp/pune/p4/020pxx20.xx20.170809103230.a4p4/catalogue/s-bike-care-kharadi-pune-second-hand-motorcycle-dealers-289s2lrpsl.jpg"
              alt="Bikes"
              style={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* ---------------- HOT OFFERS ---------------- */}
      <section style={styles.hotOffersSection}>
        <h1 style={styles.hotOffersTitle}>
          🔥 Hot Offers <span style={{ color: "#ff6b00" }}>This Week</span>
        </h1>

        <div style={styles.carouselContainer}>
          {[
            {
              name: "Royal Enfield Classic 350",
              year: "2021",
              km: "12,500 km",
              price: "₹1,35,000",
              original: "₹1,65,000",
              image:
                "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&q=80",
              discount: "18% OFF",
            },
            {
              name: "Honda Activa 6G",
              year: "2022",
              km: "8,200 km",
              price: "₹58,000",
              original: "₹68,000",
              image:
                "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&q=80",
              discount: "15% OFF",
            },
            {
              name: "Yamaha FZ-S V3",
              year: "2020",
              km: "15,800 km",
              price: "₹82,000",
              original: "₹95,000",
              image:
                "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&q=80",
              discount: "14% OFF",
            },
            {
              name: "Royal Enfield Classic 350",
              year: "2021",
              km: "12,500 km",
              price: "₹1,35,000",
              original: "₹1,65,000",
              image:
                "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&q=80",
              discount: "18% OFF",
            },
            {
              name: "Honda Activa 6G",
              year: "2022",
              km: "8,200 km",
              price: "₹58,000",
              original: "₹68,000",
              image:
                "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&q=80",
              discount: "15% OFF",
            },
            {
              name: "Yamaha FZ-S V3",
              year: "2020",
              km: "15,800 km",
              price: "₹82,000",
              original: "₹95,000",
              image:
                "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&q=80",
              discount: "14% OFF",
            },
          ].map((bike, i) => (
            <div key={i} style={styles.offerCard}>
              <div style={styles.discountBadge}>{bike.discount}</div>
              <img
                src={bike.image}
                alt={bike.name}
                style={styles.offerCardImg}
              />

              <div style={styles.offerCardContent}>
                <h3 style={styles.bikeName}>{bike.name}</h3>
                <div style={styles.bikeDetails}>
                  <span>🗓️ {bike.year}</span>
                  <span>📍 {bike.km}</span>
                </div>

                <div style={styles.priceSection}>
                  <div>
                    <div style={styles.currentPrice}>{bike.price}</div>
                    <div style={styles.originalPrice}>{bike.original}</div>
                  </div>
                  <button style={styles.viewBtn}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- BUY WITH EASE ---------------- */}
      <section style={styles.splitSection}>
        <div style={styles.splitLeft}>
          <h1 style={styles.heading}>
            Buy With Ease.
            <br />
            <span style={{ color: "#ff6b00" }}>Ride with Peace.</span>
          </h1>

          {[
            "Endless Choices – Vast range of options across categories",
            "Test It – Test ride to feel the quality",
            "Buy in a Blink – Fast documentation",
            "As Good As New – Premium refurbished bikes",
          ].map((t, i) => (
            <div key={i} style={styles.splitItem}>
              <div style={styles.itemNumber}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p>{t}</p>
            </div>
          ))}

          <button style={styles.buyBtn}>Buy Now</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Bikes"
          style={styles.splitImg}
        />
      </section>

      {/* ---------------- SELLING SECTION ---------------- */}
      <section style={styles.sellSection}>
        <h1>
          Selling Your Two-Wheeler?{" "}
          <span style={{ color: "#ff6b00" }}>We Make It Easy!</span>
        </h1>

        <div style={styles.sellGrid}>
          {[
            "Best Price Guaranteed",
            "Hassle-Free Documentation",
            "Fast & Secure Payment",
            "Free Doorstep Evaluation",
          ].map((t) => (
            <div key={t} style={styles.sellCard}>
              <h3>{t}</h3>
              <p>
                Get the highest value with transparent inspection and quick
                process.
              </p>
            </div>
          ))}
        </div>

        <button style={styles.sellBtn}>Sell Now</button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
      {/* <footer style={styles.footer}>
        <div>
          <img
            src="https://i.ibb.co/jhjRRc7/drivex-logo.png"
            alt="logo"
            style={{ height: 40 }}
          />
          <p>
            We provide high-quality refurbished two-wheelers with trust &
            convenience.
          </p>
          <p>© 2025 DriveX Mobility Pvt Ltd</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Buy</p>
          <p>Sell</p>
          <p>Service</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+91 7666377661</p>
          <p>support@drivex.in</p>
          <p>Coimbatore, Bangalore</p>
        </div>
      </footer> */}
    </div>
  );
}

const styles = {
  /* BUDGET */
  budgetSection: { padding: "40px 40px" },
  budgetGrid: {
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 20,
  },
  budgetCard: {
    background: "#fff",
    padding: "20px 10px",
    borderRadius: 12,
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    cursor: "pointer",
  },

  /* BANNER */
  banner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "40px 0px",
    background: "linear-gradient(135deg, #1f1f1f, #2c2c2c)",
    color: "#fff",
  },

  bannerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    background: "#ffffff10",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  },

  bannerLeft: {
    flex: 1,
  },

  bannerTitle: {
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#ff6b00",
  },

  bannerSubtitle: {
    fontSize: "18px",
    opacity: "0.8",
    marginBottom: "20px",
  },

  bannerFeatures: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "25px",
  },

  featureItem: {
    background: "#ffffff15",
    padding: "12px 15px",
    borderRadius: "10px",
    fontSize: "16px",
    border: "1px solid #ffffff20",
  },

  exploreBtn: {
    background: "#ff6b00",
    padding: "12px 28px",
    fontSize: "17px",
    fontWeight: "600",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 5px 12px rgba(255,107,0,0.4)",
  },

  bannerRight: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  bannerImg: {
    width: "85%",
    maxWidth: "500px",
    filter: "drop-shadow(0px 8px 25px rgba(0,0,0,0.4))",
  },

  /* HOT OFFERS */
  hotOffersSection: {
    padding: "60px 40px",
    background: "linear-gradient(135deg, #fff5e6, #ffffff)",
  },
  hotOffersTitle: {
    fontSize: "38px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
  },
  carouselContainer: {
    display: "flex",
    gap: "25px",
    overflowX: "auto",
    padding: "20px 10px",
    scrollbarWidth: "thin",
    scrollbarColor: "#ff6b00 #f0f0f0",
  },
  offerCard: {
    minWidth: "320px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  discountBadge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "#ff6b00",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "20px",
    fontWeight: "700",
    fontSize: "14px",
    zIndex: 1,
  },
  offerCardImg: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  offerCardContent: {
    padding: "20px",
  },
  bikeName: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#1f1f1f",
  },
  bikeDetails: {
    display: "flex",
    gap: "15px",
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  },
  priceSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  currentPrice: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#ff6b00",
  },
  originalPrice: {
    fontSize: "14px",
    color: "#999",
    textDecoration: "line-through",
  },
  viewBtn: {
    background: "#1f1f1f",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
  },

  /* SPLIT SECTION */
  splitSection: {
    display: "flex",
    padding: "60px 40px",
    alignItems: "center",
    gap: 40,
    flexWrap: "wrap",
  },
  splitLeft: { flex: 1, minWidth: 250 },
  splitImg: {
    width: "45%",
    minWidth: 280,
    borderRadius: 10,
  },
  heading: { fontSize: 36, marginBottom: 20 },
  splitItem: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    marginTop: 15,
  },
  itemNumber: {
    background: "#ff6b00",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 6,
    fontWeight: 600,
  },
  buyBtn: {
    marginTop: 30,
    padding: "12px 20px",
    background: "#ff6b00",
    border: "none",
    color: "#fff",
    borderRadius: 6,
    cursor: "pointer",
  },

  /* SELL */
  sellSection: { padding: "40px" },
  sellGrid: {
    marginTop: 25,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },
  sellCard: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
  },
  sellBtn: {
    marginTop: 25,
    padding: "12px 20px",
    background: "#ff6b00",
    border: "none",
    color: "#fff",
    borderRadius: 6,
    cursor: "pointer",
  },

  /* FOOTER */
  footer: {
    marginTop: 50,
    padding: "40px",
    background: "#111",
    color: "#fff",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 30,
  },
};
