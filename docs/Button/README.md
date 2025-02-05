# Button Component

The `Button` class is a versatile UI component based on the `ActiveControl` class. It creates a button (defaulting to an `<a>` element) with customizable options, including support for `href` and `target` attributes for links. The component provides a robust set of features for handling various states and interactions.

## State Support

The Button component supports multiple states, allowing for dynamic and interactive behavior:

- `selected`: Indicates that the button is in a selected state.
- `disabled`: Disables the button, preventing user interaction.
- `pressed`: Represents the button being pressed (e.g., during a mouse click).
- `focused`: Indicates that the button has focus (e.g., via keyboard navigation).
- `hovered`: Activates when the user hovers over the button.

Each state can be styled differently using the `styleSet` property, enabling you to create visually distinct appearances for each state.

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
    target: '_blank',
});
```
In this case, `Button` behaves like an `<a>` element.

## Properties

- `parentNode`: The parent DOM element where the button will be appended.
- `text`: The text displayed on the button.
- `href`: The URL the button should link to (if used as a link).
- `target`: Specifies where to open the linked document (e.g., _self, _blank).
- `style`: An array of CSS properties applied to the button for custom styling.
- `styleSet`: An object defining styles for different states (`selected`, 
- `disabled`, `pressed`, `focused`, `hovered`).

## Example

- [Hello world](/docs/Hello)