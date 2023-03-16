import inquirer from 'inquirer'
import {} from 'module'

type Command = (name: string, lang: string) => void

async function main() {
  const type: { value: string } = await inquirer.prompt({
    name: 'value',
    type: 'list',
    message: 'What to scaffold?',
    choices: [
      {
        name: 'Page',
        key: 'page',
        value: 'page',
      },
      {
        name: 'Layout',
        key: 'layout',
        value: 'layout',
      },
      {
        name: 'Store',
        key: 'store',
        value: 'store',
      },
      {
        name: 'Composable',
        key: 'composable',
        value: 'composable',
      },
      {
        name: 'Server API',
        key: 'api-server',
        value: 'api-server',
      },
      {
        name: 'Entity',
        key: 'entity',
        value: 'entity',
      },
      {
        name: 'Exit',
        key: 'exit',
        value: 'exit',
      },
    ],
  })

  if (type.value === 'exit') {
    console.log("Thanks for using nuxt-scaffold! console.log('Have fun!') ✌😊")
    return
  }

  const name = await inquirer.prompt({
    name: 'value',
    type: 'input',
    message: 'Name?',
  })

  const lang = await inquirer.prompt({
    name: 'value',
    type: 'list',
    message: 'Language?',
    choices: [
      {
        name: 'TypeScript',
        default: true,
        value: 'ts',
      },
      {
        name: 'JavaScript',
        value: 'js',
      },
    ],
  })

  const module: { default: Command } = await import(`./functions/${type.value}`)
  const command: Command = module.default
  await command.apply(undefined, [name.value, lang.value])

  // Recursion
  main()
}

main()
