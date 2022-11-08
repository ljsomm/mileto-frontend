import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import { ModalProvider } from "./contexts/ModalContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { UserProvider } from "./contexts/UserContext";
import { SectionProvider } from "./contexts/SectionContext";
import routes from "./routes";
import Private from "./routes/Private";
import Public from "./routes/Public";
import "./styles/global.css";

function recursiveRoutes(route, key) {
  if (route.children && route.children.length) {
    return (
      <Route path={route.path} key={key}>
        <Route
          index
          element={
            route.private ? (
              <Private component={<route.component title={route.title} />} />
            ) : route.public ? (
              <Public component={<route.component title={route.title} />} />
            ) : (
              <route.component title={route.title} />
            )
          }
        />
        {route.children.map((child, childKey) =>
          recursiveRoutes(child, childKey)
        )}
      </Route>
    );
  } else {
    return (
      <Route
        path={route.path}
        key={key}
        element={
          route.private ? (
            <Private component={<route.component title={route.title} />} />
          ) : route.public ? (
            <Public component={<route.component title={route.title} />} />
          ) : (
            <route.component title={route.title} />
          )
        }
      />
    );
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <UserProvider>
          <NotificationProvider>
              <ModalProvider>
                <DefaultLayout>
                  <Routes>
                    {routes.map((route, key) => recursiveRoutes(route, key))}
                  </Routes>
                </DefaultLayout>
              </ModalProvider>
          </NotificationProvider>
        </UserProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
};

export default App;
