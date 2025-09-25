import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { Eye, Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Help Center', path: '/help' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <Eye className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Vistick</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-gentle hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button variant="outline" onClick={() => navigate("/signup")}>
            Sign In
          </Button>
          <Button variant="hero" onClick={() => navigate("/signup")}>
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="ml-auto flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 mr-2"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-9 w-9"
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-gentle"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-3 space-y-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/signup");
                }}
              >
                Sign In
              </Button>
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/signup");
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;