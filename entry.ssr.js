import { render as r } from "@lit-labs/ssr";
import { DocBody } from "./pages/doc/index.js";
import { Readable } from "node:stream";
import { collectResult } from "@lit-labs/ssr/lib/render-result.js";

async function fetch_from_rari(path) {
  const external_url = `http://localhost:8083${path}`;
  console.log(`using ${external_url}`);
  return await (await fetch(external_url)).json();
}
export async function render(path) {
  const context = await fetch_from_rari(path);
  console.log("context", context.url);
  const result = r(DocBody(context));
  return await collectResult(result);
}
