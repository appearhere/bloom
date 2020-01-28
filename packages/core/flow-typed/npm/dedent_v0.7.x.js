// flow-typed signature: 57b10473e7e412cc00271a7d0e5c5a63
// flow-typed version: c6154227d1/dedent_v0.7.x/flow_>=v0.104.x

// @flow

declare module 'dedent' {
  declare module.exports: (
    strings: string | Array<string>,
    ...values: Array<string>
  ) => string;
}
