import { useState } from "react";

export default function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return { menuOpen, toggleMenu, closeMenu };
}
