import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'AprilNEA',
    type: 'user',
    // token: read from SPONSORKIT_GITHUB_TOKEN
  },
  afdian: {
    // userId / token: read from SPONSORKIT_AFDIAN_USER_ID / SPONSORKIT_AFDIAN_TOKEN
    // Fixed CNY→USD rate so Afdian plans land in the intended rows:
    // ¥30→$4.6 (Backers) · ¥100→$15.4 (Sponsors) · ¥700→$107.7 (Silver)
    // ¥2000→$307.7 (Gold) · ¥3500→$538.5 (Platinum)
    exchangeRate: 6.5,
    includePurchases: true,
    purchaseEffectivity: 30,
  },

  // Private sponsorships are never rendered.
  includePrivate: false,

  outputDir: '.',
  formats: ['svg', 'png'],
  renderer: 'tiers',
  width: 800,

  // `monthlyDollars` is the inclusive lower bound of each row; rows render highest first.
  tiers: [
    { title: 'Past Sponsors', monthlyDollars: -1, preset: tierPresets.xs },
    { title: 'Backers', preset: tierPresets.base },
    { title: 'Sponsors', monthlyDollars: 15, preset: tierPresets.medium },
    { title: 'Silver Sponsors', monthlyDollars: 100, preset: tierPresets.large },
    { title: 'Gold Sponsors', monthlyDollars: 300, preset: tierPresets.xl },
    { title: 'Platinum Sponsors', monthlyDollars: 500, preset: tierPresets.xl },
  ],

  // The only manual step that ever exists: a Gold/Platinum sponsor who wants a custom
  // logo instead of their GitHub avatar. Avatars are downloaded after this hook runs,
  // so overriding `avatarUrl` here is enough.
  onSponsorsAllFetched(sponsors) {
    const customLogos: Record<string, string> = {
      // 'some-org': 'https://example.com/logo.svg',
    }
    for (const s of sponsors) {
      const url = customLogos[s.sponsor.login]
      if (url)
        s.sponsor.avatarUrl = url
    }
    return sponsors
  },
})
