<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep GitHub Pages deployment in a separate `github-pages` Vite mode that prerenders the public home page and uploads only `dist/client`; Pages cannot run the app's server.
- Derive router and favicon paths from Vite's `BASE_URL`; repository Pages sites are hosted under a subpath rather than `/`.
- Export a plain Vite config function for mode-dependent configuration and call the Lovable `defineConfig` factory only once; nesting the factory duplicates transform plugins and HMR declarations.
