module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'indent': ['error', 2],// 缩进用tab
    'no-tabs': 0,
    'one-var': 0,  //两个变量可以用一个var声明
    'no-trailing-spaces': 0,
    'no-useless-escape': 0,
    'no-unused-vars': 1,  //未使用的变量警告
    'eqeqeq': 0,
    'comma-dangle': [0, 'always'], //逗号结尾
    'semi': [0, 'always'], // 语句强制分号结尾
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-multiple-empty-lines': 1,  // 多个空格
    'no-redeclare': 2, // 禁止重复声明变量
    'quotes': ['off'],  //单双引号
    'spaced-comment': 0, // //注释后加空格
    'space-before-blocks': 0, //  在代码块前加空格 eg:if() {}
    'padded-blocks': 0, //=>方法后面加空格
    'arrow-spacing':0, // =>方法后面加空格
    'space-infix-ops': 0,  // && 加空格
    'keyword-spacing': 0,//关键字后面空格
    'no-var': 0,//使用var变量
    'block-spacing':0,//大括号后面空格
    'space-before-function-paren':0,// 方法后面空格
    'comma-spacing':0//逗号后面空格
  },
}
