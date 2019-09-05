import { expect, tap } from '@pushrocks/tapbundle';

import * as smartopen from '../ts/index';

tap.test('should open a webpage', async () => {
  await smartopen.openUrl('https://lossless.com');
});

tap.start();
