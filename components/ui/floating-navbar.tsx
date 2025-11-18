import React, { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  link: string; // The ID of the section to scroll to, e.g., '#home'
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  onNavItemClick: (id: string) => void;
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, onNavItemClick, className }) => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      // Show nav if scrolling up and past the hero section, hide if scrolling down
      if (currentScrollY > 200) {
        if (currentScrollY < lastScrollY) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    onNavItemClick(link.substring(1)); // Remove '#'
  };

  return (
    <div
      className={`
        fixed top-6 inset-x-0 max-w-fit mx-auto z-50
        transition-transform duration-300 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-24'}
        ${className}
      `}
      aria-hidden={!visible}
    >
      <nav className="flex items-center gap-1 p-2 rounded-full glass-card border-white/10 glow-primary shadow-lg">
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => handleClick(e, navItem.link)}
            className="flex items-center space-x-2 text-neutral-300 hover:text-blue-300 transition-colors px-4 py-2 rounded-full cursor-pointer hover:bg-white/5"
            title={navItem.name}
          >
            {navItem.icon}
            <span className="hidden sm:inline-block text-sm font-medium">{navItem.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
