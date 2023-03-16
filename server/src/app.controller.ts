import { Controller, Get, Redirect } from '@nestjs/common'

@Controller('app')
export class AppController {
  constructor() {}

  @Get()
  @Redirect(
    'https://nuxtstarter2bxzgq-iy0j--3000.local-credentialless.webcontainer.io'
  )
  public index() {}
}
