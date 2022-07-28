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

[![npm version](https://badge.fury.io/js/@proangular%2Fngx-scroll-top.svg)](https://badge.fury.io/js/@proangular%2Fngx-scroll-top)
[![NPM Downloads](https://img.shields.io/amo/dw/@proangular%252Fngx-scroll-top.svg)](https://www.npmjs.com/@proangular/ngx-scroll-top)
[![Join the chat at https://gitter.im/ProAngular/community](https://badges.gitter.im/ProAngular/lobby.svg)](https://gitter.im/ProAngular/community)
[![Verify and Deploy to GitHub Packages](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-gpr.yml/badge.svg)](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-gpr.yml)
[![Verify and Deploy to npmjs](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-npmjs.yml/badge.svg)](https://github.com/ProAngular/ngx-scroll-top/actions/workflows/on-merge-main-deploy-npmjs.yml)

# Description

Configurable, lightweight back to top button for Angular projects.

# Compatibility

| Angular version | @proangular/ngx-scroll-top | Install                                    |
| --------------- | -------------------------- | ------------------------------------------ |
| v14             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@latest` |
| v13             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@latest` |
| v12             | v1.x.x                     | `ng add @proangular/ngx-scroll-top@latest` |

# Demo

<p align="center">
  <img src="src/assets/images/demo-scroll-top.gif" />
</p>

# Usage

Install package
```bash
npm install @proangular/ngx-scroll-top --save
```

Import package
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

Use package
```html
<ngx-scroll-top></ngx-scroll-top>
```

# Component API

| Input                  | Value Typing          | Default Value      | Description                                                                                                                                        |
| ---------------------- | --------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **backgroundColor**    | string                | `'#1775d1'` (blue) | Background color of the back to top button (hex string).                                                                                           |
| **bottomOffset**       | string \| number      | `'0px'`            | Offset `px` from bottom of page when scrolled to bottom. For example this can be used to make sure the back to top button never overlaps a footer. |
| **displayAtYPosition** | string \| number      | `'420px'`          | The back to top button will not be displayed until the user scrolls to the provided Y (vertical `px`) coordinate on the page.                      |
| **position**           | `'left'` \| `'right'` | `'right'`          | Position on-screen where the back to top button is displayed.                                                                                      |
| **styleHeight**        | string                | `'25px'`           | Height of back to top button in string px format.                                                                                                  |
| **styleWidth**         | string                | `'25px'`           | Width of back to top button in string px format.                                                                                                   |
| **styleZIndex**        | number                | `999`              | Style the `z-index` for the back to top button as needed for correct layer height adjustment. This can be useful when working with sticky headers. |

# Example(s)

```html
<ngx-scroll-top
  backgroundColor="black"
  [bottomOffset]="footerHeightPx || 200"
  displayAtYPosition="250px"
  position="left"
  styleHeight="30px"
  styleWidth="30px"
  [styleZIndex]="500"
>
  ↑
</ngx-scroll-top>
```

# Development

1. Pull, create new branch, add changes.
2. Bump version of package in `package.json` and `package-lock.json`, commit all changes, push.
3. Submit code in published PR for review and approval. 
4. Allow CI actions to completely run and verify files.

Thank you for your contributions!

# Donation

As a husband and father of four children, your donations mean the world to me! Any donations are greatly appreciated and keep me going!

[https://www.paypal.me/CodyTolene](https://www.paypal.me/CodyTolene)
[https://github.com/sponsors/ProAngular](https://github.com/sponsors/ProAngular)

# License

Copyright &copy; 2022 [Cody Tolene](https://www.CodyTolene.com)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
