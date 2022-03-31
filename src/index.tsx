import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = ReactDOMClient.createRoot(document.getElementById("root")!);

rootElement.render(<App />);
