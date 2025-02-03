import { html } from "lit-html";

export function Logo(context) {
  return html`<svg
    class="logo"
    width="160"
    height="24"
    viewBox="0 0 694.9 104.4"
  >
    <title>MDN Web Docs</title>
    <path
      class="logo__letter"
      d="M40.3 0 11.7 92.1H0L28.5 0h11.8zm10.4 0v92.1H40.3V0h10.4zM91 0 62.5 92.1H50.8L79.3 0H91zm10.4 0v92.1H91V0h10.4z"
    />
    <path
      class="logo__text"
      d="M367 42h-4l-10.7 30.8h-5.5l-10.8-26h-.4l-10.5 26h-5.2L308.7 42h-3.8v-5.6H323V42h-6.5l6.8 20.4h.4l10.3-26h4.7l11.2 26h.5l5.7-20.3h-6.2v-5.6H367V42zm34.9 20c-.4 3.2-2 5.9-4.7 8.2a17.1 17.1 0 0 1-11.3 3.4c-5.4 0-9.7-1.6-13.1-4.7-3.3-3.2-5-7.7-5-13.7 0-5.7 1.6-10.3 4.7-14s7.4-5.5 12.9-5.5c5.1 0 9.1 1.6 11.9 4.7s4.3 6.9 4.3 11.3c0 1.5-.2 3-.5 4.7h-25.6c.3 7.7 4 11.6 10.9 11.6 2.9 0 5.1-.7 6.5-2a10 10 0 0 0 3-4.9l6 .9zM394 51.3c.2-2.4-.4-4.7-1.8-6.9s-3.8-3.3-7-3.3c-3.1 0-5.3 1-6.9 3-1.5 2-2.5 4.4-2.8 7.2H394zm51 2.4c0 5-1.3 9.5-4 13.7s-6.9 6.2-12.7 6.2c-6 0-10.3-2.2-12.7-6.7l-.4 2.9-.4 2.9h-7.3a84.2 84.2 0 0 0 1.2-10.8V22.3h-6v-5.6H416v27c1.1-2.2 2.7-4.1 4.7-5.7 2-1.6 4.8-2.4 8.4-2.4 4.6 0 8.4 1.6 11.4 4.7 3 3.2 4.5 7.6 4.5 13.4zm-7.7.6c0-4.2-1-7.4-3-9.5a9.5 9.5 0 0 0-7.4-3.3c-3.4 0-6 1.2-8 3.7a13 13 0 0 0-3 7.7V57c0 3 1 5.6 3 7.7s4.5 3.1 7.6 3.1c3.6 0 6.3-1.3 8.1-3.9 1.8-2.7 2.7-5.9 2.7-9.6zm69.2 18.5h-13.2v-7.2a16.4 16.4 0 0 1-4.9 5.6 13.2 13.2 0 0 1-8.3 2.4c-4.8 0-8.7-1.6-11.6-4.9a19.2 19.2 0 0 1-4.3-13.3c0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2 5.7 0 9.8 2.2 12.3 6.5V22.3h-8.6v-5.6h15.8v50.6h6v5.5zM493.2 56v-4.4c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8a9.5 9.5 0 0 0-8.2 3.9 15.8 15.8 0 0 0-2.8 9.6c0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm53.1-1.4c0 5.6-1.8 10.2-5.3 13.7s-8.2 5.3-13.9 5.3-10.1-1.7-13.4-5.1c-3.3-3.4-5-7.9-5-13.5a21 21 0 0 1 4.7-13.7c3.2-3.8 7.9-5.7 14.2-5.7s11 1.9 14.1 5.7c3 3.7 4.6 8.1 4.6 13.3zm-7.7-.2c0-4-1-7.2-3-9.5s-4.8-3.5-8.2-3.5c-3.6 0-6.4 1.2-8.3 3.7s-2.9 5.6-2.9 9.5c0 3.7.9 6.8 2.8 9.4a9.6 9.6 0 0 0 8.3 3.9c3.6 0 6.4-1.3 8.4-3.8a16 16 0 0 0 2.9-9.7zm45 5.8c-.4 3.2-1.9 6.3-4.4 9.1-2.5 2.9-6.4 4.3-11.8 4.3a17 17 0 0 1-12.6-4.8c-3.2-3.2-4.8-7.7-4.8-13.7 0-5.5 1.6-10.1 4.7-13.9 3.2-3.8 7.6-5.7 13.2-5.7 2.3 0 4.6.3 6.7.8 2.2.5 4.2 1.5 6.2 2.9l1.5 9.5-5.9.7-1.3-6.1a14.3 14.3 0 0 0-7.2-1.8c-3.5 0-6.1 1.2-7.7 3.7a16.7 16.7 0 0 0-2.5 9.6c0 4.1.9 7.3 2.7 9.5 1.8 2.3 4.4 3.4 7.8 3.4 5.2 0 8.2-2.9 9.2-8.8l6.2 1.3zm34.7 1.9c0 3.6-1.5 6.5-4.6 8.5s-7 3-11.7 3a28 28 0 0 1-14.6-3.6l1.2-8.8 5.7.6-.2 4.7c1.1.5 2.3.9 3.6 1.1l3.9.3c2.4 0 4.5-.4 6.5-1.3 1.9-.9 2.9-2.2 2.9-4.1 0-1.8-.8-3.1-2.3-3.8s-3.5-1.3-5.8-1.7l-6.9-1.4a14 14 0 0 1-5.7-2.9c-1.6-1.4-2.3-3.5-2.3-6.3 0-4.1 1.5-6.9 4.6-8.5s6.4-2.4 9.9-2.4a27.3 27.3 0 0 1 13.3 3.3l.8 8.8-5.8.7-.8-5.7a18 18 0 0 0-7.2-1.6 11 11 0 0 0-5.1 1.1c-1.3.8-2 2-2 3.8 0 1.7.8 2.9 2.3 3.6a23 23 0 0 0 5.7 1.6c2.2.4 4.5.8 6.7 1.4 2.2.6 4.1 1.6 5.7 3a9.5 9.5 0 0 1 2.2 6.6zM197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9a7.4 7.4 0 0 0-5.6-2.3 8.4 8.4 0 0 0-7.2 3.3 12.4 12.4 0 0 0-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66a16.4 16.4 0 0 1-4.9 5.6 13.2 13.2 0 0 1-8.3 2.4c-4.8 0-8.7-1.6-11.6-4.9a19.2 19.2 0 0 1-4.3-13.3c0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8a9.5 9.5 0 0 0-8.2 3.9 15.8 15.8 0 0 0-2.8 9.6c0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9a7.3 7.3 0 0 0-5.7-2.3c-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    />
    <path class="logo__cursor" d="M627.9 95.6h67v8.8h-67v-8.8z" />
  </svg>`;
}
