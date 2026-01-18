# React Context API – Complete Notes

## What is Context API?
Context API is a feature in React that allows us to **share data globally** across components without passing props manually at every level.

It helps to solve the problem of **props drilling**.

---

## Why Context API?
### Problem: Props Drilling
Passing data from parent to deeply nested child components using props even when intermediate components don’t need it.

### Solution: Context API
Context provides a way to store data in a **central place** and access it directly from any component.

---

## When to Use Context API
Use Context when data is:
- Global
- Needed by many components

### Common Use Cases
- Authentication (user data)
- Theme (light / dark mode)
- Language / localization
- Global settings
- Cart data (small to medium apps)

---

## Core Concepts of Context API

Context API has **4 main steps**:

1. Create Context  
2. Create Provider  
3. Wrap components with Provider  
4. Consume Context  

---

## 1. Creating Context

Context is usually created in a separate folder.

### Example: `ThemeContext.js`
```js
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
