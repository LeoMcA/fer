import { html } from "lit-html";

import { Logo } from "../logo/index.js";
import { ColorTheme } from "../color-theme/index.js";
import { QuickSearch } from "../quick-search/index.js";
import { MenuNew } from "../menu/index.js";

export function Navigation(context) {
  return html`<nav class="navigation">
    <div class="navigation__logo">${Logo(context)}</div>
    <div class="navigation__menu">${MenuNew(context)}</div>
    <div class="navigation__tools">
      ${ColorTheme(context)}${QuickSearch(context)}
    </div>
  </nav>`;
}
