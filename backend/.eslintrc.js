module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    camelcase: 'off',
  },
};
//http://abneroliveira.eti.br/configurar-eslint-e-o-prettier-no-seu-projeto-node-reactjs-e-react-native/
