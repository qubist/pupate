import * as path from 'path'
import * as fs from 'fs'

import { Options } from './options'

export function createStylesheet(outputLocation: string, options: Options) {
  fs.writeFileSync(`${outputLocation}/styles.css`, renderStylesheet(options))
}

function renderStylesheet(options: Options): string {
  // bring in template homepage from defaults folder
  let stylesheet: string = fs.readFileSync(path.resolve(__dirname, '../../lib/defaults/imago/styles.css')).toString()

  // replace keywords in styles template, bottom to top
  // FIXME: options should mabe be an interface? needs work
  stylesheet = stylesheet.replace(/LINKCOLOR/, options.linkColor)
  stylesheet = stylesheet.replace(/BACKGROUNDCOLOR/, options.backgroundColor)
  stylesheet = stylesheet.replace(/TEXTCOLOR/, options.textColor)
  stylesheet = stylesheet.replace(/FONTSIZE/, options.size)
  stylesheet = stylesheet.replace(/FONTFAMILY/, options.font)

  return stylesheet
}