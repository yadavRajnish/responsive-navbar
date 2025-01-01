import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import SocialIcon from "../social-icon/SocialIcon";

function Footer() {
  return (
    <footer className="bg-navy light-text">
      <div className="footer-container">
        <div className="container pb-60 pt-60 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div
                  className="tit mb-20"
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 600,
                  }}
                >
                  <h6>Address</h6>
                </div>
                <div className="light-text">
                  <p
                    className="light-text"
                    style={{
                      fontSize: "15px",
                      lineHeight: "26px",
                      fontWeight: 400,
                    }}
                  >
                    Plot No. T-1, Cama Estate, Walbhat Road, Goregaon East,
                    Mumbai - 400 063.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6
                    style={{
                      fontSize: "16px",
                      lineHeight: "19px",
                      fontWeight: 600,
                    }}
                  >
                    Get in touch
                  </h6>
                </div>
                <div
                  className="text"
                  style={{
                    fontSize: "15px",
                    lineHeight: "26px",
                    fontWeight: 400,
                  }}
                >
                  <div className="mb-10">
                    <Link href="mailto:info@rdbrothers.com">
                      info@rdbrothers.com
                    </Link>
                  </div>
                  <div className="">
                    {/* <li>
                      <Link href="tel:+91 9321711146">+91 9321711146</Link>
                    </li> */}
                    <li>
                      <Link href="tel:+91 9877737776">+91 9877737776</Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 600,
                  }}
                >
                  Search
                </h6>
              </div>
              <ul
                className="rest social-text"
                style={{
                  fontSize: "15px",
                  lineHeight: "26px",
                  fontWeight: 400,
                }}
              >
                <li>
                  <Link href="/realty">Realty</Link>
                </li>
                <li>
                  <Link href="/fracto">Fracto</Link>
                </li>
                <li>
                  <Link href="/movies">Movies</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 600,
                  }}
                >
                  Corporate
                </h6>
              </div>
              <ul
                className="rest social-text"
                style={{
                  fontSize: "15px",
                  lineHeight: "26px",
                  fontWeight: 400,
                }}
              >
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center text-center text-lg-left">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="logo">
                  <Link href="#">
                    <Image
                      src="/rdb_logo-small.webp"
                      className="w-100"
                      alt="rdb group"
                      width={800}
                      height={500}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <ul
                  className="d-none d-md-flex align-items-center justify-content-center"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {socialIconData.map((social, index) => (
                    <div
                      key={index}
                      className="social-media-icon"
                      // style={{
                      //   padding: "7px 5px",
                      //   backgroundColor: "var(--golden)",
                      //   color: "#fff",
                      //   margin: "5px",
                      // }}
                    >
                      <li key={index}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icons icon-golden p-2 d-inline-flex align-items-center text-decoration-none"
                          style={{
                            width: "40px",
                            height: "40px",
                            textAlign: "center",
                          }}
                        >
                          <i
                            className={`fab fa-${social.icon} `}
                            style={{
                              fontSize: "20px",
                              margin: "auto",
                              // background: "#fff",
                            }}
                          ></i>
                        </a>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="copyright d-flex justify-content-center justify-content-lg-end">
                  <div className="fz-13">
                    Copyright © 2024 All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const socialIconData = [
  {
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/rdbrothersproperty?igsh=MTRpbHowcHdlazlkMA",
    alt: "Instagram",
  },
  {
    icon: "fab fa-square-facebook",
    url: "https://www.facebook.com/RDBROTHERSPROPERTIES?mibextid=LQQJ4d",
    alt: "Facebook",
  },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/company/rd-brothers-property-consultant-llp/",
    alt: "LinkedIn",
  },
  {
    icon: "fab fa-square-youtube",
    url: "https://youtube.com/@r.d.brothersproperties?feature=shared",
    alt: "YouTube",
  },
  {
    icon: "fab fa-whatsapp",
    url: "https://api.whatsapp.com/send?phone=+919321711146&text=%20Need%20to%20enquire",
    alt: "YouTube",
  },
];
