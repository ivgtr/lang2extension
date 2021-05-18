### lang2extension

- Determine extension from language name.

---

_Support for getting the extension from the language name._

_I used it to determine the file extension for scraping when I could only get the language name._

## Usage

### Package

```shell
$ npm install lang2extension
```

```js
import { lang2extension } from "lang2extension";

console.log(lang2extension("Python (3.8.2)"));
// => .py

console.log(lang2extension("!?!?!?!?"));
// => undefined
```

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/ivgtr?style=social)](https://twitter.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)
