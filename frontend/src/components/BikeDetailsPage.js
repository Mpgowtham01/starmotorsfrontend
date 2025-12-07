import React, { useState, useEffect } from "react";
import { FaPlay, FaCheck } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsSpeedometer2, BsFuelPump } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DealerModal } from "./DealerModal";
import { PiEngineLight } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { FaBook } from "react-icons/fa";

export default function BikeDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showDealerModal, setShowDealerModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState(state?.img?.[0] || "");
  const [bikes, setBikes] = useState([]);
  const [relatedBikes, setRelatedBikes] = useState([]);
  console.log("state :>> ", state);

  useEffect(() => {
    getBikeList();
  }, []);

  useEffect(() => {
    if (bikes.length > 0 && state) {
      const related = bikes
        .filter(
          (bike) =>
            bike.id !== state.id && bike.name.includes(state.name.split(" ")[0])
        )
        .slice(0, 3);

      if (related.length < 3) {
        const remaining = bikes
          .filter(
            (bike) =>
              bike.id !== state.id && !related.find((r) => r.id === bike.id)
          )
          .slice(0, 3 - related.length);
        setRelatedBikes([...related, ...remaining]);
      } else {
        setRelatedBikes(related);
      }
    }
  }, [bikes, state]);

  const getBikeList = async () => {
    try {
      const response = await axios.get(
        "https://starmotorsbackend.onrender.com/bike/getall"
      );

      const formatted = response.data.data.map((b) => ({
        id: b._id,
        name: `${b.brand} ${b.model}`,
        offerPrice: b.offerPrice,
        price: b.price,
        km: b.kmsDriven,
        owner: `${b.ownerCount} Owner`,
        year: b.registrationYear,
        location: b.city,
        img: b.images || "",
        engine: b.engine,
        rctransfer: b.rctransfer,
        fuel: b.fuel,
        keyfeatures: b.keyfeatures,
        insurance: b.insurance,
      }));

      setBikes(formatted);
    } catch (err) {
      console.log("API Error: ", err);
    }
  };

  const handleBikeClick = (bike) => {
    navigate("/bike-details", { state: bike });
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    navigate("/");
  };

  const handleSubmitBike = () => {
    navigate("/bike");
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.breadcrumb}>
          <span style={styles.breadcrumbLink} onClick={() => handleSubmit()}>
            Home
          </span>
          <span style={styles.breadcrumbSeparator}>/</span>
          <span
            style={styles.breadcrumbLink}
            onClick={() => handleSubmitBike()}
          >
            Bikes
          </span>
          <span style={styles.breadcrumbSeparator}>/</span>
          <span style={styles.breadcrumbCurrent}>{state.name}</span>
        </div>

        <div style={styles.container}>
          {/* LEFT SIDE */}
          <div style={styles.left}>
            {/* Main Image */}
            <div style={styles.mainImageWrapper}>
              <img
                src={selectedImage}
                alt={state.name}
                style={styles.mainImage}
              />
            </div>

            {/* Thumbnails */}
            <div style={styles.thumbnailRow}>
              {state?.img?.slice(0, 5).map((thumb, i) => (
                <img
                  key={i}
                  src={thumb}
                  alt={`view ${i + 1}`}
                  style={styles.thumb}
                  onClick={() => setSelectedImage(thumb)}
                />
              ))}
              {/* {state?.img?.length > 4 && (
                <div style={styles.viewMore}>+{state.img.length - 4} More</div>
              )} */}
            </div>

            {/* Vehicle Overview */}
            <h2 style={styles.sectionTitle}>Vehicle Overview</h2>
            <div style={styles.infoGrid}>
              <InfoBox
                icon={<BsSpeedometer2 />}
                label="Kilometers"
                value={`${state.km} km`}
              />
              <InfoBox icon={<MdPerson />} label="Owner" value={state.owner} />
              <InfoBox
                icon={<BsFuelPump />}
                label="Fuel Type"
                value={state.fuel}
              />

              <InfoBox
                icon={<PiEngineLight />}
                label="Engine"
                value={state.engine}
              />
              <InfoBox
                icon={<FaRegCalendarAlt />}
                label="Year"
                value={state.year}
              />
              <InfoBox
                icon={<AiFillClockCircle />}
                label="Insurance"
                value="Valid"
              />
              <InfoBox
                icon={<FaBook />}
                label="RC Transfer"
                value="Available"
              />
            </div>

            {/* Features Section */}
            <h2 style={styles.sectionTitle}>Key Features</h2>
            <div style={styles.featuresGrid}>
              {state?.keyfeatures?.map((feature, idx) => (
                <div key={idx} style={styles.featureItem}>
                  <FaCheck style={styles.checkIcon} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 style={styles.sectionTitle}>Description</h2>
            <div style={styles.description}>
              <p>
                Well-maintained bike in excellent condition. Regular service
                done at authorized service center. All documents are clear and
                original. No accident history. Single owner, personal use only.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={styles.right}>
            <div style={styles.detailsCard}>
              <h1 style={styles.bikeName}>{state.name}</h1>
              <p style={styles.metaText}>
                {state.km} kms • {state.owner} • {state.year}
              </p>

              <div style={styles.priceContainer}>
                <span style={styles.priceText}>₹{state.offerPrice}</span>
                <span style={styles.cutPrice}>₹{state.price}</span>
              </div>

              <div style={styles.savingsTag}>
                Save ₹{Number(state.price) - Number(state.offerPrice)}
              </div>

              <p style={styles.includedText}>
                ✓ RC Verified ✓ Insurance ✓ Service
              </p>

              <button
                style={styles.secondaryBtn}
                onClick={() => setShowDealerModal(true)}
              >
                <FiPhoneCall /> Contact Dealer
              </button>

              {/* Trust Badges */}
              <div style={styles.trustSection}>
                <div style={styles.trustBadge}>
                  <span style={styles.trustIcon}>🔒</span>
                  <span style={styles.trustText}>Secure Payment</span>
                </div>
                <div style={styles.trustBadge}>
                  <span style={styles.trustIcon}>✅</span>
                  <span style={styles.trustText}>Verified Seller</span>
                </div>
                <div style={styles.trustBadge}>
                  <span style={styles.trustIcon}>🛡️</span>
                  <span style={styles.trustText}>Warranty Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED BIKES SECTION */}
        {relatedBikes.length > 0 && (
          <div style={styles.relatedSection}>
            <h2 style={styles.relatedTitle}>Related Bikes</h2>
            <div style={styles.relatedGrid}>
              {relatedBikes.map((bike) => (
                <RelatedBikeCard
                  key={bike.id}
                  bike={bike}
                  onClick={() => handleBikeClick(bike)}
                />
              ))}
            </div>
          </div>
        )}
        <DealerModal
          show={showDealerModal}
          close={() => setShowDealerModal(false)}
        />
      </div>
      <Footer />
    </div>
  );
}

