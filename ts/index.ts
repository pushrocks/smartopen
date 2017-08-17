import 'typings-global'
import open = require('open')

export let openUrl = async (urlArg) => {
  open(urlArg)
}
