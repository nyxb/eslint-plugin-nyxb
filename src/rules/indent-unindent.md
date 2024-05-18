# indent-unindent

Enforce consistent indentation style for content inside template string with [`unindent`](https://github.com/nyxb/utils/blob/6cc9a99faaca1767969a375fdb2f222130d196c8/src/string.ts#L124) tag.

## Rule Details

<!-- eslint-skip -->
```js
// 👎 bad
import { unindent } from '@nyxb/utils'

const cases = [
  unindent`
const foo = {
  bar: 'baz', qux: 'quux',
  fez: 'fum'
}`,
  unindent`
      if (true) {
        console.log('hello')
      }`,
]
```

<!-- eslint-skip -->
```js
// 👍 good
import { unindent } from '@nyxb/utils'

const cases = [
  unindent`
    const foo = {
      bar: 'baz', qux: 'quux',
      fez: 'fum'
    }
  `,
  unindent`
    if (true) {
      console.log('hello')
    }
  `,
]
```

By default it affects the template tag named `unindent`, `unIndent` or `$`. This rule works specifically for the `unindent` utility function from [`@nyxb/utils`](https://github.com/nyxb), where the leading and trailing empty lines are removed, and the common indentation is removed from each line. This rule fixes the content inside the template string but shall not affect the runtime result.
