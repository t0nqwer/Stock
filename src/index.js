import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { AppContextProvider } from "./contexts/AppContext";
import { DataContextProvider } from "./contexts/DataContext";
import { PrismaClient } from "./database/generated/client";

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkWFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSHxadERmW3xcdXRdRg==;Mgo+DSMBPh8sVXJ0S0J+XE9AclRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0dqW35bcndXQ2JeUQ==;ORg4AjUWIQA/Gnt2VVhkQlFacltJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRhUH1fdXZWRGVfVEQ=;MTAyNjQ0MEAzMjMwMmUzNDJlMzBOc3RZdzh4MTJnTGtMc2MyVzR5WjFGNWxGYjY4U3NVNkhQbkdBajZNZEQ4PQ==;MTAyNjQ0MUAzMjMwMmUzNDJlMzBvRW5LMFVlUUdKTDcxQ1h0Qmh3VlQwYTRWREZXQUNKT1dCVEkvQ2ZRdnJFPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtGVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViW3ZccXFXRWJaUUZx;MTAyNjQ0M0AzMjMwMmUzNDJlMzBEZDNndURTMDJCWjVrdVhxU0d5Nys3QlEvWS8rVkM5NjRaNWVTNFlCM1lvPQ==;MTAyNjQ0NEAzMjMwMmUzNDJlMzBPRnFGWDZ2elJYenJneVJnbUhBUTRPdUtkSDVPSFpjaldTLzAweUpiTUJ3PQ==;Mgo+DSMBMAY9C3t2VVhkQlFacltJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRhUH1fdXZWRGZUUkY=;MTAyNjQ0NkAzMjMwMmUzNDJlMzBlbm5ONHRkWENVcUsydWkzYXl4WFBwNE8vZTY2dHNwS2ZzbURCY2pHNUZvPQ==;MTAyNjQ0N0AzMjMwMmUzNDJlMzBvZjFwaW9NZUlWNnB0N3gvYXdlZmdCK2tJNnRvSzAvRVJsU1I3OFVjci9nPQ==;MTAyNjQ0OEAzMjMwMmUzNDJlMzBEZDNndURTMDJCWjVrdVhxU0d5Nys3QlEvWS8rVkM5NjRaNWVTNFlCM1lvPQ=="
);
const container = document.getElementById("electron");
const root = createRoot(container);
root.render(
  <AppContextProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </AppContextProvider>
);
