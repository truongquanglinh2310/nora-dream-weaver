
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
