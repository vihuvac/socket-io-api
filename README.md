# Socket.IO API

This is a simple POC to test `socket.io` with `express.js` locally. The API gets and sends back the received message.

---

## Table of Contents

- [System requirements](#system-requirements)
- [Getting started](#getting-started)
- [Additional resources](#additional-resources)

## System requirements

- Node.js **v18.0.0** or **higher**.
- Yarn **v1.22.0** or **higher**.

## Getting started

This POC does not include `dotenv`, so by default the project runs on port `4000`.

Clone the repo from GitLab.

```shell
git clone git@github.com:vihuvac/socket-io-api.git && cd socket-io-api
```

Install the project dependencies.

```shell
yarn install
```

Start everything up (development mode):

```shell
yarn dev
```

Run the app in debug mode:

```shell
yarn debug
```

---

## Additional resources

- [socket.io](https://socket.io/docs/v4/server-initialization/#with-express)
