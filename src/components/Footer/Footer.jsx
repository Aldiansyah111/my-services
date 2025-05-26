// import React from "react";

// export default function Footer() {
//   return (
//     <footer style={{
//       borderTop: "1px solid #ddd",
//       padding: "15px 20px",
//       textAlign: "center",
//       backgroundColor: "#f8f9fa",
//       marginTop: "auto"
//     }}>
//       <p>© 2025 AgencyName. All rights reserved.</p>
//     </footer>
//   );
// }



import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2025 AnAgency. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">📸</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">🐦</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">💼</a>
      </div>
    </footer>
  );
}


