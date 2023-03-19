import { Suspense } from "react";
import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Container, Header } from "./Layout.styled";

const Layout = () => {
  return (
    <Container>
      <Header>
        <AppBar />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;