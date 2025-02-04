import { html } from "lit-html";

import "./index.css";

export function ReferenceToc(context) {
  return html`<div class="reference-toc">
    <h2>In this article</h2>
    <ul>
      ${context?.doc?.toc?.map(
        ({ id, text }) => html`<li><a href="#${id}">${text}</a></li>`,
      )}
    </ul>
  </div>`;
}
