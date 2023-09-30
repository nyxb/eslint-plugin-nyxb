import { RuleCreator } from '@typescript-eslint/utils/eslint-utils'

const hasDocs = [
   'consistent-list-newline',
   'if-newline',
   'import-dedupe',
   'top-level-function',
]

const blobUrl = 'https://github.com/nyxb/eslint-plugin-nyxb/blob/main/src/rules/'

export const createEslintRule = RuleCreator(
   ruleName => hasDocs.includes(ruleName)
      ? `${blobUrl}${ruleName}.md`
      : `${blobUrl}${ruleName}.test.ts`,
)
