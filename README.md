<h1 align="center">Calculator Scripts</h1>
<p align="center">
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
$ npm i --save calculator-scripts
```
In your frontend project:
```javascript
import * as keys from 'calculator-scripts'
```

<br>

## Basic Key Functions
* [`clear`](#clear)
* [`decimal`](#decimal)
* [`equals`](#equals)
* [`negation`](#negation)
* [`number`](#number)
* [`operation`](#operation)
* [`percent`](#percent)

<br>

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

<br>

## Decimal
Converts active operand into a decimal number.
```javascript
keys.decimal({operand1, operand2, operator})
```

### Arguments
operand1 (string): First operand property. <br>
operand2 (string): Second operand property. <br>
operator (string): Operation to perform.

### Returns
(object): Returns a new state object with the converted operand.

### Example
```javascript
keys.decimal({operand1: '1', operand2: '', operator: ''})
// => {operand1: '1.', operand2: '', operator: ''}

keys.decimal({operand1: '1', operand2: '1', operator: 'ADD'})
// => {operand1: '1', operand2: '1.', 'ADD'}
```

<br>

## Equals
Performs calculation between operands.
```javascript
keys.equals({operand1, operand2, operator})
```

### Arguments
operand1 (string): First operand property. <br>
operand2 (string): Second operand property. <br>
operator (string): Operation to perform.

### Returns
(object): Returns a new state object with the result of the operation performed.

### Example
```javascript
keys.equals({operand1: '1', operand2: '1', operator: 'ADD'})
// => {operand1: '2', operand2: '', operator: ''}

keys.equals({operand1: '100', operand2: '10', operator: 'DIVIDE'})
// => {operand1: '10', operand2: '', ''}
```

<br>

## Negation
Converts the active operand into negative or positive number.
```javascript
keys.negation({operand1, operand2, operator})
```

### Arguments
operand1 (string): First operand property. <br>
operand2 (string): Second operand property. <br>
operator (string): Operation to perform.

### Returns
(object): Returns a new state object with the converted operand.

### Example
```javascript
keys.negation({operand1: '1', operand2: '', operator: ''})
// => {operand1: '-1', operand2: '', operator: ''}

keys.negation({operand1: '1', operand2: '-1', operator: 'ADD'})
// => {operand1: '1', operand2: '1', 'ADD'}
```

<br>

## Number
Appends a number to the state object.
```javascript
keys.number(number, {operand1, operand2, operator})
```

### Arguments
number (string): Number to append. <br>
operand1 (string): First operand property. <br>
operand2 (string): Second operand property. <br>
operator (string): Operation to perform.

### Returns
(object): Returns a new state object.

### Example
```javascript
keys.number('1', {operand1: '1', operand2: '', operator: ''})
// => {operand1: '11', operand2: '', operator: ''}

keys.number('4', {operand1: '1', operand2: '123', operator: 'ADD'})
// => {operand1: '1', operand2: '1234', 'ADD'}
```

<br>

## Operation
Saves the operation in the state object.
```javascript
keys.operation(newOperation, {operand1, operand2, operator})
```

### Arguments
newOperation (string): New operation to perform. <br>
operand1 (string): First operand property. <br>
operand2 (string): Second operand property. <br>
operator (string): Existing operation.

### Returns
(object): Returns a new state object.

### Example
```javascript
keys.operation('ADD', {operand1: '1', operand2: '', operator: ''})
// => {operand1: '1', operand2: '', operator: 'ADD'}

keys.operation('MULTIPLY', {operand1: '1', operand2: '1', operator: 'ADD'})
// => {operand1: '2', operand2: '', 'MULTIPLY'}
```

<br>

## Percent
Gets the percentage value of the active operand.
```javascript
keys.percent({operand1, operand2, operator})
```

### Arguments
operand1 (string): First operand property. <br>
operand2 (string): Second operand property. <br>
operator (string): Operation to perform.

### Returns
(object): Returns a new state object with the converted operand.

### Example
```javascript
keys.percent({operand1: '1', operand2: '', operator: ''})
// => {operand1: '0.01', operand2: '', operator: ''}

keys.decimal({operand1: '1', operand2: '1', operator: 'ADD'})
// => {operand1: '1', operand2: '0.01', 'ADD'}
```
