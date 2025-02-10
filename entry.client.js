import "@lit-labs/ssr-client/lit-element-hydrate-support.js";
import "./components/quick-search/index.js";
import "./components/bcd/index.js";
import "./components/dropdown/index.js";
import Prism from "prismjs";

console.log("ENtER");
window.addEventListener("DOMContentLoaded", () => {
  [...(document.querySelectorAll('pre[class~="brush:"]') || [])].forEach(
    (pre) => {
      const code = pre.firstChild;
      code.innerHTML = Prism.highlight(
        code.textContent,
        Prism.languages.html,
        "html",
      );
    },
  );
});
