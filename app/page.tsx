"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import DataStrategy from "@/components/DataStrategy";
import ClientImpact from "@/components/ClientImpact";
import Education from "@/components/Education";
import BlogPress from "@/components/BlogPress";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";
import Login from "@/components/Login";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen executive-gradient flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-executive-gold/30 border-t-executive-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Show portfolio if authenticated
  return (
    <main className="min-h-screen executive-gradient">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <DataStrategy />
      <ClientImpact />
      <Experience />
      <Skills />
      <BlogPress />
      <Testimonials />
      <Education />
      <Contact />
      <AIChatbot />
    </main>
  );
}
