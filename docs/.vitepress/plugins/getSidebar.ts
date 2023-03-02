import { sep } from 'path'
import glob from 'glob'
import { sortBy } from 'lodash-es'

const otherSidebarType = {
  electron: '@Electron',
  firebase: '@Firebase',
  integrations: '@integrations',
  math: '@数学',
  router: '@路由',
  rxjs: '@rxjs',
}

const allSidebarType = {
  state: '状态',
  elements: 'DOM',
  browser: '浏览器',
  sensors: '传感器',
  network: '网络',
  animation: '动画',
  component: '功能',
  watch: '监听',
  reactivity: 'Reactivity',
  array: '数组',
  time: '时间',
  utilities: '工具',
  ...otherSidebarType,
}

const globalIgnoreMDFiles = ['README']
type Sidebar = SidebarGroup[]

interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsible?: boolean
  collapsed?: boolean
  dirName?: string
  link?: string
}

interface SidebarItem {
  text: string
  link: string
  dirName?: string
}
interface Options {
  ignoreDirectory?: Array<string>
  ignoreMDFiles?: Array<string>
}

const getName = (path: string) => {
  let name = path.split(sep).pop() || path
  const argsIndex = name.lastIndexOf('--')
  if (argsIndex > -1)
    name = name.substring(0, argsIndex)

  name = name.replace(/^\d+[.\-_ ]?/, '')
  return name
}

const getDirName = (path: string) => {
  if (path === 'index')
    return
  let name = path.split(sep).shift() || path
  name = name.replace(/^\d+[.\-_ ]?/, '')
  return name
}

const getChildren = function (
  parentPath: string,
  ignoreMDFiles: Array<string> = [],
) {
  const pattern = '/**/*.md'

  const files = glob.sync(parentPath + pattern).reduce((acc, path) => {
    const newPath = path.slice(parentPath.length + 1, -3)
    if (![...ignoreMDFiles, ...globalIgnoreMDFiles]?.includes(newPath.split(sep).pop()))
      acc.push({ path: newPath })
    return acc
  }, [])
  const coreTypeKeys = Object.keys(allSidebarType)
  return sortBy(files, (file) => {
    const dirName = getDirName(file.path)
    return coreTypeKeys.findIndex(key => key === dirName)
  }).map(file => file?.path || '')
}

function side(baseDir: string, options?: Options) {
  const parentPath = baseDir.replace('./docs', '')
  const ignoreDir = options?.ignoreDirectory ?? []
  const mdFiles = getChildren(baseDir, options?.ignoreMDFiles)
  return mdFiles.reduce<Sidebar>((acc, current) => {
    const dirName = getDirName(current)
    if (ignoreDir.includes(dirName))
      return acc
    const sidebarItem = acc.find(item => item.dirName === dirName)
    let link = `${parentPath}/${current}`
    let text = getName(current)
    if (link.endsWith('/index')) {
      link = link.slice(0, -5)
      text = link.split('/').filter(Boolean).pop()
    }
    const title = allSidebarType[dirName] ?? dirName
    const groupAttrs = dirName in otherSidebarType ? { link: `/functions/${dirName}/README` } : {}
    if (sidebarItem)
      sidebarItem.items.push({ text, link })
    else
      acc.push({ text: title, dirName, items: [{ text, link }], ...groupAttrs })

    return acc
  }, [])
}

export const getSideBar = (rootDir = './', options?: Options) =>
  side(rootDir, options)
