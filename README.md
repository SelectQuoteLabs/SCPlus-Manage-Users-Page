## Getting Started

This application was generated from a [create-next-app example](https://github.com/vercel/next.js/tree/canary/examples)

```bash
npx create-next-app . -e https://github.com/SelectQuoteLabs/ancillary-internal-app
```

This template repo should be used for internal ancillary applications.

An internal ancillary app is any application that is NOT exposed to the public internet and is NOT a CRM or Quote Tool.

Internal ancillary applications are expected to be deployed to AWS ECS.

## Initial Project Setup

The initial setup section is meant to be followed top down the first time you setup the app.

### GitHub or Bitbucket

Create a new repository

Ensure the default Production branch is set to `main`

Create the `develop` branch

> 💡 Ensure you have at least 2 branches, `develop` and `main`

### DevOps Build Out Process

Newly created applications require a DevOps Jira ticket to perform the "Build-Out" phase.

During the build-out phase, DevOps will configure Bitbucket, the pipelines, and ensure successful deployments to all three environment sites.

The ticket should be created using this [Jira ticket template](https://selectquote.atlassian.net/browse/DOP-2705).

### Local Tooling

Install local tooling such as `husky` and `lint-staged`:

```bash
npm install
```

### Environment Variables

#### Local Environment Variables

From the root of your projects source code, create a new file named .env.local

```bash
touch .env.local
```

Add the following environment variables to `.env.local`

```
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

The `NEXTAUTH_URL` should be the base URL and should be environment specific. Environments are localhost, dev, UAT, and production.

The `JWT_SECRET` can be any value. Preferably it's a [UUIDv4 generated value](https://www.uuidgenerator.net/version4)

The `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` values can be found inside the `local.yaml` file of our CRM codebases or within AWS Secrets Manager

> 💡 Include known Environment variables in the DevOps Build Out ticket

## Local Development

### Docker

This project depends on Docker to run the project locally and be deployed to AWS ECS

🐳 Ensure Docker for Mac/Windows is up-to-date

Run the development server:

```bash
npm run dev:local
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Troubleshooting

💥: `unknown shorthand flag: 'V' in -V`

👩🏼‍🔧: Update Docker for Mac/Windows then try again

## Authentication

[Next-Auth](https://next-auth.js.org/)
