/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  header,
  footer {
    background-color: #f7f7f7; // Light gray background
    padding: 16px;
    text-align: center;
  }
  main {
    flex: 1;
    padding: 16px;
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <div css={layoutStyles}>
    <header>
      {/* Header content */}
      <h1>CSV Editor</h1>
    </header>
    <main>{children}</main>
    <footer>
      {/* Footer content */}
      <p>Planto</p>
    </footer>
  </div>
);

export default Layout;
