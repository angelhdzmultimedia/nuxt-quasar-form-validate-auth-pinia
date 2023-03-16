import { Controller, Get, Logger, Redirect } from '@nestjs/common'

@Controller('')
export class AppController {
  constructor() {}

  @Get()
  @Redirect(
    'https://nuxtstarter2bxzgq-iy0j--3000.local-credentialless.webcontainer.io',
  )
  public index() {
    Logger.log('index app')
  }
}
