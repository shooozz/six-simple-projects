// import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

import "./styles/index.css";

const queryClient = new QueryClient();

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
}
