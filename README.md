# snake ⚕️
A TypeScript wrapper around [Platane/snk](https://github.com/Platane/snk) that adds named custom color palettes — no forking, no Docker rebuild. Just pass `?palette=<name>` in your `outputs` and get a themed contribution snake.

## How to use ❓

Add this to your workflow file (e.g. `.github/workflows/snake.yml`):

```yaml
name: generate snake animation

on:
  schedule:
    - cron: "0 */24 * * *"
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - name: generate snake svg
        uses: RS-SaJiD/snake@latest
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/snake.svg?palette=winter-dark
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: push to output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: snake-assets
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Available palette names are listed in the gallery below. Replace `winter-dark` with any of them.







## Snake Palette Gallery 🎨

### Custom palettes (by me)

#### github-dark <-- (Platane's official, not mine)




![github-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/github-dark.svg)




#### github-light <-- (Platane's official, not mine)




![github-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/github-light.svg)




#### red-github-dark




![red-github-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/red-github-dark.svg)




#### red-github-light




![red-github-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/red-github-light.svg)



#### halloween-dark




![halloween-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/halloween-dark.svg)




#### halloween-light




![halloween-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/halloween-light.svg)



#### winter-dark




![winter-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/winter-dark.svg)




#### winter-light




![winter-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/winter-light.svg)



#### sakura-dark




![sakura-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/sakura-dark.svg)




#### sakura-light




![sakura-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/sakura-light.svg)



#### black-and-white-dark




![black-and-white-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/black-and-white-dark.svg)




#### black-and-white-light




![black-and-white-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/black-and-white-light.svg)



#### one-dark-pro




![one-dark-pro](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/one-dark-pro.svg)



#### synthwave




![synthwave](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/synthwave.svg)



#### dracula




![dracula](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/dracula.svg)



#### monokai




![monokai](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/monokai.svg)



#### nord




![nord](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/nord.svg)



#### tokyo-night




![tokyo-night](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/tokyo-night.svg)



#### catppuccin




![catppuccin](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/catppuccin.svg)



#### gruvbox




![gruvbox](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/gruvbox.svg)



#### rose-pine




![rose-pine](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/rose-pine.svg)



#### solarized-dark




![solarized-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/solarized-dark.svg)



#### cyberpunk




![cyberpunk](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/cyberpunk.svg)



#### electric-violet




![electric-violet](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/electric-violet.svg)



---

### Other Platane official palettes

#### gitlab-dark




![gitlab-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/gitlab-dark.svg)




#### gitlab-light




![gitlab-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/gitlab-light.svg)



#### forgejo-dark




![forgejo-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/forgejo-dark.svg)




#### forgejo-light




![forgejo-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/forgejo-light.svg)



#### codeberg-dark




![codeberg-dark](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/codeberg-dark.svg)




#### codeberg-light




![codeberg-light](https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets/codeberg-light.svg)



#### nord


![nord](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/nord.svg)



#### tokyo-night


![tokyo-night](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/tokyo-night.svg)



#### catppuccin


![catppuccin](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/catppuccin.svg)



---

### Other Platane official palettes

#### gitlab


![gitlab-dark](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/gitlab-dark.svg)




![gitlab-light](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/gitlab-light.svg)



#### forgejo


![forgejo-dark](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/forgejo-dark.svg)




![forgejo-light](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/forgejo-light.svg)



#### codeberg


![codeberg-dark](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/codeberg-dark.svg)




![codeberg-light](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/codeberg-light.svg)
