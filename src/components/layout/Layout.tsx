import type { ReactNode } from 'react';

import Header from './Header';

type ILayoutProps = {
  meta: ReactNode;
  children?: ReactNode;
};

export default function Layout({ meta, children }: ILayoutProps) {
  return (
    <>
      {meta}
      <Header />
      {children}
      {/* <Header />
      <PreloadProvider>
        <div id='skip-nav'>{children}</div>
      </PreloadProvider>
      <Footer /> */}
    </>
  );
}
