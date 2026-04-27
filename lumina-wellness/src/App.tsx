/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, 
  Menu, 
  Instagram, 
  Facebook, 
  Twitter,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Opportunity from "./pages/Opportunity";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import LegalNotice from "./pages/LegalNotice";
import PartnerVoices from "./pages/PartnerVoices";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "ホーム", path: "/" },
    { name: "製品", path: "/products" },
    { name: "ビジネス", path: "/opportunity" },
    { name: "私たちについて", path: "/about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
            <Leaf size={24} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">Lumina</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground"}`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="rounded-full px-6" asChild>
            <Link to="/register">今すぐ参加</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`text-xl font-serif font-medium ${location.pathname === link.path ? "text-primary" : ""}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Separator />
                <Button className="w-full rounded-full py-6 text-lg" asChild>
                  <Link to="/register">今すぐ参加</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-white to-sky-50 pt-24 pb-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Leaf size={24} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-foreground">Lumina</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-xs">
              私たちは、真の健康と美しさを通じて、人々の生活に輝きをもたらすことを使命としています。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-foreground">リンク</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">製品一覧</Link></li>
              <li><Link to="/opportunity" className="hover:text-primary transition-colors">ビジネスモデル</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">会社概要</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">ニュース</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-foreground">サポート</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary transition-colors">よくある質問</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">お問い合わせ</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">プライバシーポリシー</Link></li>
              <li><Link to="/legal" className="hover:text-primary transition-colors">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-foreground">ニュースレター</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              最新の製品情報やビジネスのヒントをお届けします。
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="メールアドレス" 
                className="bg-white border-primary/20 text-foreground placeholder:text-muted-foreground/40 rounded-full" 
                type="email"
                aria-label="ニュースレター用メールアドレス"
              />
              <Button variant="default" className="rounded-full px-6 shrink-0" asChild>
                <Link to="/register">登録</Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Lumina Wellness Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/terms" className="hover:text-primary transition-colors">利用規約</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">クッキーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-amber-50 via-white to-sky-50 rounded-[60px] p-12 md:p-24 text-center border relative overflow-hidden"
        >
          {/* Hopeful decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,215,0,0.15),transparent_70%)]" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight text-foreground">
              あなたの新しい人生が、<br />ここから始まる。
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              美しさと健康、そして自分らしい働き方。Luminaと共に、一歩ずつ理想の未来を築きませんか？
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full px-16 h-16 text-xl font-bold shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to="/register">今すぐ無料で登録</Link>
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="text-sm font-medium">登録料無料</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="text-sm font-medium">ノルマなし</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="text-sm font-medium">充実の研修</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="text-sm font-medium">安心のサポート</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function AppShell() {
  const location = useLocation();
  const showCTA = location.pathname !== "/register";

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<LegalNotice />} />
          <Route path="/partners" element={<PartnerVoices />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
        {showCTA ? <CTA /> : null}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-primary/20">
        <AppShell />
      </div>
    </Router>
  );
}