/* InfoBox Component */
function InfoBox({ label, value, icon }) {
  return (
    <div style={styles.infoBox}>
      {icon && <div style={styles.infoIcon}>{icon}</div>}
      <div style={styles.infoLabel}>{label}</div>
      <div style={styles.infoValue}>{value}</div>
    </div>
  );
}

/* RelatedBikeCard Component */
function RelatedBikeCard({ bike, onClick }) {
  return (
    <div style={styles.relatedCard} onClick={onClick}>
      <div style={styles.relatedImageWrapper}>
        <img src={bike.img[0]} alt={bike.name} style={styles.relatedImage} />
      </div>
      <div style={styles.relatedContent}>
        <h3 style={styles.relatedBikeName}>{bike.name}</h3>
        <p style={styles.relatedMeta}>
          {bike.km} km • {bike.owner} • {bike.year}
        </p>
        <div style={styles.relatedPriceRow}>
          <span style={styles.relatedPrice}>
            ₹{bike.offerPrice.toLocaleString()}
          </span>
          <span style={styles.relatedOldPrice}>
            ₹{bike.price.toLocaleString()}
          </span>
        </div>
        <div style={styles.relatedFeatures}>
          <span style={styles.relatedFeature}>🏍️ {bike.fuel}</span>
        </div>
      </div>
    </div>
  );
}

