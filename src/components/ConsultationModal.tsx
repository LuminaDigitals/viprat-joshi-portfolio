"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ConsultationModal.module.css";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", clinic: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const originalUrlRef = useRef<string>("");

  const clinics = [
    "Langley: Douglas Park Dental",
    "North Van: Infinity Dental Care",
    "Coquitlam: AARK Dental",
  ];

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      // Restore URL if we pushed /thank-you
      if (originalUrlRef.current && window.location.pathname === "/thank-you") {
        window.history.replaceState(null, "", originalUrlRef.current);
        originalUrlRef.current = "";
      }
      // Delay reset so close animation plays with current state
      const timer = setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", clinic: "", message: "" });
        setStatus("idle");
        setIsDropdownOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Push /thank-you virtual pageview on successful submission for GTM tracking
  useEffect(() => {
    if (status === "success") {
      originalUrlRef.current = window.location.pathname + window.location.search;
      window.history.pushState({ thankYou: true }, "", "/thank-you");
    }
  }, [status]);

  // Handle browser back button: if user presses back from /thank-you, close the modal
  useEffect(() => {
    const handlePopState = () => {
      if (status === "success") {
        originalUrlRef.current = ""; // URL already restored by back navigation
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [isOpen, status, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", clinic: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close consultation form">
              ✕
            </button>

            {status === "success" ? (
              /* ─── Success State ─── */
              <div className={styles.successContent}>
                <div className={styles.successIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className={styles.successTitle}>Thank You.</h2>
                <p className={styles.successText}>
                  Your consultation request has been successfully submitted. Our team will review your details and reach out to you shortly.
                </p>
                <button className={styles.successBtn} onClick={onClose}>
                  Close
                </button>
              </div>
            ) : (
              /* ─── Form State ─── */
              <>
                <div className={styles.header}>
                  <h2 className={styles.title}>
                    Book Your <span className={styles.titleAccent}>Consultation</span>
                  </h2>
                  <p className={styles.subtitle}>
                    Fill in the form below and our team will reach out to schedule your visit.
                  </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="(604) 555-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Preferred Clinic</label>
                    <div
                      className={styles.customSelect}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span style={{ color: formData.clinic ? "var(--foreground)" : "#999" }}>
                        {formData.clinic || "Select a location"}
                      </span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.dropdownMenu}
                      >
                        {clinics.map((clinic) => (
                          <div
                            key={clinic}
                            className={styles.dropdownItem}
                            onClick={() => {
                              setFormData({ ...formData, clinic });
                              setIsDropdownOpen(false);
                            }}
                          >
                            {clinic}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>How can we help?</label>
                    <textarea
                      className={styles.textarea}
                      placeholder="Please describe your surgical needs..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button className={styles.submitBtn} disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Request Consultation"}
                  </button>

                  {status === "error" && (
                    <p className={styles.errorText}>
                      There was an error sending your message. Please try again.
                    </p>
                  )}

                  <p className={styles.footerNote}>
                    🔒 This form is secured and HIPAA-compliant. Your health information is strictly confidential.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
