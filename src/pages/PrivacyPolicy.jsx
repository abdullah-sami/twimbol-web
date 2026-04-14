import React from "react";

const styles = {
  root: {
    "--accent-color": "#FF6E42",
    "--text-color": "#333333",
    "--background-color": "#FFFFFF",
    "--section-bg": "#F8F8F8",
  },
  body: {
    backgroundColor: "#FFFFFF",
    color: "#333333",
    lineHeight: 1.6,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: 20,
  },
  header: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#FF6E42",
    color: "white",
    borderRadius: 10,
    marginBottom: 30,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  h1: {
    fontSize: "2.5rem",
    marginBottom: 15,
  },
  headerText: {
    fontSize: "1.1rem",
    maxWidth: 600,
    margin: "0 auto",
  },
  section: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 25,
    marginBottom: 25,
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  h2: {
    color: "#FF6E42",
    marginBottom: 15,
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
  },
  h2Bar: {
    display: "inline-block",
    width: 8,
    height: 24,
    backgroundColor: "#FF6E42",
    marginRight: 10,
    borderRadius: 4,
  },
  p: {
    marginBottom: 15,
  },
  contact: {
    fontWeight: "bold",
    color: "#FF6E42",
  },
  footer: {
    textAlign: "center",
    marginTop: 40,
    padding: 20,
    color: "#777",
    fontSize: "0.9rem",
  },
};

function Section({ title, children }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.h2}>
        <span style={styles.h2Bar}></span>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Welcome to Twimbol!</h1>
          <p style={styles.headerText}>
            Your privacy matters to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            app.
          </p>
        </header>

        <Section title="What We Collect">
          <p style={styles.p}>
            We collect basic info like your name, email, username, profile
            photo, and posts. We also track app usage, device type, and how you
            interact with content.
          </p>
        </Section>

        <Section title="How We Use It">
          <p style={styles.p}>
            Your info helps us run the app, show content you'll like, send
            updates, fix bugs, and keep everything secure.
          </p>
        </Section>

        <Section title="Sharing and Permission">
          <p style={styles.p}>
            We don't sell your data. We only share it with trusted services that
            help us operate the app. You control what's public in your settings.
          </p>
        </Section>

        <Section title="Kids & Safety">
          <p style={styles.p}>
            Twimbol is built with young users in mind. However, if you're under
            13, you'll need parental or guardian permission to use the platform.
            We do not knowingly collect data from children without parental
            consent.
          </p>
        </Section>

        <Section title="Your Privacy Controls">
          <p style={styles.p}>
            You can update or delete your profile any time, manage notification
            preferences, block or report users, and even request a full account
            deletion if you choose to leave the platform. You're always in
            control.
          </p>
        </Section>

        <Section title="Updates to This Policy">
          <p style={styles.p}>
            We may revise this policy as our app evolves or in response to legal
            updates. If anything changes, we'll notify you inside the app so
            you're always informed.
          </p>
        </Section>

        <Section title="Contact Us">
          <p style={styles.p}>
            If you have questions or concerns about your data, contact our
            support team at:{" "}
            <span style={styles.contact}>twimbol@gmail.com</span>
          </p>
        </Section>

        <footer style={styles.footer}>
          <p>&copy; 2025 Twimbol. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
