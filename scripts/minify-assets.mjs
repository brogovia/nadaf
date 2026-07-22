import * as esbuild from "esbuild";
import path from "node:path";

/**
 * Bundle + minify CSS/JS into _site after Eleventy copies passthrough assets.
 * Only runs on production builds (not --serve / --watch).
 */
export async function minifyAssets({ outputDir = "_site" } = {}) {
  const cssEntry = path.join("src", "static", "css", "main.css");
  const cssOut = path.join(outputDir, "static", "css", "main.css");
  const jsEntry = path.join("src", "static", "js", "main.js");
  const jsOut = path.join(outputDir, "static", "js", "main.js");

  await Promise.all([
    esbuild.build({
      entryPoints: [cssEntry],
      outfile: cssOut,
      bundle: true,
      minify: true,
      logLevel: "warning",
      // Keep site-root absolute URLs as-is (served by the static host)
      external: ["/static/*"]
    }),
    esbuild.build({
      entryPoints: [jsEntry],
      outfile: jsOut,
      bundle: true,
      minify: true,
      logLevel: "warning"
    })
  ]);
}
