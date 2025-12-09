import React, { useState } from "react";
import { Modal, Input, notification } from "antd";
import axios from "axios";

export default function SellBikeModal({ show, close }) {
  const [form, setForm] = useState({
    mobile: "",
    email: "",
    model: "",
    year: "",
    kms: "",
    ownership: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const change = (field, value) => {
    setForm({ ...form, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (form.mobile.length !== 10)
      newErrors.mobile = "Enter a valid 10-digit mobile number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email))
        newErrors.email = "Invalid email address";
    }

    if (!form.model.trim()) newErrors.model = "Vehicle model is required";

    if (!form.year.trim()) newErrors.year = "Registration year is required";

    if (!form.kms.trim()) newErrors.kms = "Kms Driven is required";

    if (!form.ownership.trim())
      newErrors.ownership = "Ownership information is required";

    if (!form.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (form.pincode.length !== 6)
      newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validate()) return;

    const res = await fetch("http://localhost:8080/bike/sell-bike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Star Motors", email: "mpgowtham1902@gmail.com" },
        replyTo: { email: form.email, name: form.name },

        to: [{ email: "mpgowtham01@gmail.com", name: "Star Motors Admin" }],

        subject: "New Contact Us Message - Star Motors",
        htmlContent: `
          <h2>New Sell Bike Lead</h2>
        <p><b>Mobile:</b> ${form.mobile}</p>
        <p><b>Email:</b> ${form.email}</p>
        <p><b>Model:</b> ${form.model}</p>
        <p><b>Year:</b> ${form.year}</p>
        <p><b>Kms Driven:</b> ${form.kms}</p>
        <p><b>Ownership:</b> ${form.ownership}</p>
        <p><b>Pincode:</b> ${form.pincode}</p>
        `,
      },
      {
        headers: {
          "api-key":
            "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",
          "Content-Type": "application/json",
        },
      }
    );

    if (data.success) {
      notification.success({
        message: "Success",
        description: "Your request has been submitted successfully!",
      });

      setForm({
        mobile: "",
        email: "",
        model: "",
        year: "",
        kms: "",
        ownership: "",
        pincode: "",
      });

      close();
    }
  };

  const errorStyle = {
    color: "red",
    fontSize: 12,
    marginTop: -15,
    marginBottom: -10,
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
        {/* MOBILE */}
        <div>
          <Input
            placeholder="Mobile *"
            value={form.mobile}
            onChange={(e) => change("mobile", e.target.value)}
            size="large"
            status={errors.mobile ? "error" : ""}
          />
          {errors.mobile && <div style={errorStyle}>{errors.mobile}</div>}
        </div>

        {/* EMAIL */}
        <div>
          <Input
            placeholder="Email *"
            value={form.email}
            onChange={(e) => change("email", e.target.value)}
            size="large"
            status={errors.email ? "error" : ""}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>

        {/* MODEL */}
        <div>
          <Input
            placeholder="Vehicle Model *"
            value={form.model}
            onChange={(e) => change("model", e.target.value)}
            size="large"
            status={errors.model ? "error" : ""}
          />
          {errors.model && <div style={errorStyle}>{errors.model}</div>}
        </div>

        {/* YEAR */}
        <div>
          <Input
            placeholder="Registration Year *"
            value={form.year}
            onChange={(e) => change("year", e.target.value)}
            size="large"
            status={errors.year ? "error" : ""}
          />
          {errors.year && <div style={errorStyle}>{errors.year}</div>}
        </div>

        {/* KMS */}
        <div>
          <Input
            placeholder="Kms Driven *"
            value={form.kms}
            onChange={(e) => change("kms", e.target.value)}
            size="large"
            status={errors.kms ? "error" : ""}
          />
          {errors.kms && <div style={errorStyle}>{errors.kms}</div>}
        </div>

        {/* OWNERSHIP */}
        <div>
          <Input
            placeholder="Ownership *"
            value={form.ownership}
            onChange={(e) => change("ownership", e.target.value)}
            size="large"
            status={errors.ownership ? "error" : ""}
          />
          {errors.ownership && <div style={errorStyle}>{errors.ownership}</div>}
        </div>

        {/* PINCODE */}
        <div>
          <Input
            placeholder="Area Pincode *"
            value={form.pincode}
            onChange={(e) => change("pincode", e.target.value)}
            size="large"
            status={errors.pincode ? "error" : ""}
          />
          {errors.pincode && <div style={errorStyle}>{errors.pincode}</div>}
        </div>
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
          onClick={submitForm}
        >
          SUBMIT
        </button>
      </div>
    </Modal>
  );
}
