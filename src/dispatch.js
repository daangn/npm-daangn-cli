const yargs = require('yargs')

const elasticsearch = require('./controller/elasticsearch')

const routing = {
  elasticsearch,
}

module.exports = (context) => {
  const { _: extraOptions } = context
  const [domain] = extraOptions
  const { command } = context

  const controller = routing[domain]
  if (controller) {
    const commander = controller[command]
    if (commander) {
      return commander(context)
    } else {
      console.log(`!!ERROR!! -- Unknown command's name that [${command}].`)
      console.log(`Read the README.md or Call @jin`)
      console.log(`Do you wanna see the 'help'?\n\n`)
      yargs.showHelp()
      process.exit(1)
    }
  } else {
    console.log(`!!ERROR!! -- Unknown domain's name that [${domain}].`)
    console.log(`Read the README.md or Call @jin`)
    console.log(`Do you wanna see the 'help'?\n\n`)
    yargs.showHelp()
    process.exit(1)
  }
}