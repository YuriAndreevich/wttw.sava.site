import React from 'react';

function Container({ children, className }) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

export default Container;
