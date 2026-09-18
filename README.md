# sponsors

Auto-generated sponsors list for [@AprilNEA](https://github.com/AprilNEA), built with [sponsorkit](https://github.com/antfu/sponsorkit).

It merges [GitHub Sponsors](https://github.com/sponsors/AprilNEA) and [爱发电](https://afdian.com/a/aprilnea), renders `sponsors.svg` / `sponsors.png` once a day through GitHub Actions, and the image is embedded in my profile README and project READMEs. Public sponsors appear automatically; private sponsorships are never shown.

<p align="center">
  <a href="https://github.com/sponsors/AprilNEA">
    <img src="https://cdn.jsdelivr.net/gh/AprilNEA/sponsors/sponsors.svg" alt="Sponsors" />
  </a>
</p>

## Embed

```html
<a href="https://github.com/sponsors/AprilNEA">
  <img src="https://cdn.jsdelivr.net/gh/AprilNEA/sponsors/sponsors.svg" alt="Sponsors" />
</a>
```

Force a CDN refresh: `https://purge.jsdelivr.net/gh/AprilNEA/sponsors/sponsors.svg`

## Rows

| Row | Monthly amount |
| --- | --- |
| Platinum Sponsors | $500+ |
| Gold Sponsors | $300+ |
| Silver Sponsors | $100+ |
| Sponsors | $15+ |
| Backers | any amount |
| Past Sponsors | previous sponsors |

爱发电 amounts are converted at a fixed 6.5 CNY/USD, so ¥30 / ¥100 / ¥700 / ¥2,000 / ¥3,500 map to the same rows as $5 / $15 / $100 / $300 / $500.

## Running locally

```bash
pnpm install
cp .env.example .env   # fill in the tokens
pnpm build             # writes sponsors.svg / sponsors.png
```

The workflow needs three repository secrets: `SPONSORKIT_GITHUB_TOKEN` (classic PAT with `read:user` and `read:org`), `SPONSORKIT_AFDIAN_USER_ID` and `SPONSORKIT_AFDIAN_TOKEN` (both from afdian.com/dashboard/dev).

## License

[MIT](./LICENSE) for the configuration. Sponsor names and avatars belong to their owners.
