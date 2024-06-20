// .vitepress/theme/index.ts
import Theme from 'vitepress/theme';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import '@shikijs/vitepress-twoslash/style.css';
import type { EnhanceAppContext } from 'vitepress';

export default {
  extends: Theme,
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue);
  }
};
