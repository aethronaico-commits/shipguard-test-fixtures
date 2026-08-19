Once credits are available, verify the scanner still works correctly.

Run a scan against this repo: [your test repo URL here]

I expect it to return at least 3 findings:
1. A hardcoded API key/secret in config.js
2. A hardcoded password in config.js
3. Either open database rules or a missing-auth route handler (or both) in config.js

If it returns 0 findings on this repo, the recent exclusion fix was too broad
and is now skipping real code files, not just tests and configs. Show me exactly
which exclusion rule is matching config.js incorrectly, and narrow it so it only
excludes files matching *.test.*, *.spec.*, __tests__/, or known config filenames
(.eslintrc, .lintstagedrc, prisma.config, etc) — not any file with "config" or
similar words in its content.
