<p align="center">
  <img src="https://user-images.githubusercontent.com/19797697/129541444-246da142-3596-4d1e-98f8-134838174e05.png" />
</p>

<h3 align="center">A React SVG components library of <a href="https://github.com/framework7io/framework7-icons">Framework7 Icons</a></h3>

---

```zsh
> npm install react-f7-icons
```

```tsx
import F7Icon from 'react-f7-icons'

export default function Component() {
  return (
    <div>
      <F7Icon name="airplane" size="1.2em" fill="sky" />
    </div>
  )
}
```

## Props

### `name: IconName`

Name of the icon.

[📚 Full list of icons]()

### `size?: string`

Height of the icon.

### `fill?: string`

Color of the icon. Any CSS color value is
