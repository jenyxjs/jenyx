import { ActiveControl } from '../../lib/jenyx/components/ActiveControl/ActiveControl.js';

export class IconButton extends ActiveControl {
    constructor(options) {
        super({
            style: [
                'display: flex',
                'align-items: center',
                'justify-content: center',
                'text-decoration: none',
                'cursor: pointer',
                'box-sizing: border-box',
                'border-radius: 3rem',
                'width: 2.5rem',
                'height: 2.5rem',
                'padding: .5rem',
                'border: 1px solid var(--jn-border)',
                'background: var(--jn-primary)',
                'color: var(--jn-text)',
                'fill: var(--jn-text)',
            ],
            styleSet: {
                hovered: [
                    'filter: brightness(1.05)',
                ],
                selected: [
                    'filter: brightness(1.05)',
                ],
            },
            options
        });
    }
}