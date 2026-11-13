# JSX Gym – React Classwork

A beginner-friendly React project built with React and Vite to practice JSX syntax, JavaScript expressions, attributes, styling, conditional rendering, and component structure.

This project was completed as part of React classwork to develop a better understanding of how JSX works in React.

## Project Objectives

- Understand JSX syntax and rules.
- Create reusable React components.
- Practice converting HTML into valid JSX.
- Work with JavaScript variables and expressions inside JSX.
- Understand React attributes and event handling.
- Practice conditional rendering and dynamic styling.
- Render arrays using the `.map()` method.
- Understand the difference between JSX and the actual DOM.

## Part A: JSX Gym – 10 Exercises

The project covers the following exercises:

| Exercise | Topic | Description |
|---|---|---|
| 01 | One Root | Returning multiple JSX elements using a parent element and Fragment. |
| 02 | Close Every Tag | Correctly closing JSX tags and rendering a contact card. |
| 03 | HTML Attribute Conversion | Converting HTML attributes into valid JSX attributes. |
| 04 | Dynamic Greeting | Displaying dynamic values using JavaScript variables and expressions. |
| 05 | Attribute Expressions | Rendering images using dynamic `src` and `alt` attributes. |
| 06 | Expression vs Statement | Practicing conditional logic using a ternary operator. |
| 07 | Fragment Practice | Grouping elements without adding unnecessary DOM elements. |
| 08 | Style Object | Applying dynamic styles using a JavaScript style object. |
| 09 | Tailwind & Conditional Class | Applying conditional CSS classes using a ternary operator. |
| 10 | Arrays and Comments | Rendering arrays with `.map()`, stable keys, and JSX comments. |

## Part B: HTML-to-JSX Conversion Challenge

The project also includes a component named `CourseRegistration`.

The challenge involves converting ordinary HTML into valid JSX while applying React syntax rules.

### Features

- Correct use of `className` and `tabIndex`.
- Properly closed JSX elements.
- Correct label and input association using `htmlFor`.
- Dynamic rendering of course information and available seats.
- Dynamic image path using a JavaScript variable.
- Button click handling using `onClick`.
- Sample course image stored in the public directory.

## Technologies Used

- React
- JavaScript (ES6+)
- JSX
- Vite
- Tailwind CSS (for the conditional class exercise)

## Project Structure

```text
react-jsx/
│
├── public/
│   └── images/
│       └── bootcamp.jpg
│
├── src/
│   ├── exercises/
│   │   ├── Exercise01.jsx
│   │   ├── Exercise02.jsx
│   │   ├── Exercise03.jsx
│   │   ├── Exercise04.jsx
│   │   ├── Exercise05.jsx
│   │   ├── Exercise06.jsx
│   │   ├── Exercise07.jsx
│   │   ├── Exercise08.jsx
│   │   ├── Exercise09.jsx
│   │   └── Exercise10.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rithairagena13-spec/react-jsx.git
```

### 2. Navigate into the project

```bash
cd react-jsx
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Learning Outcomes

Through this classwork, I practiced:

- JSX elements and Fragment syntax.
- HTML-to-JSX conversion.
- JavaScript expressions inside JSX.
- Dynamic attributes and template literals.
- Conditional rendering with ternary operators.
- React event handling.
- Inline style objects.
- Tailwind conditional classes.
- Rendering arrays using `.map()`.
- Using unique keys when rendering lists.
- Understanding JSX comments and DOM structure.

## GitHub Repository

[React JSX – GitHub](https://github.com/rithairagena13-spec/react-jsx)

---

**Project:** JSX Gym – React Classwork  
**Framework:** React + Vite  
**Purpose:** Practicing JSX fundamentals and React syntax.