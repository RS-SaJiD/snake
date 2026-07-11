# snake ⚕️
A TypeScript wrapper around [Platane/snk](https://github.com/Platane/snk) that adds named custom color palettes — no forking, no Docker rebuild. Just pass `?palette=<name>` in your `outputs` and get a themed contribution snake.

## How to use ❔

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

#### github <-- (Platane's official, not mine)


![github-dark](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/github-dark.svg)




![github-light](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/github-light.svg)



#### red-github


![red-github-dark](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/red-github-dark.svg)




![red-github-light](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/red-github-light.svg)



#### halloween


![halloween-dark](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/halloween-dark.svg)




![halloween-light](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/halloween-light.svg)



#### winter


![winter-dark](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/winter-dark.svg)




![winter-light](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/winter-light.svg)



#### one-dark-pro


![one-dark-pro](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/one-dark-pro.svg)



#### synthwave


![synthwave](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/synthwave.svg)



#### dracula


![dracula](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/dracula.svg)



#### monokai


![monokai](https://raw.githubusercontent.com/RS-SaJiD/whatisthis/snake-assets/monokai.svg)



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
