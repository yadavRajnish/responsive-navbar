import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const path = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = navRef.current;

    if (!navbar) return;
    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function toggleNavbar() {
    setIsNavbarOpen((prev) => !prev);
  }

  function handleClickOutside(event: MouseEvent) {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsNavbarOpen(false);
    }
  }

  function handleLinkClick() {
    setIsNavbarOpen(false);
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar navbar-expand-lg ${
          path === "/" ? "navbar-home" : ""
        }`}
      >
        <div className="container">
          <Link href="/">
            <div
              style={{
                height: "60px",
                width: "160px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundImage: "url(/rdb_logo-small.webp)",
              }}
              className="logo-responsive"
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
            aria-expanded={isNavbarOpen ? true : false}
            onClick={toggleNavbar}
          >
            <span className="icon-bar d-flex justify-content-center align-items-center border-0">
              <IoMenu className="text-white" />
            </span>
          </button>

          <div
            className={`collapse navbar-collapse  ${
              isNavbarOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  <span className="rolling-text text-capitalize  fz-15 ">
                    About
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  <span className="rolling-text text-capitalize fz-14 ">
                    Contact Us
                  </span>
                </Link>
              </li>

              <li className="d-flex align-items-center gap-2 nav-link">
                <i
                  className="fa fa-phone"
                  style={{
                    color: "var(--golden)",
                    fontSize: "28px",
                    marginRight: "6px",
                  }}
                ></i>
                <span>
                  <span className="d-block fz-10">Contant us</span>
                  <span className="fz-18" style={{ fontWeight: "medium" }}>
                    <Link href="tel:+91 7412589630">+91 7412589630</Link>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
