import { useRef, useState } from "react";
import "../styles/homepage.css";
import heroImg from "../tools/hero2.jpg"; // your image
import gov1 from "../tools/gov1.jpg";
import gov2 from "../tools/gov2.jpg";
import uni1 from "../tools/uni1.jpg";
import imperiallogo from "../tools/imperiallogo.png";
import hospital1 from "../tools/hospital1.jpg";
import emailjs, { init } from "@emailjs/browser";

// init once at module load
init(import.meta.env.VITE_EMAILJS_PUBLIC);

export default function HomePage() {
  const [showQuote, setShowQuote] = useState(false);
  // at top of component if you want a spinner/disabled state
  const [sending, setSending] = useState(false);

  const capabilitiesRef = useRef(null);

  const handleViewCapabilities = () =>
    capabilitiesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  // read from Vite env
  const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE;
  const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
  const EMAILJS_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC;

  return (
    <div className="hp-root">
      {/* ========== HERO ========== */}
      <section
        className="hp-hero"
        aria-label="Imperial Electric hero"
        style={{ "--hero-bg": `url(${heroImg})` }}
      >
        {/* top bar */}
        <div className="hp-hero-nav">
          <div className="hp-logo">
            <img
              src={imperiallogo}
              alt="Imperial Electric logo"
              loading="eager"
              fetchpriority="high"
              width={42}
              height={42}
            />
          </div>

          <button
            className="hp-btn1 hp-btn-primary1"
            onClick={() => setShowQuote(true)}
          >
            Request Quote
          </button>
        </div>

        {/* center content */}
        <div className="hp-hero-center">
          <div className="hp-pill">ENERGIZE THROUGH UNITY</div>

          <h2 className="hp-hero-title">
            Imperial <span className="hp-accent">Electric</span>
          </h2>

          <p className="hp-hero-sub">
            Powering government, education, and healthcare with unified,
            cutting-edge IT solutions, cloud services, and enterprise hardware.
          </p>

          <div className="hp-cta-row">
            <button
              className="hp-btn hp-btn-primary"
              onClick={() => setShowQuote(true)}
            >
              Request Quote →
            </button>
            <button
              className="hp-btn hp-btn-ghost"
              onClick={handleViewCapabilities}
            >
              View Capabilities
            </button>
          </div>

          <div className="hp-stats">
            <div className="hp-stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="hp-stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CAPABILITIES (placeholder – next section to build) ========== */}
      {/* ========== CAPABILITIES / OUR SERVICES ========== */}
      <section ref={capabilitiesRef} className="hp-services" id="capabilities">
        <div className="hp-services-inner">
          <h2 className="hp-services-title">
            <span>Our</span> <strong>Services</strong>
          </h2>
          <p className="hp-services-sub">
            Comprehensive technology solutions tailored for government agencies,
            educational institutions, and healthcare organizations.
          </p>

          {/* Top cards */}
          <div className="hp-services-grid">
            {/* Enterprise Hardware */}
            <article className="hp-service-card">
              <div className="hp-service-icon">
                {/* server icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="6"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="3"
                    y="15"
                    width="18"
                    height="6"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <circle cx="7" cy="6" r="1" fill="white" />
                  <circle cx="7" cy="18" r="1" fill="white" />
                </svg>
              </div>
              <h3 className="hp-service-h">Enterprise Hardware</h3>
              <p className="hp-service-p">
                Servers, workstations, networking equipment, and storage
                solutions from leading manufacturers.
              </p>
              <ul className="hp-bullets">
                <li>Dell EMC</li>
                <li>HPE Aruba</li>
                <li>Cisco</li>
                <li>Lenovo</li>
                <li>Custom Configurations</li>
              </ul>
            </article>

            {/* Cloud Services */}
            <article className="hp-service-card">
              <div className="hp-service-icon">
                {/* cloud icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17h9a4 4 0 0 0 0-8 5 5 0 0 0-9.7 1A3.5 3.5 0 0 0 7 17Z"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <h3 className="hp-service-h">Cloud Services</h3>
              <p className="hp-service-p">
                Secure, scalable cloud solutions designed for government and
                public sector requirements.
              </p>
              <ul className="hp-bullets">
                <li>AWS GovCloud</li>
                <li>Azure Government</li>
                <li>Private Cloud</li>
                <li>Hybrid Solutions</li>
                <li>Migration Services</li>
              </ul>
            </article>

            {/* IT Solutions */}
            <article className="hp-service-card">
              <div className="hp-service-icon">
                {/* wrench icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 7a5 5 0 0 1-7 6l-7 7-3-3 7-7a5 5 0 0 1 6-7"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="hp-service-h">IT Solutions</h3>
              <p className="hp-service-p">
                Comprehensive IT consulting, implementation, and managed
                services for mission-critical operations.
              </p>
              <ul className="hp-bullets">
                <li>System Integration</li>
                <li>Security Solutions</li>
                <li>Managed Services</li>
                <li>Technical Support</li>
                <li>Training</li>
              </ul>
            </article>
          </div>

          {/* Bottom value props */}
          <div className="hp-values">
            <div className="hp-value">
              <div className="hp-value-icon">
                {/* shield */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <h4>Security First</h4>
              <p>
                FedRAMP and FISMA compliant solutions with advanced security
                protocols.
              </p>
            </div>
            <div className="hp-value">
              <div className="hp-value-icon">
                {/* chip */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="7"
                    y="7"
                    width="10"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 1v4M12 19v4M1 12h4M19 12h4M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <h4>High Performance</h4>
              <p>
                Enterprise-grade solutions built for demanding government
                workloads.
              </p>
            </div>
            <div className="hp-value">
              <div className="hp-value-icon">
                {/* grid */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="14"
                    y="3"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="3"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="14"
                    y="14"
                    width="7"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <h4>Scalable</h4>
              <p>
                Solutions that grow with your organization’s changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== WHO WE SERVE ========== */}
      <section className="hp-serve" id="who-we-serve">
        <div className="hp-serve-inner">
          <h2 className="hp-serve-title">
            <span>Who We</span> <strong>Serve</strong>
          </h2>
          <p className="hp-serve-sub">
            Specialized expertise across critical sectors with a deep
            understanding of regulatory requirements and operational challenges.
          </p>

          <div className="hp-serve-grid">
            <div className="hp-serve-card">
              <img src={gov1} alt="Government Agencies" />
              <div className="hp-serve-grad" />
              <div className="hp-serve-copy">
                <h3>Government Agencies</h3>
                <p>Federal, state, and local technology solutions</p>
              </div>
            </div>

            <div className="hp-serve-card">
              <img src={gov2} alt="Public Sector" />
              <div className="hp-serve-grad" />
              <div className="hp-serve-copy">
                <h3>Public Sector</h3>
                <p>Municipal and county IT infrastructure</p>
              </div>
            </div>

            <div className="hp-serve-card">
              <img src={uni1} alt="Educational Institutions" />
              <div className="hp-serve-grad" />
              <div className="hp-serve-copy">
                <h3>Educational Institutions</h3>
                <p>K-12, university, and research facilities</p>
              </div>
            </div>

            <div className="hp-serve-card">
              <img src={hospital1} alt="Healthcare Organizations" />
              <div className="hp-serve-grad" />
              <div className="hp-serve-copy">
                <h3>Healthcare Organizations</h3>
                <p>Hospitals, clinics, and medical research</p>
              </div>
            </div>
          </div>

          <div className="hp-serve-cta">
            <h3>Ready to Transform Your Organization?</h3>
            <p>
              Join hundreds of government and public sector organizations that
              trust Imperial Electric.
            </p>
            <div className="hp-serve-bullets">
              <span className="ok">24/7 Support</span>
              <span className="ok">Rapid Deployment</span>
              <span className="ok">Proven Track Record</span>
            </div>
          </div>
        </div>
      </section>
      {/* ========== GET STARTED / CONTACT ========== */}
      <section className="hp-getstarted" aria-labelledby="get-started-heading">
        <div className="hp-getstarted-inner">
          <h2 id="get-started-heading" className="hp-getstarted-title">
            Ready to Get <span className="hp-accent">Started?</span>
          </h2>
          <p className="hp-getstarted-sub">
            Contact our government solutions team today for a personalized
            consultation and competitive quote tailored to your organization's
            needs.
          </p>

          <div className="hp-getstarted-grid">
            {/* Left: contact list */}
            <ul className="hp-contact-list" aria-label="Contact options">
              <li className="hp-contact-item">
                <span className="hp-contact-ico">
                  {/* phone */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 12.8 19.8 19.8 0 0 1 .08 4.18 2 2 0 0 1 2.06 2h3a2 2 0 0 1 2 1.72c.13.98.35 1.94.66 2.86a2 2 0 0 1-.45 2.11L6.1 9.9a16 16 0 0 0 8.01 8.01l1.2-1.17a2 2 0 0 1 2.11-.45c.92.31 1.88.53 2.86.66A2 2 0 0 1 22 16.92Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <div className="hp-contact-copy">
                  <h4>Call Us</h4>
                  <p>(609) 816-1564</p>
                </div>
              </li>

              <li className="hp-contact-item">
                <span className="hp-contact-ico">
                  {/* mail */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2Zm18 6.3V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.7l9.4 5.6a2 2 0 0 0 2.1 0L22 10.3Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <div className="hp-contact-copy">
                  <h4>Email Us</h4>
                  <p>BO@imperialelectricllc.com</p>
                </div>
              </li>

              <li className="hp-contact-item">
                <span className="hp-contact-ico">
                  {/* clock */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 11h5v-2h-4V6h-2v7Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <div className="hp-contact-copy">
                  <h4>Business Hours</h4>
                  <p>Mon–Sun: 24/7</p>
                </div>
              </li>
            </ul>

            {/* Right: quote card */}
            <aside className="hp-quote-card" aria-label="Get your quote today">
              <div className="hp-quote-icon">
                <span className="hp-quote-icon-pill">
                  {/* arrow */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M13 5l7 7-7 7M20 12H4"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="hp-quote-title">Get Your Quote Today</h3>
              <p className="hp-quote-sub">
                Complete our simple form and receive a detailed proposal within
                24 hours. Our team of experts will work with you to find the
                perfect solution.
              </p>
              <button
                className="hp-btn hp-btn-primary hp-quote-btn"
                onClick={() => setShowQuote(true)}
              >
                Request Your Quote
              </button>
              <p className="hp-quote-foot">
                ✓ No obligation • ✓ Free consultation • ✓ 24-hour response
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ========== REQUEST QUOTE MODAL ========== */}
      {showQuote && (
        <div className="hp-modal-backdrop" role="dialog" aria-modal="true">
          <div className="hp-modal">
            <button
              className="hp-modal-close"
              aria-label="Close"
              onClick={() => setShowQuote(false)}
            >
              ×
            </button>

            <h3 className="hp-modal-title">Request a Quote</h3>
            <p className="hp-muted">
              Tell us what you need—we’ll reply within 1 business day.
            </p>

            <form
              className="hp-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget; // <— capture the form element NOW
                const fd = new FormData(form);

                // Honeypot
                if (fd.get("website")) return;

                const payload = {
                  fullName: fd.get("fullName"),
                  businessName: fd.get("businessName"),
                  businessEmail: fd.get("businessEmail"),
                  phone: fd.get("phone"),
                  request: fd.get("request"),
                };

                try {
                  setSending(true);

                  // if you initialized emailjs at module top, no 4th arg is needed
                  await emailjs.send(
                    EMAILJS_SERVICE,
                    EMAILJS_TEMPLATE,
                    payload
                  );

                  alert("✅ Your quote request has been sent!");
                  form.reset(); // <— use the saved element, not e.currentTarget
                  setShowQuote(false);
                } catch (err) {
                  console.error(err);
                  alert("❌ Couldn’t send right now. Please try again.");
                } finally {
                  setSending(false);
                }
              }}
            >
              {/* Full name */}
              <label>
                Full name
                <input
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  required
                />
              </label>

              {/* Business name */}
              <label>
                Name of business
                <input
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  placeholder="Imperial Electric"
                  required
                />
              </label>

              {/* Business email */}
              <label>
                Business email
                <input
                  name="businessEmail"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@imperialelectric.com"
                  required
                />
              </label>

              {/* Phone */}
              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(555) 123-4567"
                  pattern="^\+?[0-9()\-\s\.]{7,}$"
                  title="Enter a valid phone number"
                  required
                />
              </label>

              {/* Request details */}
              <label>
                What you’re requesting
                <textarea
                  name="request"
                  rows="4"
                  placeholder="Briefly describe what you need…"
                  required
                />
              </label>

              <div className="hp-actions">
                <button
                  type="button"
                  className="hp-btn hp-btn-ghost"
                  onClick={() => setShowQuote(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="hp-btn hp-btn-primary"
                  disabled={sending}
                  aria-busy={sending}
                >
                  {sending ? "Sending..." : "Send Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
