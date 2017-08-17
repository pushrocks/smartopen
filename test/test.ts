import { expect, tap } from 'tapbundle'

import * as smartopen from '../ts/index'

tap.test('should open a webpage', async () => {
  smartopen.openUrl('https://lossless.com')
})

tap.start()
