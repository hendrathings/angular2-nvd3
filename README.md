# angular2-nvd3

[![NPM Version](https://img.shields.io/npm/v/angular2-nvd3.svg?style=flat)](https://www.npmjs.org/package/angular2-nvd3)
[![NPM license](http://img.shields.io/npm/l/angular2-nvd3.svg?style=flat)](https://www.npmjs.org/package/angular2-nvd3)
[![Dependency Status](https://david-dm.org/hendrathings/angular2-nvd3.svg)](https://david-dm.org/hendrathings/angular2-nvd3)


Create nvd3 with angular2 use directive or as a component.
This project has tested latest angular2 `v2.4.1`.
This project is reincarnation from [ng2-nvd3](https://github.com/krispo/ng2-nvd3).
If you are using nvd3 for angular2.RC take a look [ng2-nvd3](https://github.com/krispo/ng2-nvd3).

## Install

This node use some dependency of [@types](https://github.com/DefinitelyTyped/DefinitelyTyped) :

- @types/nvd3@^1.8.33
- @types/d3@^3.5.35
- d3@^3.5.17
- nvd3@^1.8.5

Most of people get chart background turn into black, make sure to include `nvd3.css` via transpiler `webpack` or `systemjs` or what your transpiler.

## Usage

Hopefully you already know how to use decorator, module, component, directive, input on angular2.

Include module in your root module of your target component decalaration via `NgModule`.

```js
import { NvD3Module } from 'angular2-nvd3';
....

@NgModule({
  ...
  imports: [ // import Angular's modules
    ...
    NvD3Module
    ...
  ],
  declarations: [
    ... // your component target to implement nvd3
  ]
  ...
})
```

then lets do awosome chart...

### Use as component

```js
@Component({
  ...
  template: `<div><app-nvd3 [options]="options" [data]="data"></app-nvd3></div>`
  ...
})
```

### Use as directive

In case you want to use as directive `appNvD3`.

```js
@Component({
  ...
  template: `<app-chart appNvD3 [options]="options" [data]="data"></app-chart>`
  ...
})
```

### Set option and data

all chaining function use ase json...

```js
    this.options = {
      chart: {
        type: 'lineChart',
        useInteractiveGuideline: true,
        height: 450,
        transitionDuration: 350,
        showLegend: false,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: (d) => { return d.x; },
        y: (d) => { return d.y; },
        xScale: d3.time.scale(),
        xAxis: {
          ticks: d3.time.months,
          tickFormat: (d) => {
              return d3.time.format('%b')(new Date(d));
          }
        },
        yAxis: {
          axisLabel: 'Gross volume',
          tickFormat: (d) => {
              if (d == null) {
                  return 0;
              }
              return d3.format('.02f')(d);
          },
          axisLabelDistance: 400
        }
      }
    }

    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
        ]
      }
    ];
```

you can set your callback:

```js
    this.options = {
      chart: {
        ...
        callback: () => {
          // do something maybe change background
        }
      }
    }
```

you rock....!!!

