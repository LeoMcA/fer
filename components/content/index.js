import { html, nothing } from "lit-html";
import { unsafeStatic, html as hh } from "lit-html/static.js";

export function Content(context) {
  return html`<div class="content">
    <h1>${context?.doc?.title}</h1>
    ${context?.doc?.body.map((section) => Section(section))}
  </div>`;
}

function Section({ type, value }) {
  switch (type) {
    default:
      return Prose(value);
  }
}

function Prose({ id, title, content, isH3 }) {
  const level = isH3 ? 3 : 2;
  return hh`<section aria-labelledby="{id}">
    ${Heading(level, id, title)} ${unsafeStatic(content)}
  </section>`;
}

/**
 * @param (number) level
 * @param (string?) id
 * @param (string) title
 */
function Heading(level, id, title) {
  return id
    ? hh`<${unsafeStatic("h" + level)} id=${id}>${title}</${unsafeStatic("h" + level)}>`
    : nothing;
}
