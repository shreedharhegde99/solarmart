import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoadingPage from "./components/loading-page.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Suspense fallback={<LoadingPage />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</StrictMode>,
);
