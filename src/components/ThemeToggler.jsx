import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const themeToggler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // alert('Theme toggled' + theme);
  };
  return (
    <p className='md:text-xl text-base'>
      <button
        className='bg-gray-200 dark:bg-gray-800 rounded-full p-2'
        onClick={themeToggler}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </p>
  );
}
