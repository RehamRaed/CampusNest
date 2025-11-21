import { useState } from "react";

export interface UseMenuReturn {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export default function useMenu(): UseMenuReturn {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return { menuOpen, toggleMenu, closeMenu };
}
