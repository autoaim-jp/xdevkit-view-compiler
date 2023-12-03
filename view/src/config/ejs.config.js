import path from 'path'
import { fileURLToPath } from 'url'

const breadcrumbAllList = {
  '/': 'ホーム',
  '/page1': 'ページ1',
}

const getBreadcrumbList = (pathList) => {
  return pathList.map((path) => { return { path, label: breadcrumbAllList[path] } })
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ejsConfig = {
  _common: {
    componentPath: __dirname + '/../ejs/component/',
    xdevkitComponentPath: __dirname + '/../ejs/_xdevkit/component/',
  },

  index: {
    title: 'xlogin.jp',
    description: 'simple login service',
    author: 'autoaim_jp',
    breadcrumbList: getBreadcrumbList(['/']),

    inlineCssList: [],
    externalCssList: ['/css/tailwind.css'],
    inlineScriptList: ['/js/index/app.js'],
    externalScriptList: [],
  },
  
  page1: {
    title: 'page1 | xlogin.jp',
    description: 'sample page',
    author: 'autoaim_jp',
    breadcrumbList: getBreadcrumbList(['/', '/page1']),

    inlineCssList: ['/css/tailwind.css'],
    externalCssList: [],
    inlineScriptList: ['/js/login/app.js'],
    externalScriptList: [],
  },
}

export default {
  ejsConfig,
}

