import { read } from 'rc9'

interface Config {
  port: number
  version: string
  name: string
}

const config = read<Config>()
// deep console log
console.dir(config, { depth: null })
