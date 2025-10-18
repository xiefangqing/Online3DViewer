import i18next from 'i18next';
import { CookieGetStringVal } from './cookiehandler.js';
import { HashHandler } from './hashhandler.js';
import zhCN from './locale/zh-CN.json' assert { type: 'json' };

/**
 * 1. 添加支持 i18n，默认为您的浏览器语言。并回退到英语。
 * 2. 从哈希参数指定语言环境
 * http://localhost:8080/website/index.html#model=assets/models/MultipleMeshes.bim$locale=zh-CN
 * http://localhost:8080/website/index.html#model=assets/models/MultipleMeshes.bim$locale=en-US
 */

const hashHandler = new HashHandler();

const defaultLang =
  typeof navigator !== 'undefined'
    ? hashHandler.GetLocaleFromHash() || CookieGetStringVal('ov_language', navigator.language)
    : '';

i18next.init({
  lng: defaultLang,
  debug: false,
  supportedLngs: ['zh-CN'],
  resources: {
    'zh-CN': { translation: zhCN },
  },
});

const t = i18next.t;

export { i18next, t };

if (typeof document !== 'undefined') {
  // translate HTML
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-i18n]').forEach((ele) => {
      const translateKey = ele.getAttribute('data-i18n') || ele.textContent;
      ele.textContent = t(translateKey);
    });
  });
}
