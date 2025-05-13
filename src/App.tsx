
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SymbolsPage from "./pages/symbols/SymbolsPage";
import SymbolDetailPage from "./pages/symbols/SymbolDetailPage";
import DreamsPage from "./pages/dreams/DreamsPage";
import DreamDetailPage from "./pages/dreams/DreamDetailPage";
import AnalysisPage from "./pages/analysis/AnalysisPage";
import UserDreamsPage from "./pages/dreams/UserDreamsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/y-nghia-bieu-tuong" element={<SymbolsPage />} />
            <Route path="/y-nghia-bieu-tuong/:slug" element={<SymbolDetailPage />} />
            <Route path="/y-nghia-giac-mo" element={<DreamsPage />} />
            <Route path="/y-nghia-giac-mo/:slug" element={<DreamDetailPage />} />
            <Route path="/phan-tich-giac-mo" element={<AnalysisPage />} />
            <Route path="/giac-mo-cua-toi" element={<UserDreamsPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
