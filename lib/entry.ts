import * as fs from 'fs'

export interface Entry {
  filename: string, // filename without extension
  title: string,
  datestring: string,
  content: string
}

export function makeEntry(path: string): Entry {
  let file = fs.readFileSync(path)
  let lines = file.toString().split(/\r?\n/)
  // final filename in path, without extension
  let filename = path.split('/').slice(-1)[0].split('.').slice(0,1)[0]

  return {
    filename,
    title: lines[0], // first line is title
    datestring: lines[1], // second is datestring
    content: lines.slice(2).join('\n') // all lines after that are content
  }
}
