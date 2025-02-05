
# Label Class

The `Label` class is a simple UI control designed to display text content in an HTML element. It extends the `Control` class and provides an easy and flexible way to manage text content within your application.

## Features

- **Text Binding**: Easily bind text to the label element, automatically updating the content when the `text` property is changed.
- **CSS-in-JS Styling**: You can apply inline styles directly to the component through the `style` property, making it easy to customize the appearance.
- **Flexible Configuration**: The component can be customized with various properties, such as `parentNode`, `text`, and `style`, allowing for flexible integration in any project.

## Source Code

`Label` extends the `Control` class by adding the `text` property to it. When the `text` property changes, the content of the DOM node also changes due to the binding.

```javascript
import { Control } from '../../components/Control/Control.js';

export class Label extends Control {
    constructor (options) {
        super({
            text: '',
            options
        });

        this.bind('text', this.node, 'innerHTML');
    }
}
```

## Example of Use

```javascript
new Label({
    parentNode: document.body, // The parent node where the label will be inserted
    text: 'Hello world!', // The initial text to display
    style: ['font-size: 200%', 'text-align: center'] // Optional inline styles for customization
});
```

This example creates a label with the text **"Hello world!"** and centers it on the page with a larger font size.

## Example

- [Hello world](/docs/Hello)