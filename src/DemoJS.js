/* eslint-disable */
//json test object
var jsonObject = {
  // 自定义属性1
  one: "one",
  // 自定义属性2
  propTwo: "propTwo",
  // 自定义方法属性
  method1: function(msg) {
    console.log(message)
  }
}

// 自己定义的对象，在其后输入 . 试试
jsonObject

// 内置javascript对象
Math

const promise = new Promise(resolve => resolve())
promise

// 内置浏览器对象
console

// B类
ctx
lodash
React
ReactDOM
// moment
// Antd
// BackstageService

/**
 * Description of this fn
 * @param {int} a - first number
 * @param {decimal} b - second number
 * @param {number} [c] - third number to include
 * @param {bool} [useSum=false] - pass true to use sum instead of product
 * @returns {number} the product of the passed parameters
 */
function TestFn(a, b, c, useSum) {
  if (useSum === true) {
    if (c) return a + b + c
    return a + b
  }
  if (c) return a * b * c
  return a * b
}

//place cursor inside of parenthesis to see argument hints
var tmp = TestFn(100, 200)

/**
 * test function with object as argument and jsDoc comments that describe the object properties
 * @param {object} obj
 * @param {bool} [obj.boolProp=false] - bool property
 * @param {array} [obj.arrayProp] - array property
 * @param {string} [obj.stringProp=default string] - string property with default
 * @returns {object} passed object with default values set where properties are missing
 */
function TestObjectArg(obj) {
  if (typeof obj !== "object") {
    throw new Error("obj parameter is required and must be an object")
  }
  if (!obj.boolProp) {
    obj.boolProp = false
  }
  if (!Array.isArray(obj.arrayProp)) {
    obj.arrayProp = []
  }
  if (typeof obj.stringProp !== "string") {
    obj.stringProp = "default string"
  }
  return obj
}

//place cursor inside of parenthesis to see advanced object arg hints from comments
TestObjectArg()
