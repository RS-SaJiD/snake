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

## Palettes at a glance 📜

### Custom (by me)

| Palette | Preview | `palette=` |
|---|---|---|
| github | 

![](https://img.shields.io/badge/-%20-0c1116?style=flat-square)

 dark / 

![](https://img.shields.io/badge/-%20-ffffff?style=flat-square)

 light | `github-dark` / `github-light` |
| red-github | 

![](https://img.shields.io/badge/-%20-0c1116?style=flat-square)

 dark / 

![](https://img.shields.io/badge/-%20-ffffff?style=flat-square)

 light | `red-github-dark` / `red-github-light` |
| halloween | 

![](https://img.shields.io/badge/-%20-0c1116?style=flat-square)

 dark / 

![](https://img.shields.io/badge/-%20-ffffff?style=flat-square)

 light | `halloween-dark` / `halloween-light` |
| winter | 

![](https://img.shields.io/badge/-%20-0c1116?style=flat-square)

 dark / 

![](https://img.shields.io/badge/-%20-ffffff?style=flat-square)

 light | `winter-dark` / `winter-light` |
| one-dark-pro | 

![](https://img.shields.io/badge/-%20-282c34?style=flat-square)

 | `one-dark-pro` |
| synthwave | 

![](https://img.shields.io/badge/-%20-262335?style=flat-square)

 | `synthwave` |
| dracula | 

![](https://img.shields.io/badge/-%20-282a36?style=flat-square)

 | `dracula` |
| monokai | 

![](https://img.shields.io/badge/-%20-272822?style=flat-square)

 | `monokai` |
| nord | 

![](https://img.shields.io/badge/-%20-2e3440?style=flat-square)

 | `nord` |
| tokyo-night | 

![](https://img.shields.io/badge/-%20-1a1b2e?style=flat-square)

 | `tokyo-night` |
| catppuccin | 

![](https://img.shields.io/badge/-%20-1e1e2e?style=flat-square)

 | `catppuccin` |

### Platane official

| Palette | Preview | `palette=` |
|---|---|---|
| gitlab | 

![](https://img.shields.io/badge/-%20-1f1e24?style=flat-square)

 dark / 

![](https://img.shields.io/badge/-%20-ffffff?style=flat-square)

 light | `gitlab-dark` / `gitlab-light` |
| forgejo | 

![](https://img.shields.io/badge/-%20-1f2937?style=flat-square)

 dark / 

![](https://img.shields.io/badge/-%20-ffffff?style=flat-square)

 light | `forgejo-dark` / `forgejo-light` |
| codeberg | 

![](https://img.shields.io/badge/-%20-161b22?style=flat-square)

 dark / 

![](https://img.shields.io/badge/-%20-ffffff?style=flat-square)

 light | `codeberg-dark` / `codeberg-light` |

Click any name in the full gallery below for a live preview.





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
