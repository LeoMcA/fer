import { html } from "lit-html";
import { ReferenceToc } from "../reference-toc/index.js";
import { Content } from "../content/index.js";

export function ReferenceLayout(context) {
  return html`
    <div class="reference-layout">
      <div class="reference-layout__sidebar">Sidebar</div>
      <div class="reference-layout__content">${Content(context)}</div>
      <div class="reference-layout__toc">${ReferenceToc(context)}</div>
    </div>
  `;
}
