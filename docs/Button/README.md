# Button Component

The `Button` class is a component based on `ActiveControl` that creates a button (`<a>` by default) with customizable options. It allows modifying `href` and `target` (for links).

## State Support

The component supports various states:

- `selected`

- `disabled`

- `pressed`

- `focused`

- `hovered`

## Usage Example

### Simple Button
```javascript
new Button({
    parentNode: document.body,
    text: 'Click me!',
    onclick: () => alert('Button clicked!'),
    style: ['background: teal', 'color: white', 'padding: 1rem'],
});
```
### Button as a Link
```javascript
new Button({
    parentNode: document.body,
    text: 'Go to Jenyx',
    href: 'https://github.com/jenyxjs/jenyx',
    target: '_blank', // Opens in a new tab
});
```
In this case, `Button` behaves like an `<a>` element.

## Example

[Hello world](/docs/Hello)