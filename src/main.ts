import "./style.css";
import { linkedinQR, githubQR } from "./qr";

const app = document.querySelector<HTMLDivElement>("#app")!;

function createContainer(
  id: string,
  buttonId: string,
  buttonText: string,
): HTMLDivElement {
  const container = document.createElement("div");
  container.id = id;
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.marginRight = "40px";

  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = buttonText;
  container.appendChild(button);

  button.addEventListener("click", () => {
    switch (buttonId) {
      case "download-linkedin":
        linkedinQR.download({ name: buttonId, extension: "png" });
        break;
      case "download-github":
        githubQR.download({ name: buttonId, extension: "png" });
        break;
    }
});

  return container;
}

// contenedores
const linkedinContainer = createContainer(
  "linkedin-container",
  "download-linkedin",
  "Descargar LinkedIn",
);
const githubContainer = createContainer(
  "github-container",
  "download-github",
  "Descargar GitHub",
);

// añadir al DOM
app.appendChild(linkedinContainer);
app.appendChild(githubContainer);

// render QR
linkedinQR.append(linkedinContainer);
githubQR.append(githubContainer);
