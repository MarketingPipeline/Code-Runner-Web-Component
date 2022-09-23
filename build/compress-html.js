const minify = require('html-minifier').minify
const process = require('process')

let input = ''

process.stdin.on('readable', () => {
  let chunk = process.stdin.read()
  if(chunk != null) input += chunk
})

process.stdin.on('end', () => {
  let cssRe = /<!--compress-->(.|[\n\r])+?<!--endcompress-->/

  let compressedOutput = input.replace(cssRe, (match, p1, offset, string) => {
    return minify(match, {
      removeAttributeQuotes: true,
      removeComments: true,
      collapseWhitespace: true
    })
  })
  process.stdout.write(compressedOutput)
  process.exit()
});
