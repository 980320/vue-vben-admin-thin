import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const example: AppRouteModule = {
  path: '/example',
  name: 'Example',
  component: LAYOUT,
  redirect: '/example/form',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.example.moduleName'),
  },
  children: [
    {
      path: 'form',
      name: 'FormExample',
      meta: {
        title: t('routes.demo.example.form'),
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/example/form/index.vue'),
    },
  ],
};

export default example;
