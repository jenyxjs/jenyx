# Label Component

The `Label` component is a simple UI control designed to display text content in an HTML element. It extends the `Control` class and provides an easy and flexible way to manage text content within your application.

## Features

- **Text Binding**: Easily bind text to the label element, automatically updating the content when the `text` property is changed.
- **CSS-in-JS Styling**: You can apply inline styles directly to the component through the `style` property, making it easy to customize the appearance.
- **Flexible Configuration**: The component can be customized with various properties, such as `parentNode`, `text`, and `style`, allowing for flexible integration in any project.

## Source code

Label extends the Control class by adding the text property to it. When the `text` property changes, the content of the DOM node also changes due to the binding.

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

## Example of use

```javascript
new Label({
    parentNode: document.body, // The parent node where the label will be inserted
    text: 'Hello world!', // The initial text to display
    style: ['font-size: 200%', 'text-align: center'] // Optional inline styles for customization
});
```

This example creates a label with the text "Hello world!" and centers it on the page with a larger font size.

- **Parent Node**: Specify where the component should be appended in the DOM by passing a parentNode element.

- **Text**: The primary property of the Label component. You can change the text dynamically using `label.text = 'New text';`.

- **Style**: An array of CSS properties that are applied to the label element, allowing easy customization without external stylesheets.


## Live Example

[Hello world](https://jenyxjs.github.io/jenyx/docs/Hello/example.html)