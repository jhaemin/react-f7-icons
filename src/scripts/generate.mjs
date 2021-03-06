import { pascalCase } from 'change-case'
import fs from 'fs'
import fsExtra from 'fs-extra'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const projectRootDir = path.resolve(__dirname, '../../')

const iconTemplateComponent = fs.readFileSync(
  path.join(projectRootDir, '/src/templates/Icon.template.tsx'),
  'utf8'
)

const svgDirName = path.join(projectRootDir, '/f7-icons/package/svg')

const svgFileNames = fs.readdirSync(svgDirName)

// Create generated directory if not exists
const generatedDir = path.join(projectRootDir, '/src/lib/generated')

if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir)
}

// Empty the generated directory
fsExtra.emptyDirSync(generatedDir)

// Create generated components directory if not exists
const generatedComponentDir = path.join(generatedDir, '/components')

if (!fs.existsSync(generatedComponentDir)) {
  fs.mkdirSync(generatedComponentDir)
}

svgFileNames.forEach((svgFileName) => {
  const iconComponentName = pascalCase(svgFileName.replace(/.svg$/g, ''))
  const svgFile = fs
    .readFileSync(path.join(svgDirName, svgFileName), 'utf8')
    .replace('<svg', '<svg className={className} style={style} fill={fill}')
    .replace(/width=".*?"/g, '')
    .replace(/height=".*?"/g, 'height={size ?? "1em"}')
    .replace('fill-rule', 'fillRule')

  const iconComponentNameReg = new RegExp('{{// ICON_COMPONENT_NAME //}}', 'gi')
  const componentFile = iconTemplateComponent
    .replace('{{// SVG_DATA //}}', svgFile)
    .replace(iconComponentNameReg, iconComponentName)

  fs.writeFileSync(
    path.join(generatedComponentDir, `${iconComponentName}.tsx`),
    componentFile
  )
})

const iconNames = svgFileNames.map((name) => `'${name.replace(/.svg$/g, '')}'`)

// fs.writeFileSync(
//   path.join(projectRootDir, '/test/icon-names.ts'),
//   `export const iconNames = [${iconNames.join(', ')}]`
// )

// const generatedTypesFile = `export type F7IconName = ${iconNames.join(' | ')}`

// fs.writeFileSync(path.join(generatedDir, '/types.ts'), generatedTypesFile)

const iconsMapExports = iconNames
  .map((name) => {
    const componentName = pascalCase(name)

    return `export { default as ${componentName} } from './components/${componentName}'`
  })
  .join('\n')

fs.writeFileSync(path.join(generatedDir, '/index.ts'), iconsMapExports)
