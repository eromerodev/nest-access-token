# Access Token API
REST API that generates JWT access tokens

## Table of Content

- [Description](#description)
- [Technology Stack](#technology-stack)
- [Local Installation](#local-usage)
- [Usage](#usage)
- [License](#license)

---
## Description

REST API  with `NestJS` that generates JWT access tokens

<img align="center" src="./docs/images/swagger.png">

---

## Technology Stack

The core technology stack in this project is based on NestJS framework.

- `node`: v19.7.0
- `npm`: version 9.5.0
- `nestjs`: version 9.2.0

For the complete list of dependencies refer to `Package.json` file.

---
## Local Usage

In this section, you will see the tools required and steps to setup development environment for this project.


### **Installation**

Download the installer: https://nodejs.org/en/download/

1. Verify the Node.js installation with the following command: 

```bash
node --version
```

2. Clone the project repository 
3. Go into the project root folder
4. Installing project dependencies

```bash
npm i
```

### Run Locally

#### Start the API

```bash
# development
$ npm run start:dev
```

### Test

```bash
# unit tests
$ npm run test
```
---

## Usage

- `POST`: http://localhost:3000/api/v1/auth/token

<img align="center" src="./docs/images/access-token.png">

---

## License
MIT

<hr />
<div align="center">
    <samp>Happy Hacking!😎</samp>
</div>
