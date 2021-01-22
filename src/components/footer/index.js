import React from "react"
import Logo from "../../assets/svgs/mobile-kya-logo.svg"
import "./footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <ul>
          {["Hot Deals", "Best Phones", "Budget Phones"].map((i, index) => {
            return (
              <div className="footer-links" key={index}>
                {i}
              </div>
            )
          })}
        </ul>
        <ul>
          {["Contact us", "Privacy Policy", "Terms & Conditions"].map(
            (i, index) => {
              return (
                <div className="footer-links" key={index}>
                  {i}
                </div>
              )
            }
          )}
        </ul>
        <ul>
          {["Flagship Phones", "New Phones", "Comming Soon"].map((i, index) => {
            return (
              <div className="footer-links" key={index}>
                {i}
              </div>
            )
          })}
        </ul>
        <ul>
          {["News", "Reviews", "Blog"].map((i, index) => {
            return (
              <div className="footer-links" key={index}>
                {i}
              </div>
            )
          })}
        </ul>
        <ul>
          {["Facebook", "Instagram", "Twitter"].map((i, index) => {
            return (
              <div className="footer-links" key={index}>
                {i}
              </div>
            )
          })}
        </ul>
      </div>
      <div className="footer-logo">
        <img src={Logo} alt="mobilekya" />
        <span className="copy-right"> &copy; 2020 - mobilekya.com</span>
      </div>
    </div>
  )
}
export default Footer
