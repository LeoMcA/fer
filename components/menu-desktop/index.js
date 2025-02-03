import { html } from "lit-html";

export function MenuDesktop(context) {
  return html`<ul class="menu-desktop">
    <li class="menu-desktop__group">
      <a class="menu-desktop__link" href="">
        References
        <svg
          class="menu-desktop__group-arrow icon"
          width="16"
          height="16"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </a>
      <ul class="menu-desktop__list">
        <li>
          <a class="menu-desktop__list-link" href="">
            HTML
            <span class="menu-desktop__list-description"
              >Structure of content on the web</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            CSS
            <span class="menu-desktop__list-description"
              >Code used to describe document style</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            JavaScript
            <span class="menu-desktop__list-description"
              >General-purpose scripting language</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            HTTP
            <span class="menu-desktop__list-description"
              >Protocol for transmitting web resources</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            Web APIs
            <span class="menu-desktop__list-description"
              >Interfaces for building web applications</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            Web Extensions
            <span class="menu-desktop__list-description"
              >Developing extensions for web browsers</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            Web Technology
            <span class="menu-desktop__list-description"
              >Web technology reference for developers</span
            >
          </a>
        </li>
      </ul>
    </li>
    <li class="menu-desktop__group">
      <a class="menu-desktop__link" href="">
        Guides
        <svg
          class="menu-desktop__group-arrow icon"
          width="16"
          height="16"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </a>
      <ul class="menu-desktop__list">
        <li>
          <a class="menu-desktop__list-link" href="">
            MDN Learning Area
            <span class="menu-desktop__list-description"
              >Learn web development</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            MDN Learning Area
            <span class="menu-desktop__list-description"
              >Learn web development</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            HTML
            <span class="menu-desktop__list-description"
              >Learn to structure web content with HTML</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            CSS
            <span class="menu-desktop__list-description"
              >Learn to style content using CSS</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            JavaScript
            <span class="menu-desktop__list-description"
              >Learn to run scripts in the browser</span
            >
          </a>
        </li>
      </ul>
    </li>
    <li class="menu-desktop__group">
      <a class="menu-desktop__link" href="">
        Plus
        <svg
          class="menu-desktop__group-arrow icon"
          width="16"
          height="16"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </a>
      <ul class="menu-desktop__list">
        <li>
          <a class="menu-desktop__list-link" href="">
            Overview
            <span class="menu-desktop__list-description"
              >A customized MDN experience</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            AI Help
            <span class="menu-desktop__list-description"
              >Get real-time assistance and support</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            Collections
            <span class="menu-desktop__list-description"
              >Your saved articles from across MDN</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            Updates
            <span class="menu-desktop__list-description"
              >All browser compatibility updates at a glance</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            Documentation
            <span class="menu-desktop__list-description"
              >Learn how to use MDN Plus</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            FAQ
            <span class="menu-desktop__list-description"
              >Frequently asked questions about MDN Plus</span
            >
          </a>
        </li>
      </ul>
    </li>
    <li class="menu-desktop__group">
      <a class="menu-desktop__link" href="">Curriculum</a>
    </li>
    <li class="menu-desktop__group">
      <a class="menu-desktop__link" href="">Blog</a>
    </li>
    <li class="menu-desktop__group">
      <a class="menu-desktop__link" href="">
        Tools
        <svg
          class="menu-desktop__group-arrow icon"
          width="16"
          height="16"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </a>
      <ul class="menu-desktop__list">
        <li>
          <a class="menu-desktop__list-link" href="">
            Playground
            <span class="menu-desktop__list-description"
              >Write, test and share your code</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            HTTP Observatory
            <span class="menu-desktop__list-description"
              >Scan a website for free</span
            >
          </a>
        </li>
        <li>
          <a class="menu-desktop__list-link" href="">
            AI Help
            <span class="menu-desktop__list-description"
              >Get real-time assistance and support</span
            >
          </a>
        </li>
      </ul>
    </li>
  </ul>`;
}
