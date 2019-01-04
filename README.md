<p align="center">
<br/><br/>
<img src="https://raw.githubusercontent.com/adelonzeta/calculator-keys/master/logo.png" alt="Calculator Keys" />
<br/><br/>
<a href="https://www.npmjs.com/package/calculator-keys">
  <img src="https://img.shields.io/npm/v/calculator-keys.svg?colorB=4CC61E" alt="npm" />
</a>
<a href="https://travis-ci.org/adelonzeta/calculator-keys">
  <img src="https://img.shields.io/travis/adelonzeta/calculator-keys.svg" alt="build" />
</a>
<a href="https://codeclimate.com/github/adelonzeta/calculator-keys/maintainability">
  <img src="https://img.shields.io/codeclimate/maintainability/adelonzeta/calculator-keys.svg" alt="Maintainability" />
</a>
<a href="https://codeclimate.com/github/adelonzeta/calculator-keys/test_coverage">
  <img src="https://img.shields.io/codeclimate/coverage/adelonzeta/calculator-keys.svg" alt="Test Coverage" />
</a>
<br/><br/>
Just-add-sugar calculator functions.
</p>
<br/><br/>

## Installation
Using npm:
```shell
$ npm i --save calculator-keys
```
In your frontend project:
```javascript
import * as keys from 'calculator-keys'
```

## Basic Key Functions
* [`clear`](#clear)
* [`decimal`](#decimal)
* [`equals`](#equals)
* [`negation`](#negation)
* [`number`](#number)
* [`operation`](#operation)
* [`percent`](#percent)

## Clear
Clears the state properties.
```javascript
keys.clear()
```

### Returns
(object): Returns the state object with empty string properties.

### Example
```javascript
keys.clear()
// => {operand1: '', operand2: '', operator: ''}
```

## Decimal
Converts operands into a decimal number.
```javascript
keys.decimal({operand1, operand2, operator})
```

### Arguments
{operand1} (string): First operand. <br>
{operand2} (string): Second operand. <br>
{operator} (string): Operation to perform.

### Returns
(object): Returns a new state object.

### Example
```javascript
keys.decimal({operand1: '1', operand2: '', operator: ''})
// => {operand1: '1.', operand2: '', operator: ''}

keys.decimal({operand1: '1', operand2: '1', operator: 'ADD'})
// => {operand1: '1', operand2: '1.', 'ADD'}
```