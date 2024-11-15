# Placeholder Component

A customizable placeholder web component for developers and designers to visualize empty spaces where future components will be built. This component is helpful in collaborative development environments, allowing team members to allocate visual space for in-progress elements, such as navigation bars, footers, and articles.

## Why Use Placeholder Component?

Over time, designers and developers often leave empty spaces for components yet to be completed. Designers may duplicate existing elements for layout purposes, but there's no equivalent solution for developers. This component provides a standardized placeholder to visualize these spaces, aiding in layout planning and design collaboration.

## Features

- **Color:** Customize the color of the placeholder rectangle.
- **Height:** Define the height of the placeholder.
- **Width:** Define the width of the placeholder.
- **Mimic:** Use this attribute to specify the type of placeholder (e.g., "footer", "navbar", "article"), which sets default dimensions and behavior according to the component being represented.

## Installation

Simply use npm or unpkg to install:

```bash
npm install placeholder-component
```

```html
<script src="https://unpkg.com/placeholder-component@1.0.0/placeholder-component.js"></script>
```

then import using:

```js
import "placeholder-component";
```

## Usage

Simply use as web components:

```html
<placeholder-component mimic="navbar" color="gray" height="70px"></placeholder-component>
<placeholder-component mimic="footer" color="lightgray" height="500px"></placeholder-component>
<placeholder-component mimic="article" color="darkgray"></placeholder-component>
```

## Attributes

| Attribute | Description | Default Value |
|-----------|-------------|---------------|
| `color`   | Sets the background color of the placeholder rectangle. | `#ccc` |
| `height`  | Defines the height of the placeholder. | Varies based on `mimic` value |
| `width`   | Defines the width of the placeholder. | Varies based on `mimic` value |
| `mimic`   | Sets the placeholder type (e.g., "footer", "navbar", "article"). This determines the HTML tag used and applies default dimensions and layouts. | `div` |

### Mimic Values and Defaults

- `footer` - Uses `<footer>` tag with a default height of `500px` and width of `100%`.
- `navbar` - Uses `<nav>` tag with `position: fixed` at the top, a default height of `70px`, and width of `100%`.
- `article` - Uses `<article>` tag with a default height of `700px`.
- `section` - Uses `<section>` tag with a default height of `100vh`.
- Other values - Uses a generic `<div>` tag with default height and width.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to suggest improvements or new features.

## Repository

Check out the [GitHub repository](https://github.com/yashrajbharti/placeholder-component) for more details and examples.
