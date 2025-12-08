import { Modal } from "antd";

export function DealerModal({ show, close }) {
  return (
    <Modal
      title="Dealer Contact Information"
      open={show}
      onCancel={close}
      footer={null}
      centered
      width={500}
    >
      <div style={{ padding: "10px 5px" }}>
        <h3 style={{ marginBottom: 5 }}>📞 Phone Number</h3>
        <p style={{ fontSize: 16, fontWeight: 600 }}>+91 80983 22773</p>

        <h3 style={{ marginTop: 20, marginBottom: 5 }}>📍 Address</h3>
        <p style={{ fontSize: 15 }}>
          Star Motors, Cumbum Main Road,
          <br />
          Near Bus Stand, Tamil Nadu 625516
        </p>

        <h3 style={{ marginTop: 20, marginBottom: 5 }}>🗺 Google Map</h3>

        <div style={{ position: "relative", width: "100%", height: "220px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d283.4075103510442!2d77.28640341811781!3d9.73581593142182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0701597e5b491d%3A0x1dfaf41c8c6d1ce1!2sCumbum%2C%20Tamil%20Nadu%20625516!5e0!3m2!1sen!2sin!4v1765218584153!5m2!1sen!2sin"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Transparent click layer */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=9.73581593142182,77.28640341811781"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              background: "transparent",
              cursor: "pointer",
            }}
          ></a>
        </div>

        <button
          onClick={close}
          style={{
            marginTop: 25,
            width: "100%",
            padding: "12px",
            background: "#1f2937",
            color: "#fff",
            borderRadius: 10,
            border: "none",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
