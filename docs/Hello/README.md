
# Hello World Example

This is a simple example demonstrating the use of the Label and Button components in a web application. The page displays a "Hello world!" message and a button that changes the message to "Hello Jenyx!" when clicked.

## Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Hello world</title>
    <style>
        :root {
            --jn-bg: hsl(0 0% 100%); /* Background color */
            --jn-text: hsl(0 0% 10%); /* Text color */
        }
    </style>
    <script type="module">
        import { Label } from '../../components/Label/Label.js';
        import { Button } from '../../components/Button/Button.js';

        // Create a Label component
        const label = new Label({
            parentNode: document.body, // Attach to the body
            text: 'Hello world!',     // Initial text
            style: [                  // CSS styles
                'font-size: 200%',
                'text-align: center',
            ]
        });

        // Create a Button component
        new Button({
            parentNode: document.body, // Attach to the body
            text: 'Change Text',       // Button text
            onclick: event => {        // Click handler
                label.text = 'Hello Jenyx!'; // Update the label text
            }
        });
    </script>
</head>

</html>
```

## Components

### Label
The Label component is a simple control designed to display text. It supports dynamic updates to its content and can be styled using inline CSS.

**Properties:**

- `parentNode`: The DOM element to which the label will be appended.
- `text`: The text to display.
- `style`: An array of CSS styles to apply to the label.

[Learn more about the Label component...](/docs/Label)

### Button
The Button class is a component based on ActiveControl. It creates a clickable button that can trigger actions when pressed.

**Properties:**

- `parentNode`: The DOM element to which the button will be appended.
- `text`: The text displayed on the button.
- `onclick`: A callback function that is executed when the button is clicked.

[Learn more about the Button component...](/docs/Button)

## Live Example
You can see this example in action here:
[Hello World Live Demo](https://jenyxjs.github.io/jenyx/docs/Hello/example.html)

## License
This example is provided under the MIT License. Feel free to use, modify, and distribute it as needed.
