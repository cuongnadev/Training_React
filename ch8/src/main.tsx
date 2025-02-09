import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

// lazy loading
const App = lazy(() => import("./App"));
const root = document.getElementById("app");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>
  );
}
