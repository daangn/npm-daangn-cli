#!/usr/bin/env node

const DESCRIPTION = `
- Enjoyful Daangn Tools -

[examples]

$ $0 <domain> [command]
$ daangn-es mecab2nori -f {INPUT_PATH} -o {OUTPUT_PATH}
`

const dispatch = require('./dispatch')

require('yargs')
  .usage(DESCRIPTION)
  .scriptName('dgn')
  .help('help')
  .version('version', '0.0.1')
  .command('mecab2nori', 'Do something about elasticsearch', (yargs) => {
    return yargs
      .option('f', {
        alias : 'file',
        type: 'string',
        nargs: 1,
      })
      .option('o', {
        alias : 'output',
        default: `result.${Date.now()}`,
        type: 'string',
        nargs: 1,
      })
      .help()
  })
  .middleware([dispatch])
  .argv