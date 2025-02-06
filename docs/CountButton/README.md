# CountButton

`CountLabel` is a component for displaying a counter that can be updated on click.

## Source code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CountButton</title>
    <style>
        :root {
            --jn-sf: hsl(200 50% 90%);
            --jn-on-sf: hsl(0 0% 15%);
            --jn-grey: hsl(0 0% 50%);
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

## Live example

- [CountButton](https://jenyxjs.github.io/jenyx/docs/CountButton/example.html)