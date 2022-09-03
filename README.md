# React HTML String 🚀

A React declarative component for converting HTML strings into React components. Avoids the use of dangerouslySetInnerHTML and converts standard HTML elements, attributes and inline styles into their React equivalents or `Custom Components`.

## Install

```sh
$ npm install react-html-string

or

$ yarn add react-html-string
```

## How to use

```jsx
import HTMLString from 'react-html-string';

const html = `
  <div>
    <h1>
      Hello from
      <a
        href="https://github.com/MomenSherif/react-html-string"
        target="_blank"
        >React HTML String</a
      >
    </h1>
    <hr />
    <ul>
      <li>Render HTML string safely</li>
      <li>Provide <b>Custom Components</b> if needed</li>
    </ul>
    <p>Don't forget to ⭐️ the project</p>
  </div>
`;

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <HTMLString html={html} />
    </div>
  );
}
```

### With Custom Components

```jsx
import HTMLString from 'react-html-string';

import Heading from './components/Heading';

const components = {
  a: props => <a {...props} style={{ color: 'red' }} />,
  h1: Heading,
};

const html = `
  <div>
    <h1>
      Hello from
      <a
        href="https://github.com/MomenSherif/react-html-string"
        target="_blank"
        >React HTML String</a
      >
    </h1>
    <hr />
    <ul>
      <li>Render HTML string safely</li>
      <li>Provide <b>Custom Components</b> if needed</li>
    </ul>
    <p>Don't forget to ⭐️ the project</p>
  </div>
`;

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <HTMLString html={html} components={components} />
    </div>
  );
}
```

### TypeScript example

`Each component is strongly typed with the equivalent dom node type.`

```tsx
import HTMLString, { Components } from 'react-html-string';

import Heading from './components/Heading';

const components: Components = {
  a: props => <a {...props} style={{ color: 'red' }} />,
  h1: Heading,
};

const html = `
  <div>
    <h1>
      Hello from
      <a
        href="https://github.com/MomenSherif/react-html-string"
        target="_blank"
        >React HTML String</a
      >
    </h1>
    <hr />
    <ul>
      <li>Render HTML string safely</li>
      <li>Provide <b>Custom Components</b> if needed</li>
    </ul>
    <p>Don't forget to ⭐️ the project</p>
  </div>
`;

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <HTMLString html={html} components={components} />
    </div>
  );
}
```
