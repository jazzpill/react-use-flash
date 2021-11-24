# react-use-flash

A tiny React hook for temporarily flashing state. This can be useful for updating text on buttons when a user clicks. For example:

https://user-images.githubusercontent.com/561506/143280525-3c7a6bf6-3d60-4996-aa99-dc64cf21f42d.mov

CodeSandbox here: https://codesandbox.io/s/modest-williamson-fk7mk?file=/src/App.tsx

## Installation

```
npm install react-use-flash
yarn add react-use-flash
```

## Example usage

### Value as a primitive

```tsx
import { useFlash } from 'react-use-flash';

function App() {
  const [message, flash] = useFlash('Copy', {
    duration: 1000,
  });

  return <button onClick={() => flash('Copied!')}>{message}</button>;
}
```

### Value as an object

```tsx
import { useFlash } from 'react-use-flash';

function App() {
  const [alert, flash] = useFlash(
    { type: 'info', message: 'Save profile' },
    {
      duration: 1000,
    },
  );

  return (
    <button
      onClick={() =>
        flash({ type: 'error', message: 'Oops! Please try again' })
      }
    >
      {alert.message}
    </button>
  );
}
```

### Providing a type for the value

```tsx
import { useFlash } from 'react-use-flash';

type Alert = {
  type: 'info' | 'error';
  message: string;
};

function App() {
  const [alert, flash] = useFlash<Alert>(
    { type: 'error', message: 'Oops! Please try again' },
    {
      duration: 1000,
    },
  );

  return (
    <button
      onClick={() =>
        flash({ type: 'error', message: 'Oops! Please try again' })
      }
    >
      {alert.message}
    </button>
  );
}
```
