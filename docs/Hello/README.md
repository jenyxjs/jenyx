# Hello world!

## Code
 ```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Hello world</title>
        <style>
        :root {
            --jn-sf: hsl(200 50% 90%);
            --jn-on-sf: hsl(0 0% 15%);
        }
    </style>
    <script type="module">
        import { Label } from '../../components/Label/Label.js';
        import { Button } from '../../components/Button/Button.js';

        const label = new Label({
            parentNode: document.body,
            text: 'Hello world!',
            style: [
                'font-size: 200%',
                'text-align: center',
            ]
        });

        new Button({
            parentNode: document.body,
            text: 'Change Text',
            onclick: event => {
                label.text = 'Hello Jenyx!';
            }
        });

    </script>
</head>

</html>
 ```

## Label and Button

The `Label` component is a simple control designed to display text. 
[Details...](/docs/Label) 

The `Button` class is a component based on `ActiveControl`.
[Details...](/docs/Button) 
 
## Live example
[Hello world](https://jenyxjs.github.io/jenyx/docs/Hello/example.html)