# CountButton Component

The `CountButton` is a custom component that extends the `Button` class to demonstrate the capabilities of the Jenyx library. This example highlights how Jenyx simplifies the creation of interactive UI components by combining state management, event handling, and dynamic updates in a concise and reusable way.

The `CountButton` displays a counter that increments each time the button is clicked. The displayed text dynamically updates to reflect the current count, showcasing Jenyx's ability to bind data and update the DOM seamlessly.

## Source code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CountButton</title>
    <style>
        :root {
            --jn-bg: hsl(0 0% 100%);
            --jn-text: hsl(0 0% 10%);
        }
    </style>
    <script type="module">
        import { Button } from '../../components/Button/Button.js';

        class CountButton extends Button {
            constructor (options) {
                super({
                    count: 0,
                    text: 'Click me!',
                    options
                });

                this.oncount = event => {
                    this.text = 'Count: ' + this.count;
                };

                this.onclick = event => {
                    this.count++;
                };
            }
        }

        new CountButton({ parentNode: document.body });
    </script>
</head>

</html>
```

## Live Example

You can view and interact with the live example here:
[CountButton](https://jenyxjs.github.io/jenyx/docs/CountButton/example.html)