import { upperFirst, camelCase } from 'lodash'

export default function pascalCase(str) {
  return upperFirst(camelCase(str))
}
