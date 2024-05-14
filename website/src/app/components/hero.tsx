'use client';

import { GithubIcon } from './GithubIcon';
import { codeToHtml } from 'shiki';
import { useEffect, useState } from 'react';
import { Example } from '@/app/components/Example';

const exampleCode = `
'use client';

import React, { useEffect, useState } from 'react';
import { scrollbarBlock } from 'scrollbar-block';

function Modal({ open, children }) {
  const dialogRef = React.useRef(null)
  const unlockScrollbars = React.useRef(null)

  useEffect(() => {
    const dialogNode = dialogRef.current
    if (dialogNode) {
      if (open) {
        dialogNode.showModal()
        unlockScrollbars.current = lockScrollbars()
      } else {
        dialogNode.close()
        unlockScrollbars.current?.()
      }
    }
  }, [open])

  return <dialog ref={dialogRef}>{children}</dialog>
}
`;

function Logo({ src }: { src: string }) {
  return <img src={src} className="h-16 inline-block" />;
}

function Code({ children, lang = 'javascript' }: { children: string; lang?: string }) {
  const [code, setcode] = useState('');

  useEffect(() => {
    const fetchCode = async () => {
      const html = await codeToHtml(children, {
        lang: lang,
        theme: 'vitesse-light',
      });
      setcode(html);
    };
    fetchCode();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: code }}></div>;
}

export function Hero() {
  return (
    <div className="bg-stone-50 w-screen min-h-screen">
      <div className="max-w-screen-lg mx-auto py-6 px-4 space-y-4">
        <div className="flex items-start sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl font-semibold">scrollbar-block</h1>
            <div className="text-stone-600">A tiny library to block the scrollbar of the body element</div>
          </div>
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/hunghg255/scrollbar-block"
              target="_blank"
              className="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-colors"
            >
              <GithubIcon className="size-4 mr-1" />
              Github
            </a>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Installation</h2>
          <Code lang="bash">npm install scrollbar-block</Code>
        </div>

        <div className="py-4">
          <h2 className="mb-[10px]">Example: Click open modal</h2>
          <Example />
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{exampleCode}</Code>
        </div>
      </div>
    </div>
  );
}
