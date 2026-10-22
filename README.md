# Legacy portfolio addresses

This repository contains only public URL compatibility pages. No reports, application documents, personal records, credentials or private source code are hosted here.

GitHub Pages must publish `main` from `/`. The current GitHub plan requires this redirect-only repository to be public. The Eco² source repository and the resume repository stay private.

Old `/eco2/report.pdf`, `/eco2/report-en.pdf`, `/geode/report.pdf` and `/geode/report-en.pdf` addresses navigate directly to the corresponding Korean or English PDF on `https://tech.mangowhois.ai/`. Old GEODE research readers also navigate to the canonical research host. Query strings and fragments are retained.

GitHub Pages cannot configure arbitrary HTTP redirects. A missing legacy path serves `404.html` with HTTP 404; its script navigates the browser to the canonical resource. This repairs links clicked in existing resumes. Non-JavaScript clients should use the canonical URL directly. The page also provides explicit fallback links.

Run `node test-redirects.cjs` before publishing. Validate the deployed old URL in a browser and verify the final PDF response separately.
