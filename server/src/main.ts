import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(
    session({
      secret: 'asdasd9as09das9d0as9d',
      cookie: { maxAge: 60000 },
      resave: false,
      saveUninitialized: false,
    })
  )
  app.enableCors({
    origin: '*',
    credentials: true,
  })
  // app.setGlobalPrefix('api')
  await app.listen(5000)
}
bootstrap()
