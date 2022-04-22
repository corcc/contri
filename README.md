## Install

`yarn add -D github:corcc/contri`

`npm i github:corcc/contri --save-dev`

`pnpm add -D github:corcc/contri`

## Usage

`import { Cases, Vaccinations } from '@corcc/contri';`
`// import in TypeScript`

`const { Cases, Vaccinations } = require('@corcc/contri');`
`// import in NodeJS(JavaScript)`

`const name = {`

`case: Cases.Name('Jeju')`
`// 'Jeju'`

`vaccination: Vaccinations.Name('Jeju') {`
`// '제주특별자치도'`

`};`
