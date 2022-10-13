import Header from './header';
import Image from 'next/image';
import ALink from './a-link';
import { useState, useEffect } from 'react';

export default function Layout({ children, showFeed = true }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setDarkMode(e.matches));
  
    // Setup dark/light mode for the first time
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
  
    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    }
  }, []);

  const filename = darkMode ? 'rss-white' : 'rss';
  const image = `/images/${filename}.png`
  
  return (
    <>
      <div className="sm:mx-auto mx-3 sm:max-w-xl md:max-w-2xl 2xl:max-w-3xl mb-20 lg:mb-40 xl:mb-60">
        <Header />
        {children}

        {
          showFeed
          ? <div className="mt-14 sm:mt-24 text-sm text-right mr-4">
                <ALink href="/rss"><span><Image src={image} width="10" height="10"></Image> Feeds</span></ALink>
            </div>
          : null
        }
      </div>


    </>
  );
}
