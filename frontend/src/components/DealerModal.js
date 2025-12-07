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
        <p style={{ fontSize: 16, fontWeight: 600 }}>+91 76663 77661</p>

        <h3 style={{ marginTop: 20, marginBottom: 5 }}>📍 Address</h3>
        <p style={{ fontSize: 15 }}>
          Star Motors, Cumbum Main Road,
          <br />
          Near Bus Stand, Tamil Nadu 625516
        </p>

        <h3 style={{ marginTop: 20, marginBottom: 5 }}>🗺 Google Map</h3>

        <iframe
          title="Dealer Location"
          width="100%"
          height="220"
          style={{
            border: "1px solid #ccc",
            borderRadius: 10,
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.116168869489!2d77.3010!3d10.1645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076c40cecd3c43%3A0xb4eab2d5eafb5b!2sCumbum%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1700000000000"
        ></iframe>

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