/* Styles with Comprehensive Media Queries */
const styles = {
  page: {
    background: "linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%)",
    minHeight: "100vh",
    padding: "30px 40px",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  breadcrumb: {
    marginBottom: "25px",
    fontSize: "14px",
    color: "#666",
  },

  breadcrumbLink: {
    color: "#6366f1",
    cursor: "pointer",
    transition: "color 0.2s",
  },

  breadcrumbSeparator: {
    margin: "0 8px",
    color: "#999",
  },

  breadcrumbCurrent: {
    color: "#333",
    fontWeight: "600",
  },

  container: {
    display: "flex",
    gap: "60px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  /* LEFT SECTION */
  left: {
    flex: "2",
  },

  mainImageWrapper: {
    width: "100%",
    height: "500px",
    background: "#fff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },

  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },

  thumbnailRow: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  thumb: {
    width: "100px",
    height: "100px",
    background: "#fff",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
  },

  viewMore: {
    width: "100px",
    height: "100px",
    background: "linear-gradient(135deg, #1a1a1a, #333)",
    color: "#fff",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
  },

  sectionTitle: {
    marginTop: "40px",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a1a",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },

  infoBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },

  infoIcon: {
    fontSize: "24px",
    color: "#6366f1",
    marginBottom: "8px",
  },

  infoLabel: {
    fontSize: "13px",
    color: "#777",
    marginBottom: "5px",
  },

  infoValue: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#333",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },

  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
    fontSize: "14px",
    fontWeight: "500",
  },

  checkIcon: {
    color: "#10b981",
    fontSize: "16px",
  },

  description: {
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    lineHeight: "1.7",
    color: "#555",
  },

  /* RIGHT SECTION */
  right: {
    flex: "1.3",
  },

  detailsCard: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "35px",
    borderRadius: "24px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.8)",
    boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
    position: "sticky",
    top: "20px",
  },

  bikeName: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: "10px",
    lineHeight: "1.2",
  },

  metaText: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "25px",
  },

  priceContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "12px",
  },

  priceText: {
    fontSize: "40px",
    fontWeight: "800",
    color: "#d90429",
  },

  cutPrice: {
    color: "#999",
    fontSize: "20px",
    textDecoration: "line-through",
  },

  savingsTag: {
    display: "inline-block",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "15px",
  },

  includedText: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "25px",
    lineHeight: "1.6",
  },

  primaryBtn: {
    width: "100%",
    padding: "16px 0",
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 8px 20px rgba(99,102,241,0.35)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },

  secondaryBtn: {
    width: "100%",
    padding: "16px 0",
    background: "linear-gradient(135deg, #1f2937, #374151)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },

  testRideBtn: {
    width: "100%",
    padding: "16px 0",
    background: "linear-gradient(135deg, #ff5722, #ff7043)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(255,87,34,0.4)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },

  trustSection: {
    marginTop: "25px",
    paddingTop: "25px",
    borderTop: "1px solid #e5e7eb",
  },

  trustBadge: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },

  trustIcon: {
    fontSize: "20px",
  },

  trustText: {
    fontSize: "14px",
    color: "#555",
    fontWeight: "500",
  },

  /* RELATED BIKES SECTION */
  relatedSection: {
    marginTop: "60px",
    maxWidth: "1400px",
    margin: "60px auto 0",
  },

  relatedTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "30px",
  },

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  },

  relatedCard: {
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },

  relatedImageWrapper: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    background: "#f5f5f5",
  },

  relatedImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s",
  },

  relatedContent: {
    padding: "20px",
  },

  relatedBikeName: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "8px",
  },

  relatedMeta: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "12px",
  },

  relatedPriceRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },

  relatedPrice: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#d90429",
  },

  relatedOldPrice: {
    fontSize: "16px",
    color: "#999",
    textDecoration: "line-through",
  },

  relatedFeatures: {
    display: "flex",
    gap: "15px",
  },

  relatedFeature: {
    fontSize: "13px",
    color: "#555",
    background: "#f5f7fa",
    padding: "6px 12px",
    borderRadius: "8px",
  },

  /* MEDIA QUERIES */
  "@media(max-width: 1200px)": {
    infoGrid: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },

  "@media(max-width: 1024px)": {
    container: {
      flexDirection: "column",
    },
    right: {
      width: "100%",
    },
    detailsCard: {
      position: "static",
    },
    infoGrid: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },

  "@media(max-width: 768px)": {
    page: {
      padding: "20px",
    },
    mainImageWrapper: {
      height: "350px",
    },
    infoGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "15px",
    },
    featuresGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    bikeName: {
      fontSize: "26px",
    },
    priceText: {
      fontSize: "32px",
    },
    sectionTitle: {
      fontSize: "20px",
    },
    relatedGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
    relatedTitle: {
      fontSize: "24px",
    },
  },

  "@media(max-width: 480px)": {
    page: {
      padding: "15px",
    },
    container: {
      gap: "20px",
    },
    mainImageWrapper: {
      height: "280px",
      padding: "15px",
    },
    thumb: {
      width: "75px",
      height: "75px",
    },
    viewMore: {
      width: "75px",
      height: "75px",
      fontSize: "14px",
    },
    thumbnailRow: {
      gap: "10px",
    },
    infoGrid: {
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
    },
    infoBox: {
      padding: "15px",
    },
    featuresGrid: {
      gridTemplateColumns: "1fr",
    },
    bikeName: {
      fontSize: "22px",
    },
    priceText: {
      fontSize: "28px",
    },
    cutPrice: {
      fontSize: "16px",
    },
    detailsCard: {
      padding: "25px",
    },
    primaryBtn: {
      fontSize: "15px",
      padding: "14px 0",
    },
    secondaryBtn: {
      fontSize: "15px",
      padding: "14px 0",
    },
    testRideBtn: {
      fontSize: "15px",
      padding: "14px 0",
    },
    breadcrumb: {
      fontSize: "12px",
    },
    sectionTitle: {
      fontSize: "18px",
      marginTop: "30px",
    },
    relatedGrid: {
      gridTemplateColumns: "1fr",
      gap: "15px",
    },
    relatedTitle: {
      fontSize: "20px",
      marginBottom: "20px",
    },
    relatedImageWrapper: {
      height: "180px",
    },
  },

  "@media(max-width: 360px)": {
    page: {
      padding: "10px",
    },
    mainImageWrapper: {
      height: "240px",
    },
    bikeName: {
      fontSize: "20px",
    },
    priceText: {
      fontSize: "24px",
    },
    thumb: {
      width: "65px",
      height: "65px",
    },
    viewMore: {
      width: "65px",
      height: "65px",
    },
  },
};
