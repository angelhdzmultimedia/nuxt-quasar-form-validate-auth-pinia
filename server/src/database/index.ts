import { join } from 'node:path'
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { randomUUID } from 'node:crypto'

class Model<T> {
  public _baseUrl: string | undefined
  public _fileName: string = ''

  constructor(name: string) {
    this._baseUrl = join(process.cwd(), 'database')

    if (!existsSync(this._baseUrl)) {
      mkdirSync(this._baseUrl)
    }

    this._fileName = join(this._baseUrl, `${name}.json`)

    writeFileSync(this._fileName, JSON.stringify([]))
  }

  public async findOne<K extends keyof Partial<(T & {id: string})>>(filter: Partial<(T & {id: string})>): Promise<(T & {id: string}) | undefined> {
    const collection: (T & {id: string})[] = JSON.parse(readFileSync(this._fileName).toString())

    return collection.find((item) => {
      const keys: K[] = Object.keys(filter) as K[]
      return keys.every((key: K) => item[key] === filter[key])
    })
  }

  public async create(data: T): Promise<T> {
    const collection: (T & {id: string})[] = JSON.parse(readFileSync(this._fileName).toString())
    const createdItem = {
      ...data,
      id: randomUUID()
    }
    collection.push(createdItem)
    writeFileSync(this._fileName, JSON.stringify(collection))
    return createdItem
  }
}

export function createModel<T>(name: string): Model<T> {
  return new Model<T>(name)
}
