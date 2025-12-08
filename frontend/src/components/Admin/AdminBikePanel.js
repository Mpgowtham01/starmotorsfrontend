import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes, FaSave } from "react-icons/fa";
import AdminNavbar from "../AdminNavbar";
import { Select } from "antd";

const API_URL = "http://localhost:8080/bike";

export default function AdminBikePanel() {
  const [bikes, setBikes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentBike, setCurrentBike] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    variant: "",
    registrationYear: "",
    price: "",
    offerPrice: "",
    emiAvailable: false,
    kmsDriven: "",
    ownerCount: "",
    city: "",
    pincode: "",
    images: ["", "", "", "", ""],
    videoUrl: "",
    description: "",
    registeredState: "",
    keyfeatures: [],
    insurance: "Yes",
    rctransfer: "Yes",
    engine: "",
    fuel: "Petrol",
    biketype: "motorcycle",
    isActive: true,
  });
  console.log("formData :>> ", formData);

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/getall`);
      const data = await response.json();
      setBikes(data.data || []);
    } catch (error) {
      console.error("Error fetching bikes:", error);
      alert("Failed to fetch bikes");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e, index) => {
    console.log("e.target :>> ", e.target);
    const file = e.target.files[0];
    if (!file) return;

    const formDataCloud = new FormData();
    formDataCloud.append("file", file);
    formDataCloud.append("upload_preset", "darshan");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dzblzw7ll/image/upload",
        {
          method: "POST",
          body: formDataCloud,
        }
      );
      const data = await res.json();
      console.log("data :>> ", data);
      if (data.secure_url) {
        setFormData((prev) => {
          const updatedImages = [...prev.images];
          updatedImages[index] = data.secure_url;
          return { ...prev, images: updatedImages };
        });
      }
    } catch (error) {
      console.log("Upload error:", error);
      alert("Image upload failed!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayInputChange = (field, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleAddBike = () => {
    setEditMode(false);
    setCurrentBike(null);
    setFormData({
      brand: "",
      model: "",
      variant: "",
      registrationYear: "",
      price: "",
      offerPrice: "",
      emiAvailable: false,
      kmsDriven: "",
      ownerCount: "",
      city: "",
      pincode: "",
      images: ["", "", "", "", ""],
      videoUrl: "",
      description: "",
      registeredState: "",
      keyfeatures: [],
      insurance: "Yes",
      rctransfer: "Yes",
      engine: "",
      fuel: "Petrol",
      biketype: "motorcycle",
      isActive: true,
    });
    setShowModal(true);
  };

  const handleEditBike = (bike) => {
    setEditMode(true);
    setCurrentBike(bike);
    setFormData({
      brand: bike.brand || "",
      model: bike.model || "",
      variant: bike.variant || "",
      registrationYear: bike.registrationYear || "",
      price: bike.price || "",
      offerPrice: bike.offerPrice || "",
      emiAvailable: bike.emiAvailable || false,
      kmsDriven: bike.kmsDriven || "",
      ownerCount: bike.ownerCount || "",
      city: bike.city || "",
      pincode: bike.pincode || "",
      images: bike.images?.length === 5 ? bike.images : ["", "", "", "", ""],
      videoUrl: bike.videoUrl || "",
      description: bike.description || "",
      registeredState: bike.registeredState || "",
      keyfeatures:
        bike.keyfeatures?.length >= 4 ? bike.keyfeatures.slice(0, 4) : [],
      insurance: bike.insurance || "",
      rctransfer: bike.rctransfer || "Yes",
      engine: bike.engine || "",
      fuel: bike.fuel || "Petrol",
      biketype: bike.biketype || "",
      isActive: bike.isActive !== undefined ? bike.isActive : true,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        images: formData.images.filter((img) => img.trim() !== ""),
        keyfeatures: formData.keyfeatures.filter((f) => f.trim() !== ""),
        registrationYear: Number(formData.registrationYear),
        price: Number(formData.price),
        offerPrice: Number(formData.offerPrice),
        kmsDriven: Number(formData.kmsDriven),
        ownerCount: Number(formData.ownerCount),
      };

      const url =
        editMode && currentBike
          ? `${API_URL}/update/${currentBike._id}`
          : `${API_URL}/create`;

      const method = editMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert(
          editMode ? "Bike updated successfully!" : "Bike added successfully!"
        );
        setShowModal(false);
        fetchBikes();
      } else {
        alert("Failed to save bike");
      }
    } catch (error) {
      console.error("Error saving bike:", error);
      alert("Failed to save bike");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBike = async (id) => {
    if (!window.confirm("Are you sure you want to delete this bike?")) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Bike deleted successfully!");
        fetchBikes();
      } else {
        alert("Failed to delete bike");
      }
    } catch (error) {
      console.error("Error deleting bike:", error);
      alert("Failed to delete bike");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>🏍️ Bike Management</h1>
          <button style={styles.addButton} onClick={handleAddBike}>
            <FaPlus /> Add New Bike
          </button>
        </div>

        {/* Loading */}
        {loading && <div style={styles.loading}>Loading...</div>}

        {/* Bikes Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Brand</th>
                <th style={styles.th}>Model</th>
                <th style={styles.th}>Year</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Offer Price</th>
                <th style={styles.th}>KMs</th>
                <th style={styles.th}>Owner</th>
                <th style={styles.th}>City</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((bike) => (
                <tr key={bike._id} style={styles.tableRow}>
                  <td style={styles.td}>
                    <img
                      src={bike.images?.[0] || "https://via.placeholder.com/60"}
                      alt={bike.model}
                      style={styles.bikeImage}
                    />
                  </td>
                  <td style={styles.td}>{bike.brand}</td>
                  <td style={styles.td}>{bike.model}</td>
                  <td style={styles.td}>{bike.registrationYear}</td>
                  <td style={styles.td}>₹{bike.price?.toLocaleString()}</td>
                  <td style={styles.td}>
                    ₹{bike.offerPrice?.toLocaleString()}
                  </td>
                  <td style={styles.td}>{bike.kmsDriven?.toLocaleString()}</td>
                  <td style={styles.td}>{bike.ownerCount}</td>
                  <td style={styles.td}>{bike.city}</td>
                  <td style={styles.td}>
                    <span
                      style={
                        bike.isActive
                          ? styles.statusActive
                          : styles.statusInactive
                      }
                    >
                      {bike.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.actionButtons}>
                      <button
                        style={styles.editButton}
                        onClick={() => handleEditBike(bike)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        style={styles.deleteButton}
                        onClick={() => handleDeleteBike(bike._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {bikes.length === 0 && !loading && (
            <div style={styles.emptyState}>
              No bikes found. Add your first bike!
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <div style={styles.modalHeader}>
                <h2 style={styles.modalTitle}>
                  {editMode ? "Edit Bike" : "Add New Bike"}
                </h2>
                <button
                  style={styles.closeButton}
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes />
                </button>
              </div>

              <div style={styles.formContainer}>
                <div style={styles.formGrid}>
                  {/* Basic Info */}
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Brand *</label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Model *</label>
                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Variant</label>
                    <input
                      type="text"
                      name="variant"
                      value={formData.variant}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Registration Year *</label>
                    <input
                      type="number"
                      name="registrationYear"
                      value={formData.registrationYear}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Price *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Offer Price</label>
                    <input
                      type="number"
                      name="offerPrice"
                      value={formData.offerPrice}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>KMs Driven *</label>
                    <input
                      type="number"
                      name="kmsDriven"
                      value={formData.kmsDriven}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Owner Count *</label>
                    <input
                      type="number"
                      name="ownerCount"
                      value={formData.ownerCount}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Registered State</label>
                    <input
                      type="text"
                      name="registeredState"
                      value={formData.registeredState}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Engine</label>
                    <input
                      type="text"
                      name="engine"
                      value={formData.engine}
                      onChange={handleInputChange}
                      style={styles.input}
                      placeholder="e.g., 349 cc"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Fuel Type</label>
                    <select
                      name="fuel"
                      value={formData.fuel}
                      onChange={handleInputChange}
                      style={styles.input}
                    >
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Bike Type</label>
                    <select
                      name="biketype"
                      value={formData.biketype}
                      onChange={handleInputChange}
                      style={styles.input}
                    >
                      <option value="motorcycle">Motor Cycle</option>
                      <option value="scooter">Scooter</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Insurance</label>
                    <select
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleInputChange}
                      style={styles.input}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>RC Verified</label>
                    <select
                      name="rctransfer"
                      value={formData.rctransfer}
                      onChange={handleInputChange}
                      style={styles.input}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Video URL</label>
                    <input
                      type="url"
                      name="videoUrl"
                      value={formData.videoUrl}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>
                </div>

                {/* Images */}
                {/* <div style={styles.sectionTitle}>Images (5 URLs)</div> */}
                {/* <div style={styles.formGrid}>
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} style={styles.formGroup}>
                      <label style={styles.label}>Image {index + 1} URL</label>
                      <input
                        type="url"
                        value={formData.images[index]}
                        onChange={(e) =>
                          handleArrayInputChange(
                            "images",
                            index,
                            e.target.value
                          )
                        }
                        style={styles.input}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  ))}
                </div> */}
                <div style={styles.sectionTitle}>Images (5 Uploads)</div>

                <div style={styles.formGrid}>
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} style={styles.formGroup}>
                      <label style={styles.label}>Image {index + 1}</label>

                      {/* File Upload */}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index)}
                        style={styles.input}
                      />

                      {/* Preview */}
                      {formData.images[index] && (
                        <img
                          src={formData.images[index]}
                          alt="preview"
                          style={{
                            width: "100%",
                            marginTop: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Key Features */}

                <div style={styles.sectionTitle}>Key Features</div>

                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Select Features</label>

                    <Select
                      mode="multiple"
                      allowClear
                      placeholder="Select Key Features"
                      value={formData.keyfeatures}
                      onChange={(values) =>
                        setFormData((prev) => ({
                          ...prev,
                          keyfeatures: values,
                        }))
                      }
                      style={{
                        width: "100%",
                      }}
                    >
                      <Select.Option value="ABS">ABS</Select.Option>
                      <Select.Option value="LED Headlamp">
                        LED Headlamp
                      </Select.Option>
                      <Select.Option value="Digital Meter">
                        Digital Meter
                      </Select.Option>
                      <Select.Option value="Tubeless Tyres">
                        Tubeless Tyres
                      </Select.Option>
                      <Select.Option value="Alloy Wheels">
                        Alloy Wheels
                      </Select.Option>
                      <Select.Option value="Self Start">
                        Self Start
                      </Select.Option>
                      <Select.Option value="Bluetooth Connectivity">
                        Bluetooth Connectivity
                      </Select.Option>
                      <Select.Option value="USB Charger">
                        USB Charger
                      </Select.Option>
                      <Select.Option value="Front Disc Brake">
                        Front Disc Brake
                      </Select.Option>
                      <Select.Option value="Side Stand Sensor">
                        Side Stand Sensor
                      </Select.Option>
                      <Select.Option value="Engine Kill Switch">
                        Engine Kill Switch
                      </Select.Option>
                    </Select>
                  </div>
                </div>

                {/* Description */}
                <div style={styles.formGroupFull}>
                  <label style={styles.label}>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    rows="4"
                  />
                </div>

                {/* Checkboxes */}
                <div style={styles.checkboxGroup}>
                  <label style={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="emiAvailable"
                      checked={formData.emiAvailable}
                      onChange={handleInputChange}
                      style={styles.checkbox}
                    />
                    EMI Available
                  </label>

                  <label style={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleInputChange}
                      style={styles.checkbox}
                    />
                    Active
                  </label>
                </div>

                {/* Submit Button */}
                <div style={styles.modalFooter}>
                  <button
                    style={styles.cancelButton}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    style={styles.saveButton}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    <FaSave />{" "}
                    {loading ? "Saving..." : editMode ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#f5f7fa",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a1a1a",
  },
  addButton: {
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
  },
  loading: {
    textAlign: "center",
    padding: "20px",
    fontSize: "18px",
    color: "#666",
  },
  tableWrapper: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    overflow: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1000px",
  },
  tableHeader: {
    background: "linear-gradient(135deg, #1f2937, #374151)",
    color: "#fff",
  },
  th: {
    padding: "16px",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  tableRow: {
    borderBottom: "1px solid #e5e7eb",
  },
  td: {
    padding: "16px",
    fontSize: "14px",
    color: "#333",
  },
  bikeImage: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  statusActive: {
    background: "#10b981",
    color: "#fff",
    padding: "4px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
  },
  statusInactive: {
    background: "#ef4444",
    color: "#fff",
    padding: "4px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
  },
  actionButtons: {
    display: "flex",
    gap: "10px",
  },
  editButton: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyState: {
    textAlign: "center",
    padding: "60px 20px",
    color: "#999",
    fontSize: "18px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px",
    overflow: "auto",
  },
  modal: {
    background: "#fff",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "1200px",
    maxHeight: "90vh",
    overflow: "auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 30px",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 10,
  },
  modalTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a1a",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#666",
  },
  formContainer: {
    padding: "30px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "25px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  formGroupFull: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "25px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "8px",
  },
  input: {
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inherit",
    resize: "vertical",
    outline: "none",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginTop: "30px",
    marginBottom: "20px",
  },
  checkboxGroup: {
    display: "flex",
    gap: "30px",
    marginBottom: "30px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "15px",
    paddingTop: "25px",
    borderTop: "1px solid #e5e7eb",
  },
  cancelButton: {
    padding: "12px 24px",
    background: "#f3f4f6",
    color: "#374151",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
  saveButton: {
    padding: "12px 24px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};
