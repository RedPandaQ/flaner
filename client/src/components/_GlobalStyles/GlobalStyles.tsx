import React from 'react';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['cyrillic'] });

const GlobalStyles = () => {
  return (
    <style jsx global>{`
      html {
        font-family: ${openSans.style.fontFamily};
      }
    `}</style>
  );
};

GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
