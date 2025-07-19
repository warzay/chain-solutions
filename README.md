# Chain Service Solutions

Landing page for CSS Cloud Solutions with functional contact form.

## 📧 Email Setup

The contact form is configured to send emails to: `aaafwalex@aol.com`, `craig@chain-serve.com`, `michael@chain-serve.com`, `a.zayets@gmail.com`. 

### Option 1: Gmail (recommended)
1. Configure Gmail with two-factor authentication
2. Create an app password
3. Update `src/pages/api/contact.ts` with your credentials

### Option 2: Formspree (easier)
1. Register at https://formspree.io
2. Create a form and get the endpoint
3. Update `src/pages/api/contact-formspree.ts`
4. Change the form action in `Header.astro` to `/api/contact-formspree`

Detailed instructions in `EMAIL_SETUP.md` file

## 🚀 Project Structure

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   └── api/
│   │       ├── contact.ts
│   │       └── contact-formspree.ts
│   ├── scripts/
│   ├── styles/
│   └── types/
├── astro.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
