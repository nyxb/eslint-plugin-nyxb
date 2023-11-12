import nyxb from '@nyxb/eslint-config'

export default nyxb(
   undefined,
   {
      ignores: ['vendor', 'pnpm-workspace.yaml', '.github/*'],
   },
)
