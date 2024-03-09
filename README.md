# Components

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- Salient is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation


## Getting started

Install the npm dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Building

```bash
npm run build
# Move the out directory to docs and create a .nojekyll file 
rm -rf docs && mv out docs && touch docs/.nojekyll
```

A new static site will be created in the `out` directory. Push to deploy.