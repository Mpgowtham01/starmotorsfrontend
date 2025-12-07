import React, { useState } from "react";
import { Modal, Input } from "antd";

export default function SellBikeModal({ show, close }) {
  const [form, setForm] = useState({
    mobile: "",
    model: "",
    year: "",
    kms: "",
    ownership: "",
    pincode: "",
  });

  const change = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <Modal
      title="Enter Your Details"
      open={show}
      onCancel={close}
      footer={null}
      width={550}
      centered
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Input
          placeholder="Mobile *"
          value={form.mobile}
          onChange={(e) => change("mobile", e.target.value)}
          size="large"
        />
        <Input
          placeholder="Vehicle Model"
          value={form.model}
          onChange={(e) => change("model", e.target.value)}
          size="large"
        />
        <Input
          placeholder="Registration year"
          value={form.year}
          onChange={(e) => change("year", e.target.value)}
          size="large"
        />
        <Input
          placeholder="Kms Driven"
          value={form.kms}
          onChange={(e) => change("kms", e.target.value)}
          size="large"
        />
        <Input
          placeholder="Ownership"
          value={form.ownership}
          onChange={(e) => change("ownership", e.target.value)}
          size="large"
        />
        <Input
          placeholder="Area Pincode"
          value={form.pincode}
          onChange={(e) => change("pincode", e.target.value)}
          size="large"
        />
      </div>

      <div
        style={{
          marginTop: 25,
          display: "flex",
          justifyContent: "flex-end",
          gap: 15,
        }}
      >
        <button
          style={{
            border: "none",
            background: "none",
            color: "#ff004c",
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={close}
        >
          CANCEL
        </button>

        <button
          style={{
            border: "none",
            background: "#d8d8d8",
            color: "#666",
            fontWeight: 600,
            padding: "8px 18px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          SUBMIT
        </button>
      </div>
    </Modal>
  );
}
