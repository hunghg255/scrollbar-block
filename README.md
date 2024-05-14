<p align="center">
<a href="https://www.npmjs.com/package/scrollbar-block" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/material-symbols:app-blocking-outline-sharp.svg?color=%23ffdd61" alt="logo" width='100'/></a>
</p>

<p align="center">
  A tiny library to block the scrollbar of the body element ✨
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/scrollbar-block" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/scrollbar-block.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/scrollbar-block" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/scrollbar-block.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=scrollbar-block" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/scrollbar-block" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/scrollbar-block/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/scrollbar-block/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/scrollbar-block" alt="License" /></a>
</p>

## Live demo

[Live Demo](https://scrollbar-block.vercel.app/)

## Installation

[![NPM](https://nodei.co/npm/scrollbar-block.png?compact=true)](https://nodei.co/npm/scrollbar-block/)

## Install

```
npm i scrollbar-block@latest
```

## Use

```tsx
import React, { useEffect, useState } from 'react';
import { scrollbarBlock } from 'scrollbar-block';

function Modal({ open, children }) {
  const dialogRef = React.useRef(null);
  const unlockScrollbars = React.useRef(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (dialogNode) {
      if (open) {
        dialogNode.showModal();
        unlockScrollbars.current = lockScrollbars();
      } else {
        dialogNode.close();
        unlockScrollbars.current?.();
      }
    }
  }, [open]);

  return <dialog ref={dialogRef}>{children}</dialog>;
}
```

### About

<a href="https://www.buymeacoffee.com/hunghg255" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Gia Hung – [hung.hg](https://hung.thedev.id)
