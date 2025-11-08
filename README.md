<div align="center">
  <a href="https://www.ProAngular.com" target="_blank">
    <img src="https://raw.githubusercontent.com/ProAngular/ngx-scroll-top/refs/heads/main/public/images/pro-angular-logo.png" />
  </a>
  <h1 align="center">
    <a href="https://www.ProAngular.com" target="_blank">Pro Angular</a>: ngx-scroll-top
  </h1>
  <a align="center" href="https://github.com/ProAngular/ngx-scroll-top" target="_blank">
    View GitHub Repository
  </a>
  <p align="center">
    Configurable, lightweight back to top button for Angular projects.
  </p>
</div>

[![npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![GitHub](https://badgen.net/badge/icon/GitHub?icon=github&label)](https://github.com/ProAngular/ngx-scroll-top)
[![TypeScript](https://badgen.net/badge/icon/TypeScript?icon=typescript&label)](https://github.com/ProAngular/ngx-scroll-top/search?l=typescript)
[![npm Version](https://badge.fury.io/js/@proangular%2Fngx-scroll-top.svg)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![Node Version](https://badgen.net/npm/node/@proangular/ngx-scroll-top)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![Package Downloads](https://badgen.net/npm/dw/@proangular/ngx-scroll-top)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![Size](https://img.shields.io/bundlephobia/minzip/@proangular/ngx-scroll-top.svg)](https://bundlephobia.com/result?p=ProAngular/ngx-scroll-top)
[![Demo Status](https://badgen.net/badge/Demo/Online/green)](https://www.ProAngular.com/demos/ngx-scroll-top)
[![Website Status](https://img.shields.io/website?down_color=lightgrey&down_message=Offline&label=Website&up_color=green&up_message=Online&url=https%3A%2F%2Fwww.proangular.com)](https://www.proangular.com)
[![Gitter Chat](https://badges.gitter.im/ProAngular/lobby.svg)](https://gitter.im/ProAngular/community)
[![Discord Chat](https://img.shields.io/discord/1003103094588055552?label=Discord)](https://discord.com/channels/1003103094588055552)
[![Sponsors](https://img.shields.io/github/sponsors/proangular?label=Sponsors)](https://github.com/sponsors/ProAngular)
[![License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)
[![GitHub Package Status](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-gpr.yml/badge.svg)](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-gpr.yml)
[![npmjs Package Status](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-npmjs.yml/badge.svg)](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-npmjs.yml)

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Install Scroll Top Component](#install-scroll-top-component)
- [Usage](#usage)
- [Component API](#api)
- [Compatibility](#compatibility)
- [Issues & Contribution](#development)
- [Licensing](#licensing)
- [Wrapping Up](#wrapping-up)

## Description <a name="description"></a>

Configurable, lightweight back to top button for Angular projects.

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Demo <a name="demo"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/ProAngular/ngx-scroll-top/refs/heads/main/public/images/demo-scroll-top.gif" />
</p>

Live demo here:
[https://www.ProAngular.com/demos/ngx-scroll-top](https://www.ProAngular.com/demos/ngx-scroll-top)

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Installation <a name="installation"></a>

Using Node Package Manager ([NPM][url-node-js]) in a new terminal window run the
following commands to install the required dependencies.

### Prerequisites <a name="prerequisites"></a>

**Angular Material**

More information on theming Angular Material:
https://material.angular.io/guide/theming

```bash
ng add @angular/material
```

### Install Scroll Top Component <a name="install-scroll-top-component"></a>

```bash
ng add @proangular/ngx-scroll-top@latest
```

or

```bash
npm install @proangular/ngx-scroll-top --save
```

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Usage <a name="usage"></a>

Default (blue button with white icon)

```html
<ngx-scroll-top></ngx-scroll-top>
```

Customization with optional inputs and icon

```html
<ngx-scroll-top
  backgroundColor="#0D58C0"
  [bottomOffset]="footer.height"
  [displayAtYPosition]="1000"
  fontColor="#FFFAFA"
  fontSize="2rem"
  height="3rem"
  position="left"
  [zIndex]="1"
  width="3rem"
  >&#8686;</ngx-scroll-top
>
```

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Component API <a name="api"></a>

| Input                  | Value Typing          | Default Value           | Description                                                                                                                                        |
| ---------------------- | --------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **backgroundColor**    | string                | `'#0D58C0'` (dark-blue) | Background color of the back to top button. Define any `'x'` css property available for `'background-color: x'`.                                   |
| **bottomOffset**       | string \| number      | `'0px'`                 | Offset `px` from bottom of page when scrolled to bottom. For example this can be used to make sure the back to top button never overlaps a footer. |
| **displayAtYPosition** | string \| number      | `'420px'`               | The back to top button will not be displayed until the user scrolls to the provided Y (vertical `px`) coordinate on the page.                      |
| **fontColor**          | string                | `'#FFFFFF'` (white)     | The font color for the nested content within the back to top button. Define any `'x'` css property available for `'color: x'`.                     |
| **fontSize**           | string                | `'16px'`                | The font size for the nested content within the back to top button. Define any `'x'` css property available for `'font-size: x'`.                  |
| **height**             | string                | `'40px'`                | Height of back to top button in string px format.                                                                                                  |
| **position**           | `'left'` \| `'right'` | `'right'`               | Position on-screen where the back to top button is displayed.                                                                                      |
| **width**              | string                | `'40px'`                | Width of back to top button in string px format.                                                                                                   |
| **zIndex**             | number                | `999`                   | Style the `z-index` for the back to top button as needed for correct layer height adjustment. This can be useful when working with sticky headers. |

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Compatibility <a name="compatibility"></a>

| Angular version | @proangular/ngx-scroll-top | Install                                   |
| --------------- | -------------------------- | ----------------------------------------- |
| v20             | v20.X                      | `ng add @proangular/ngx-scroll-top@^20`   |
| v19             | v19.X                      | `ng add @proangular/ngx-scroll-top@^19`   |
| v18             | ------                     | Untested                                  |
| v17             | ------                     | Untested                                  |
| v16             | ------                     | Untested                                  |
| v15             | ------                     | Untested                                  |
| v14             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@1.1.8` |
| v13             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@1.1.8` |
| v12             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@1.1.8` |

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Issues & Contribution <a name="development"></a>

Please submit all issues, and feature requests here:
[https://github.com/ProAngular/ngx-scroll-top/issues](https://github.com/ProAngular/ngx-scroll-top/issues)

Contribution:

1. Clone the repo and create a new branch:

- `git clone https://github.com/ProAngular/ngx-scroll-top.git`
- `git checkout -b username/feature-or-bug-description`

2. Bump up the version of package in `package.json` and `package-lock.json`,
   commit all changes, push.

- `git add -A`
- `git commit -m "My commit message"`
- `git push origin username/feature-or-bug-description`

3. Submit code in published PR for review and approval. Add a good description
   and link any possible user stories or bugs.

- [Create a new pull request](https://github.com/ProAngular/ngx-scroll-top/compare).

4. Allow CI actions to completely run and verify files.
5. Add/ping reviewers and await approval.

Thank you for any and all contributions!

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Licensing <a name="licensing"></a>

This project is licensed under the **MIT** License. See the
[LICENSE](LICENSE.md) file for the pertaining license text.

`SPDX-License-Identifier: MIT`

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Wrapping Up <a name="wrapping-up"></a>

Thank you to the entire Angular team and community for such a great framework to
build upon. If you have any questions, please let me know by opening an issue
[here][url-new-issue].

| Type                                                                                                                                                  | Info                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| <img width="48" src="https://raw.githubusercontent.com/ProAngular/ngx-scroll-top/refs/heads/main/.github/images/ng-icons/email.svg" />                | webmaster@codytolene.com                                       |
| <img width="48" src="https://raw.githubusercontent.com/ProAngular/ngx-scroll-top/refs/heads/main/.github/images/simple-icons/github.svg" />           | https://github.com/sponsors/CodyTolene                         |
| <img width="48" src="https://raw.githubusercontent.com/ProAngular/ngx-scroll-top/refs/heads/main/.github/images/simple-icons/buymeacoffee.svg" />     | https://www.buymeacoffee.com/codytolene                        |
| <img width="48" src="https://raw.githubusercontent.com/ProAngular/ngx-scroll-top/refs/heads/main/.github/images/simple-icons/bitcoin-btc-logo.svg" /> | bc1qfx3lvspkj0q077u3gnrnxqkqwyvcku2nml86wmudy7yf2u8edmqq0a5vnt |

Fin. Happy programming friend!

Cody Tolene

<!-- LINKS -->

[url-new-issue]: https://github.com/ProAngular/ngx-scroll-top/issues
[url-node-js]: https://nodejs.org/
