# Chain Service Solutions

Landing page for CSS Cloud Solutions with functional contact form.

## 📧 Email Setup

The contact form uses Formspree to send emails to multiple recipients.

### Setup Instructions:
1. Create a Formspree account at https://formspree.io
2. Create a new form and get your endpoint URL
3. Update the form action in `src/components/Base/Header.astro`
4. Configure email recipients in Formspree dashboard

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
