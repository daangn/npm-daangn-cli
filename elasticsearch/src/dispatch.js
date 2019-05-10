const yargs = require('yargs')

const mecab2nori = require('./controller/mecab2nori')

const routing = {
  mecab2nori,
}

module.exports = (context) => {
  const { _: extraOptions } = context
  const [domain] = extraOptions

  const controller = routing[domain]
  if (controller) {
    controller(context)
  } else {
    console.log(`!!ERROR!! -- Unknown domain's name that [${domain}].`)
    console.log(`Read the README.md or Call @jin`)
    console.log(`Do you wanna see the 'help'?\n\n`)
    yargs.showHelp()
    process.exit(1)
  }
}