## Github

https://github.com/jarek4/chefos-cleaning.git

## Developing

# src\lib\utils\constants.ts

validate:
APP_ENV = 'dev';
DEV_BASE_URL = 'http://localhost:5173';

# .env

validate:
DEV_GOOGLE_APPLICATION_CREDENTIALS=/path/to/google-secret.json

check security meta tags are ok for development (http instead https)!

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## PRODUCTION DEPLOYMENT important settings!

# .env

validate:
GOOGLE_APPLICATION_CREDENTIALS=/path/to/google-secret.json

# src\lib\utils\constants.ts

validate:
APP_ENV = 'prod';
PROD_BASE_URL = 'https://site-domain.com';

check security meta tags are ready for production!
