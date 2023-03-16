import { join } from 'node:path'
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'

class Model<T> {
  public _baseUrl: string | undefined
  public _fileName: string | undefined

  constructor(name: string) {
    this._baseUrl = join(process.cwd(), 'database')

    if (!existsSync(this._baseUrl)) {
      mkdirSync(this._baseUrl)
    }

    this._fileName = join(this._baseUrl, `${name}.json`)

    writeFileSync(this._fileName, JSON.stringify([]))
  }

  public findOne<K extends keyof Partial<T>>(filter: Partial<T>) {
    const collection: T[] = JSON.parse(readFileSync(this._fileName).toString())

    return collection.find((item) => {
      const keys: K[] = Object.keys(filter) as K[]
      return keys.every((key: K) => item[key] === filter[key])
    })
  }

  public create(data: T) {
    const collection: T[] = JSON.parse(readFileSync(this._fileName).toString())
    collection.push(data)
    writeFileSync(this._fileName, JSON.stringify(collection))
  }
}

export function createModel<T>(name: string): Model<T> {
  return new Model<T>(name)
}
