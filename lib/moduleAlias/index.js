const moduleAlias = require('module-alias')

moduleAlias.addAliases({
  '@error': __dirname + '/../../lib/error',
  '@model': __dirname + '/../../models'
})
