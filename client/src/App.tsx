import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "./pages/Home";
import AISubscriptions from "./pages/AISubscriptions";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import ChatGPT from "./pages/tools/ChatGPT";
import Claude from "./pages/tools/Claude";
import Gemini from "./pages/tools/Gemini";
import Grammarly from "./pages/tools/Grammarly";
import Canva from "./pages/tools/Canva";
import Midjourney from "./pages/tools/Midjourney";
import Perplexity from "./pages/tools/Perplexity";
import Grok from "./pages/tools/Grok";
import Copilot from "./pages/tools/Copilot";
import Vault from "./pages/tools/Vault";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ai-subscriptions" component={AISubscriptions} />
        <Route path="/services" component={Services} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/start-a-project" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/tools/chatgpt" component={ChatGPT} />
        <Route path="/tools/claude" component={Claude} />
        <Route path="/tools/gemini" component={Gemini} />
        <Route path="/tools/grammarly" component={Grammarly} />
        <Route path="/tools/canva" component={Canva} />
        <Route path="/tools/midjourney" component={Midjourney} />
        <Route path="/tools/perplexity" component={Perplexity} />
        <Route path="/tools/grok" component={Grok} />
        <Route path="/tools/copilot" component={Copilot} />
        <Route path="/tools/vault" component={Vault} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
