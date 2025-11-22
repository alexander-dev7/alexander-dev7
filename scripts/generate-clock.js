const fs = require("fs");

// Set your timezone here:
const timeZone = "Europe/Moscow";

const now = new Date();
const time = now.toLocaleString("en-US", { timeZone });

const svg = `
<svg width="400" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="60" fill="black"/>
  <text x="20" y="38" font-size="24" fill="white">
    Current time: ${time}
  </text>
</svg>
`;

fs.writeFileSync("clock.svg", svg);
console.log("Clock SVG updated:", time);
