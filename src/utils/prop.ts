import _isString from 'lodash/isString'
import _isObject from 'lodash/isObject'
import _transform from 'lodash/transform'
import _join from 'lodash/join'

export type ClassNameProp = string | Object

export const resolveClassName = (className: ClassNameProp): string => {
  if (_isString(className)) return className
  if (_isObject(className)) {
    return _join(_transform(className, (result: Array<string>, isEnable: any, name: string) => {
      if (!!isEnable) {
        result.push(name)
      }

      return result
    }, []), ' ')
  }

  throw new Error('Invalid typeof "className" prop.')
}
