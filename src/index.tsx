import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

async function bootstrap() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }

  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

bootstrap();