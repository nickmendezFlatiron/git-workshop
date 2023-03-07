function readFile() {
  const fs = require('fs')
  const file = fs.readFileSync(process.argv[2], 'utf-8').trim()
  return file.split('\n')
  // return an array of strings
}

function main(){
  readFile()
}

main()