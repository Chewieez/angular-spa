import { Component, Input } from '@angular/core';
import { combinePaths } from '@servicestack/client';
import { SrcLinkComponent } from './src-link.component';

@Component({
    selector: 'src-page',
    template: `
    <src-link [href]="fullPath">
        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><path fill="#e23237" d="M34.25 61.125L127.325 28l95.525 32.612L207.412 183.7L127.325 228l-78.787-43.725z"/><path fill="#b52e31" d="M222.85 60.613L127.325 28v200l80.087-44.3z"/><path fill="#fff" d="m127.469 51.375l-58 129l21.644-.438l11.687-29.149h51.875l12.7 29.375l20.637.437zm.143 41.412l19.625 40.982H110.5l17.169-40.982z"/></g></svg>
    </src-link>
    @if (fullPath.endsWith('.html')) {
    <src-link [href]="fullPath.replace('.html', '.ts')">
        <svg class="ml-2 w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"/></svg>
    </src-link>
    }
  `,
    imports: [SrcLinkComponent],
})
export class SrcPageComponent {
    @Input() path!: string;

    get fullPath(): string {
        return combinePaths('/MyApp.Client/src/pages', this.path);
    }
}