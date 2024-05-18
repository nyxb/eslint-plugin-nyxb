import nyxb from '@nyxb/eslint-config'
import { tsImport } from 'tsx/esm/api'

const local = await tsImport('./src/index.ts', import.meta.url).then(r => r.default)

export default nyxb(
  {
    ignores: ['vendor'],
  },
  {
    name: 'tests',
    files: ['**/*.test.ts'],
    rules: {
      'nyxb/indent-unindent': 'error',
    },
  },
)
  // replace local config
  .onResolved((configs) => {
    configs.forEach((config) => {
      if (config?.plugins?.nyxb)
        config.plugins.nyxb = local
    })
  })
