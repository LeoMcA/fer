import { html } from "lit-html";

import { Logo } from "../logo/index.js";
import { ColorTheme } from "../color-theme/index.js";
import "../quick-search/index.js";
import { Menu } from "../menu/index.js";

import "./index.css";

export function Navigation(context) {
  return html`<nav class="navigation">
    <div class="navigation__logo">${Logo(context)}</div>
    <div class="navigation__menu">${Menu(context)}</div>
    <div class="navigation__tools">
      ${ColorTheme(context)}<quick-search></quick-search>
    </div>
  </nav>`;
}
