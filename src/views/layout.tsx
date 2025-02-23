import React, { type ReactNode } from 'react';

interface AppProps {
  content: ReactNode;
  metadata: {
    title: string;
  };
}

export const Layout: React.FC<AppProps> = (props: AppProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${props.metadata.title} -- Resumé`}</title>
        <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        <script src="https://unpkg.com/htmx.org@2.0.4"></script>
        <script
          src="https://kit.fontawesome.com/123eb529e8.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="/css/output.css" />
      </head>
      <body>
        <main className="font-firago hyphens-manual" id="page-content">
          <div
            className="
              p-6
              mx-auto
              page
              max-w-2xl
              print:max-w-letter
              md:max-w-letter md:h-letter
              xsm:p-8
              sm:p-9
              md:p-16
              bg-white
            "
          >
            {props.content}
          </div>
        </main>
      </body>
    </html>
  );
};
