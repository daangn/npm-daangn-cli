const csvtojsonV2 = require("csvtojson/v2")
const fs = require('fs')

module.exports.mecab2nori = (context) => {
  let inputFilePath = context.file
  let outputFilePath = context.output

  // validation check 나중에 joi를 이용하여 구조화 할 예정
  if (!inputFilePath) {
    console.error('ERROR -- you have to put these options')
    console.log('-f, --file [Required] input file path')
    console.log('-o, --output [Choice] output file path')
    process.exit(1)
  }

  const NO_MEANS = '*'
  const INDEX_ENTRY = 0
  const INDEX_TYPE_DETAIL = 8
  const INDEX_ANALYZED_WORD = 11

  csvtojsonV2({
    noheader:true,
    output: "csv"
  })
  .fromFile(inputFilePath)
  .then((json) => {
    const file = fs.openSync(outputFilePath, 'w')
    json.filter((itemArray) => {
      const entry = itemArray[INDEX_ENTRY]
      const typeDetail = itemArray[INDEX_TYPE_DETAIL]
      const analyzedWord = itemArray[INDEX_ANALYZED_WORD]
      let compounds = []

      if (typeDetail !== NO_MEANS) {
        compounds = analyzedWord
          .match(/([가-힣]+)/g)
          .filter(item => !!entry.includes(item))
      }
      fs.writeSync(file, `${[entry, ...compounds].join(' ')}\n`)
    })
    fs.close(file, () => {})
  })
  return context
}