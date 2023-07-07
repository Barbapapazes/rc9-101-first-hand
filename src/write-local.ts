import { read, write } from 'rc9'

const config = {
  port: 5678,
  version: '3.0.0-beta.1',
  keywords: ['rc9', 'config', 'rc'],
}

write(config, 'write.conf')

console.dir(read('write.conf'), { depth: null })
