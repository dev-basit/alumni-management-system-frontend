import { Route, Routes } from "react-router-dom";

import { PrivateRoutes } from "./utils/validatePermissions";
import { links } from "./constants/routes";

function AppRoutes() {
  return (
    <Routes>
      {links.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            {...route?.others}
            element={
              <PrivateRoutes permissions={route.permissions}>{<route.component />}</PrivateRoutes>
            }
          />
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
