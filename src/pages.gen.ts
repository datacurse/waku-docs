import type { PathsForPages, GetConfigResponse } from 'waku/router';

import type { getConfig as About_getConfig } from './pages/about';
import type { getConfig as Index_getConfig } from './pages/index';
import type { getConfig as CatchAll_getConfig } from './pages/[...catchAll]';

type Page =
| ({path: '/about'} & GetConfigResponse<typeof About_getConfig>)
| {path: '/fundamentals/introduction'; render: 'dynamic'}
| ({path: '/'} & GetConfigResponse<typeof Index_getConfig>)
| ({path: '/[...catchAll]'} & GetConfigResponse<typeof CatchAll_getConfig>)
;

  declare module 'waku/router' {
    interface RouteConfig {
      paths: PathsForPages<Page>;
    }
    interface CreatePagesConfig {
      pages: Page;
    }
  }
  