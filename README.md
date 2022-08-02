<p align="center">
  <a href="https://www.ProAngular.com" target="_blank">
    <img src="src/assets/images/pro-angular-logo.png" />
  </a>
  <h1 align="center">
    <a href="https://www.ProAngular.com" target="_blank">
      Pro Angular
    </a>: Scroll Top Button
  </h1>
</p>

[![npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![GitHub](https://badgen.net/badge/icon/GitHub?icon=github&label)](https://github.com/ProAngular/ngx-scroll-top)
[![TypeScript](https://badgen.net/badge/icon/TypeScript?icon=typescript&label)](https://github.com/ProAngular/ngx-scroll-top/search?l=typescript)
[![npm Version](https://badge.fury.io/js/@proangular%2Fngx-scroll-top.svg)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![Node Version](https://badgen.net/npm/node/@proangular/ngx-scroll-top)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![Package Downloads](https://badgen.net/npm/dw/@proangular/ngx-scroll-top)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![Size](https://img.shields.io/bundlephobia/minzip/@proangular/ngx-scroll-top.svg)](https://bundlephobia.com/result?p=ProAngular/ngx-scroll-top)
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
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Component API](#api)
- [Compatibility](#compatibility)
- [Issues & Contribution](#development)
- [Donations](#donations)
- [License](#license)

<a name="description"/>

## Description

Configurable, lightweight back to top button for Angular projects.

<a name="demo"/>

## Demo

<p align="center">
  <img src="src/assets/images/demo-scroll-top.gif" />
</p>

<a name="installation"/>

## Installation

```bash
ng add @proangular/ngx-scroll-top@latest
```
or
```bash
npm install @proangular/ngx-scroll-top --save
```

Import `NgxScrollTopModule` where needed
```diff
...
+ import { NgxScrollTopModule } from '@proangular/ngx-scroll-top';
...

@NgModule({
  imports: [
    ...
+   NgxScrollTopModule
  ],
  ...
})
export class AppModule { }
```

<a name="dependencies"/>

## Dependencies

### Styling UX - Angular Material

 You should have an Angular Material theme set up prior to using this. It's also possible to use this without an angular theme and style it yourself entirely!

More information on theming Angular Material: https://material.angular.io/guide/theming

<a name="usage"/>

## Usage

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
>&#8686;</ngx-scroll-top>
```

<a name="api"/>

## Component API

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

<a name="compatibility"/>

## Compatibility

| Angular version | @proangular/ngx-scroll-top | Install                                    |
| --------------- | -------------------------- | ------------------------------------------ |
| v14             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@latest` |
| v13             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@latest` |
| v12             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@latest` |

<a name="development"/>

## Issues & Contribution

Please submit all issues, and feature requests here: [https://github.com/ProAngular/ngx-scroll-top/issues](https://github.com/ProAngular/ngx-scroll-top/issues)

Contribution:

1. Clone the repo and create a new branch:
  * `git clone https://github.com/ProAngular/ngx-scroll-top.git`
  * `git checkout -b username/feature-or-bug-description`
2. Bump up the version of package in `package.json` and `package-lock.json`, commit all changes, push.
  * `git add -A`
  * `git commit -m "My commit message"`
  * `git push origin username/feature-or-bug-description`
3. Submit code in published PR for review and approval. Add a good description and link any possible user stories or bugs.
  * [Create a new pull request](https://github.com/ProAngular/ngx-scroll-top/compare).
4. Allow CI actions to completely run and verify files.
5. Add/ping reviewers and await approval.

Thank you for any and all contributions!

<a name="donations"/>

## Donation

As a husband and father of four children, your donations mean the world to me! Any donations are greatly appreciated and keep me going!
* [https://www.paypal.me/CodyTolene](https://www.paypal.me/CodyTolene)
* [https://github.com/sponsors/ProAngular](https://github.com/sponsors/ProAngular)

<a name="license"/>

## License

Copyright &copy; 2022 [Cody Tolene](https://www.CodyTolene.com)

All content is licensed under the [MIT license].

[mit license]: LICENSE
