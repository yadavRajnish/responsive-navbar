import React from "react";
import Image from "next/image";

const socialIconData = [
  {
    icon: "/assets/social-media/instagram.svg",
    url: "https://www.instagram.com/rdbrothersproperty?igsh=MTRpbHowcHdlazlkMA",
    alt: "Instagram",
    color: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)", // Instagram gradient
  },
  {
    icon: "/assets/social-media/facebook.svg",
    url: "https://www.facebook.com/RDBROTHERSPROPERTIES?mibextid=LQQJ4d",
    alt: "Facebook",
    color: "#3b5998", // Facebook color
  },
  {
    icon: "/assets/social-media/linkedin.svg",
    url: "https://www.linkedin.com/company/rd-brothers-property-consultant-llp/",
    alt: "LinkedIn",
    color: "#0A66C2", // LinkedIn color
  },
  {
    icon: "/assets/social-media/youtube.svg",
    url: "https://youtube.com/@r.d.brothersproperties?feature=shared",
    alt: "YouTube",
    color: "#FF0000", // YouTube color
  },
];

const SocialIcon = () => {
  return (
    <ul
      className="d-none d-md-flex align-items-center justify-content-center"
      style={{ marginBottom: "0.5rem" }}
    >
      {socialIconData.map((social, index) => (
        <li className="mx-2 " key={index}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center text-decoration-none"
          >
            <Image
              src={social.icon}
              alt={social.icon}
              width={100}
              height={100}
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcon;
