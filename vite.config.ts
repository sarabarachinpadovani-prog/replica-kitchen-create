// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { ConfigEnv } from "vite";

// Invoke the Lovable configuration factory once; nesting it duplicates plugins.
export default (env: ConfigEnv) => {
  // CI selects the static mode without adding arguments to bun run build.
  const mode = process.env['GITHUB_PAGES_BUILD'] === "true" ? "github-pages" : env.mode;
  const githubPages = mode === "github-pages";
  const base = githubPages
    ? `${(process.env['GITHUB_PAGES_BASE_PATH'] ?? "").replace(/\/$/, "")}/`
    : "/";

  return defineConfig({
    vite: { base },
    // Pages serves static files only. Reuse the Lovable build layout (dist/server +
    // dist/client) so the prerender shim finds a fetch-style server entry; the
    // node-server preset has no fetch export and made the prerender hang in CI.
    ...(githubPages
      ? {
          nitro: {
            preset: "cloudflare-module",
            output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
            cloudflare: { nodeCompat: true, deployConfig: false },
          },
        }
      : {}),
    tanstackStart: {
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      // nitro/vite builds from this
      server: { entry: "server" },
      ...(githubPages
        ? {
            router: { basepath: base },
            pages: [{ path: "/" }],
            prerender: {
              enabled: true,
              autoStaticPathsDiscovery: false,
              crawlLinks: false,
              failOnError: true,
            },
          }
        : {}),
    },
  })({ ...env, mode });
};
