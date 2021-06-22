# NGX Skeleton loader

[![Dependency Status](https://david-dm.org/willmendesneto/ngx-if-skeleton-loader.svg)](https://david-dm.org/willmendesneto/ngx-if-skeleton-loader)

[![NPM](https://nodei.co/npm/ngx-if-skeleton-loader.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ngx-if-skeleton-loader)
[![NPM](https://nodei.co/npm-dl/ngx-if-skeleton-loader.png?height=3&months=3)](https://npmjs.org/ngx-if-skeleton-loader)

## Why skeletons?

> This is a common concept, but why use this directive instead solve it via server-side rendering?

The idea of this component is make the process transparent and easier. So the main point is integrate this component with other tooling process, such as:

- Server-side rendering;
- Progressive rendering;
- Any other that you like :)

It's totally transparent for you and you can integrate easier in your application, improving your user experience 🎉

- [Demo](#demo)
- [Install](#install)
- [Setup](#setup)
- [Development](#development)
- [Contribute](#contribute)

## Demo

Try out our [demo on Stackblitz](https://stackblitz.com/edit/ngx-if-skeleton-loader-sample)!

## Install

You can get it on NPM installing `ngx-if-skeleton-loader` module as a project dependency.

```shell
npm install ngx-if-skeleton-loader --save
```

## Setup

You'll need to add `NgxSkeletonLoaderModule` to your application module. So that, the `<ngx-skeleton-loeader>` components will be accessible in your application.

```typescript
@NgModule({
  declarations: [
    YourAppComponent
  ],
  imports: [
    NgxSkeletonLoaderModule,
    ...
  ],
  providers: [],
  bootstrap: [YourAppComponent]
})

export class YourAppComponent {}

```

After that, you can use the `featureToggle` components in your templates, passing the configuration data into the component itself.

- `ngx-if-skeleton-loader`: Handle the skeleton animation and the skeleton styles of your app;

```html
<div class="item"><ngx-if-skeleton-loader count="5" appearance="circle"> </ngx-if-skeleton-loader></div>
```

## Development

### Run demo locally

1. This project uses [Angular CLI](https://cli.angular.io/) as base. That means you just need to run `npm start` and access the link `http://localhost:4200` in your browser

### Run tests

1. Run `npm test` for run tests. In case you want to test using watch, please use `npm run tdd`

### Publish

this project is using `np` package to publish, which makes things straightforward. EX: `np <patch|minor|major> --contents=dist/ngx-if-skeleton-loader`

> For more details, [please check np package on npmjs.com](https://www.npmjs.com/package/np)

## Contribute

For contributions, please follow the instructions in [CONTRIBUTING.md](https://github.com/willmendesneto/ngx-if-skeleton-loader/blob/master/CONTRIBUTING.md) file.

## Author

**Wilson Mendes (willmendesneto)**

- <https://plus.google.com/+WilsonMendes>
- <https://twitter.com/willmendesneto>
- <http://github.com/willmendesneto>
