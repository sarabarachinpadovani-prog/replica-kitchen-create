import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { afterEach, describe, expect, it, vi } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { getRouter } from "@/router";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("matches the home page under a GitHub Pages repository path", () => {
    vi.stubEnv("BASE_URL", "/replica-kitchen-create/");
    const router = getRouter();

    expect(router.options.basepath).toBe("/replica-kitchen-create/");
    expect(router.matchRoutes("/replica-kitchen-create/").at(-1)?.routeId).toBe("/");
  });

  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
