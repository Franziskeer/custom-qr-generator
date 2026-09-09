import QRCodeStyling from "qr-code-styling";
import githubIcon from "simple-icons/icons/github.svg?url";
import portfolioIcon from "../assets/logo-avatar.svg";

export const linkedinQR = new QRCodeStyling({
  width: 300,
  height: 300,
  type: "svg",
  data: "https://www.linkedin.com/in/francisco-pinero-alpanes",
  image: "https://bofu.ca/cdn/shop/files/linkedin.svg?v=1703537499&width=100",
  dotsOptions: {
    color: "#000000",
    type: "rounded",
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#000000",
  },
  imageOptions: {
    margin: 5
  },
  margin: 10,
});

export const githubQR = new QRCodeStyling({
  width: 300,
  height: 300,
  type: "svg",
  data: "https://github.com/Franziskeer",
  image: githubIcon,
  dotsOptions: {
    color: "#000000",
    type: "rounded",
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#000000",
  },
  imageOptions: {
    margin: 5,
  },
  margin: 10,
});

export const portfolioQR = new QRCodeStyling({
  width: 300,
  height: 300,
  type: "svg",
  data: "https://franziskeer.github.io",
  image: portfolioIcon,
  dotsOptions: {
    color: "#000000",
    type: "rounded",
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#000000",
  },
  imageOptions: {
    margin: 5,
  },
  margin: 10,
});
