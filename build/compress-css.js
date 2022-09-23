const CleanCSS = require('clean-css')
const process = require('process')

let input = ''

process.stdin.on('readable', () => {
  let chunk = process.stdin.read()
  if(chunk != null) input += chunk
})

process.stdin.on('end', () => {
  let cssRe = /\/\*compress\*\/(.|[\n\r])+?\/\*endcompress\*\//g

  let compressedOutput = input.replace(cssRe, (match, p1, offset, string) => {
    let output = new CleanCSS({}).minify(match)
    return output.styles
  });
  process.stdout.write(compressedOutput)
  process.exit()
})
