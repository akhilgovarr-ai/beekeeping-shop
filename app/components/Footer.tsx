"use client";

import { contacts } from "../../src/config/contacts";

export default function Footer() {
  return (
    <footer id="contact" className="kh-social-footer">
      <a href={contacts.socialLinks.whatsapp} aria-label="WhatsApp"
        onClick={event => { if (contacts.socialLinks.whatsapp === "#") event.preventDefault(); }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M20.5 11.5a9 9 0 0 1-13.4 7.8L3 20.5l1.2-4.1A9 9 0 1 1 20.5 11.5Z" />
          <path d="m8 7 2 3-1 1a8 8 0 0 0 4 4l1-1 3 2c-1 3-4 2-7-1S6 8 8 7Z" />
        </svg>
      </a>
      <a href={contacts.socialLinks.instagram} aria-label="Instagram"
        onClick={event => { if (contacts.socialLinks.instagram === "#") event.preventDefault(); }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </footer>
  );
}
