import { html } from "lit-html";

import "./index.css";

export function Menu(context) {
  return html`<nav class="menu">
    <div class="menu__tabs">
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__html"
      >
        HTML
        <svg
          class="icon"
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
      </button>
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__css"
      >
        CSS
        <svg
          class="icon"
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
      </button>
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__javascript"
      >
        JavaScript
        <svg
          class="icon"
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
      </button>
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__apis"
      >
        Web APIs
        <svg
          class="icon"
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
      </button>
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__all"
      >
        All
        <svg
          class="icon"
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
      </button>
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__learn"
      >
        Learn
        <svg
          class="icon"
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
      </button>
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__tools"
      >
        Tools
        <svg
          class="icon"
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
      </button>
      <button
        class="dropdown"
        type="button"
        aria-expanded="false"
        aria-controls="menu__about"
      >
        About
        <svg
          class="icon"
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
      </button>
      <a href="">Blog</a>
    </div>
    <section class="menu__panel" id="menu__html" hidden>
      <h4><a href="">HTML: Markup language</a></h4>
      <div class="menu__content">
        <div class="menu__content-primary">
          <dl class="menu__list">
            <dt>References</dt>
            <dd>
              <ul>
                <li><a href="">Elements</a></li>
                <li><a href="">Global attributes</a></li>
                <li><a href="">Attributes</a></li>
                <li>
                  <a href="" aria-label="See all HTML references">See all…</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl class="menu__list">
            <dt>Markup languages</dt>
            <dd>
              <ul>
                <li><a href="">SVG</a></li>
                <li><a href="">MathML</a></li>
                <li><a href="">XML</a></li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="menu__content-secondary">
          <dl class="menu__list">
            <dt>Guides</dt>
            <dd>
              <ul>
                <li><a href="">Responsive images</a></li>
                <li><a href="">Video & audio content</a></li>
                <li><a href="">Date & time formats</a></li>
                <li>
                  <a href="" aria-label="See all HTML guides">See all…</a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="menu__panel" id="menu__css" hidden>
      <h4><a href="">CSS: Styling language</a></h4>
      <div class="menu__content">
        <div class="menu__content-primary">
          <dl class="menu__list">
            <dt>References</dt>
            <dd>
              <ul>
                <li><a href="">Modules</a></li>
                <li><a href="">Properties</a></li>
                <li><a href="">Selectors</a></li>
                <li><a href="">At-rules</a></li>
                <li><a href="">Functions</a></li>
                <li><a href="">See all…</a></li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="menu__content-secondary">
          <dl class="menu__list">
            <dt>Guides</dt>
            <dd>
              <ul>
                <li><a href="">Box model</a></li>
                <li><a href="">Animations</a></li>
                <li><a href="">Flexbox</a></li>
                <li><a href="">Colors</a></li>
                <li><a href="">See all…</a></li>
              </ul>
            </dd>
          </dl>
          <dl class="menu__list">
            <dt>Tools</dt>
            <dd>
              <ul>
                <li><a href="">Color picker</a></li>
                <li><a href="">Box-shadow generator</a></li>
                <li><a href="">Border-image generator</a></li>
                <li><a href="">Border-radius generator</a></li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="menu__panel" id="menu__javascript" hidden>
      <h4><a href="">JavaScript. Scripting language</a></h4>
      <div class="menu__content">
        <div class="menu__content-primary">
          <dl class="menu__list">
            <dt>References</dt>
            <dd>
              <ul>
                <li><a href="">Built-in objects</a></li>
                <li><a href="">Expressions & operators</a></li>
                <li><a href="">Statements & declarations</a></li>
                <li><a href="">Functions</a></li>
                <li><a href="">See all…</a></li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="menu__content-secondary">
          <dl class="menu__list">
            <dt>Guides</dt>
            <dd>
              <ul>
                <li><a href="">Complete beginners</a></li>
                <li><a href="">Intermediate</a></li>
                <li><a href="">Advanced</a></li>
                <li><a href="">See all…</a></li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="menu__panel" id="menu__apis" hidden>
      <h4><a href="">Web API. Programming interfaces</a></h4>
      <div class="menu__content">
        <div class="menu__content-primary">
          <dl class="menu__list">
            <dt>References</dt>
            <dd>
              <ul>
                <li><a href="">Fetch API</a></li>
                <li><a href="">Canvas API</a></li>
                <li><a href="">Geolocation API</a></li>
                <li><a href="">View transitions API</a></li>
                <li><a href="">See all…</a></li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="menu__content-secondary">
          <dl class="menu__list">
            <dt>Guides</dt>
            <dd>
              <ul>
                <li><a href="">Using the web audio API</a></li>
                <li><a href="">Manipulating video with canvas</a></li>
                <li><a href="">Using the web animation API</a></li>
                <li><a href="">See all…</a></li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="menu__panel" id="menu__all" hidden>
      <h4><a href="">All web technology</a></h4>
      <div class="menu__content">
        <div class="menu__content-primary">
          <dl class="menu__list">
            <dt>References</dt>
            <dd>
              <ul>
                <li>
                  <a href="">Accessibility</a>
                </li>
                <li>
                  <a href="">HTTP</a>
                </li>
                <li>
                  <a href="">Web extensions</a>
                </li>
                <li>
                  <a href="">Web assembly</a>
                </li>
                <li>
                  <a href="">WebDriver</a>
                </li>
                <li>
                  <a href="">See all…</a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="menu__content-secondary">
          <dl class="menu__list">
            <dt>Topics</dt>
            <dd>
              <ul>
                <li>
                  <a href="">Performance</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Security</a>
                </li>
                <li>
                  <a href="">Progressive web apps</a>
                </li>
                <li>
                  <a href="">See all…</a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="menu__panel" id="menu__learn" hidden>
      <h4><a href="">Learn web development</a></h4>
      <div class="menu__content">
        <div class="menu__content-primary">
          <dl class="menu__list">
            <dt>Frontend developer course</dt>
            <dd>
              <ul>
                <li><a href="">Getting started</a></li>
                <li><a href="">Common questions</a></li>
                <li><a href="">Curriculum</a></li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="menu__content-secondary">
          <dl class="menu__list">
            <dt>Learn HTML</dt>
            <dd>
              <ul>
                <li><a href="">Introduction to HTML</a></li>
                <li><a href="">Getting started with HTML</a></li>
              </ul>
            </dd>
          </dl>
          <dl class="menu__list">
            <dt>Learn CSS</dt>
            <dd>
              <ul>
                <li><a href="">What is CSS</a></li>
                <li><a href="">Getting started with CSS</a></li>
              </ul>
            </dd>
          </dl>
          <dl class="menu__list">
            <dt>Learn JavaScript</dt>
            <dd>
              <ul>
                <li><a href="">How to use data attributes</a></li>
                <li><a href="">How to use JS in a webpage</a></li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="menu__panel" id="menu__tools" hidden>
      <h4><a href="">List of MDN tools</a></h4>
      <div class="menu__content">
        <div class="menu__content-full">
          <ul class="menu__featured">
            <li>
              <a href="">
                <svg class="icon" width="24" height="24" viewBox="0 0 384 512">
                  <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                  ></path>
                </svg>
                Playground
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    d="M128 32l32 0c17.7 0 32 14.3 32 32l0 32L96 96l0-32c0-17.7 14.3-32 32-32zm64 96l0 320c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32l0-59.1c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216L60.5 156c2-16 15.6-28 31.8-28l99.8 0zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3l0 59.1c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-320 99.8 0zM320 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32-96 0 0-32zm-32 64l0 160-64 0 0-160 64 0z"
                  />
                </svg>
                HTTP Observatory
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"
                  />
                </svg>
                AI Help
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"
                  />
                </svg>
                Browser release dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="menu__panel" id="menu__about" hidden>
      <h4>MDN Web Docs</h4>
      <div class="menu__content">
        <div class="menu__content-full">
          <ul class="menu__featured">
            <li>
              <a href="">
                <svg
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                  />
                </svg>
                About MDN
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"
                  />
                </svg>
                Community
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                >
                  <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
                Advertise with us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </nav> `;
}
