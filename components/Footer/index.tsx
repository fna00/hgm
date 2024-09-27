import React from "react";

interface SocialMedia {
  facebook: string;
  twitter: string;
  linkedin: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface FooterProps {
  data: {
    companyInfo: string;
    socialMedia: SocialMedia;
    contact: Contact;
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <div className="bg-customBlue w-full mb-0 text-white">
      <div className="container mx-auto p-4">
        <div className="mb-4">{data.companyInfo}</div>
        <div className="mb-4">
          <a
            href={data.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |
          <a
            href={data.socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |
          <a
            href={data.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <p>
            Email:{" "}
            <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          </p>
          <p>Phone: {data.contact.phone}</p>
        </div>
      </div>
    </div>
  );
}
