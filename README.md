# Be The Hero
Desenvolvimento para aprendizagem em JavaScript com a Semana Omnistack 11 da Rocketseat

## Configurar VSCode:

### Configuração *`settings.json`*:

```javascript
{
    "workbench.iconTheme": "material-icon-theme",
    //"explorer.confirmDelete": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "workbench.colorTheme": "Dracula",
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "vue-html": "html",
        "razor": "html",
        "plaintext": "jade"
    },
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "colorInfo.fields": [
        "hex"
    ],
    "colorInfo.excludedFields": [],
    "editor.renderIndentGuides": false,
    "editor.fontSize": 14,
    "editor.rulers": [
        80,
        110
    ],
    "editor.renderLineHighlight": "gutter",
    "editor.tabSize": 2,
    "terminal.integrated.fontSize": 14,
    "breadcrumbs.enabled": true,
    // ESLint settings
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "files.eol": "\n",
}
```

### Extensões: 

* Auto Close Tag
* Bookmarks
* Color Info
* Debugger for Chrome
* Dracula Official
* ESLint
* Git History
* Git Lens
* Guides
* HTML Snippets
* Live Server
* Prettier - Code formatter
* Rainbow Brackets
* Rocketseat React Native
* Rocketseat ReactJS
* vscode-icons
* Color Highlight


## Node.js
### Instalação Express:
> yarn add express

### Instalando Sqlite:
> yarn add sqlite3

### Instalação Knex.Js:
> yarn add knex

> yarn knex init

#### * Criando Migration:
> knex migrate:make migration_name (ex: yarn knex migrate:make create_ongs)

#### * Executar Migration:
> yarn knex migrate:latest

### Instalando e configurando ESLint:
> yarn add eslint -D

### Iniciando ESLint:
> yarn eslint --init
? How would you like to use ESLint? 
*  To check syntax only 
*  To check syntax and find problems 
* ❯ **To check syntax, find problems, and enforce code style**

? What type of modules does your project use? 
* ❯ **JavaScript modules (import/export)**
*  CommonJS (require/exports) 
*  None of these

? Which framework does your project use? (Use arrow keys)
* React
* Vue.js 
* ❯ **None of these**

? Does your project use TypeScript? (y/N) : **N**

? Where does your code run? 
*  ◯ Browser
* ❯◯ Node
 
How would you like to define a style for your project? (Use arrow keys)
* ❯ **Use a popular style guide**
*  Answer questions about your style 
*  Inspect your JavaScript file(s)

? Which style guide do you want to follow? (Use arrow keys)
* ❯ **Airbnb (https://github.com/airbnb/javascript)**
*  Standard (https://github.com/standard/standard) 
*  Google (https://github.com/google/eslint-config-google)

? What format do you want your config file to be in? (Use arrow keys)
* ❯ **JavaScript**
*  YAML 
*  JSON

> yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint eslint-plugin-jest -D

cria um arquivo: *`.eslintrc.js`*:

```javascript
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['jest'],
  rules: {
    camelcase: 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
```

cria um arquivo: *`.prettierrc`*:

```javascript
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```
### Instalando Celebrate (Fazer validações do Request):
> yarn add celebrate

### Instalando Jest:
> yarn add jest

> yarn jest --init

√ Would you like to use Jest when running "test" script in "package.json"? ❯ **yes**
√ Choose the test environment that will be used for testing » ❯ **node**
√ Do you want Jest to add coverage reports? ❯ **no**
√ Automatically clear mock calls and instances between every test? ❯ **yes**


## React

### Criando uma aplicação base com React criado pelo Facebook:
> yarn create react-app frontend
> npx create-react-app frontend

### Configuração para roteamento de páginas dentro do React
> yarn add react-router-dom

### Pacote de Ícones para React:
> yarn add react-icons

### Instalando e configurando ESLint:
> yarn add eslint -D

### Iniciando ESLint:
> yarn eslint --init
? How would you like to use ESLint? 
*  To check syntax only 
*  To check syntax and find problems 
* ❯ **To check syntax, find problems, and enforce code style**

? What type of modules does your project use? 
* ❯ **JavaScript modules (import/export)**
*  CommonJS (require/exports) 
*  None of these

? Which framework does your project use? (Use arrow keys)
* ❯ **React**
*  Vue.js 
*  None of these

? Does your project use TypeScript? (y/N) : **N**

? Where does your code run? 
* ❯◯ Browser
*  ◯ Node
 
How would you like to define a style for your project? (Use arrow keys)
* ❯ **Use a popular style guide**
*  Answer questions about your style 
*  Inspect your JavaScript file(s)

? Which style guide do you want to follow? (Use arrow keys)
* ❯ **Airbnb (https://github.com/airbnb/javascript)**
*  Standard (https://github.com/standard/standard) 
*  Google (https://github.com/google/eslint-config-google)

? What format do you want your config file to be in? (Use arrow keys)
* ❯ **JavaScript**
*  YAML 
*  JSON

> yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

cria um arquivo: *`.eslintrc.js`*:

```javascript
module.exports = {
  env: {
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-console": "off"
  }
};
```

cria um arquivo: *`.prettierrc`*:

```javascript
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```
