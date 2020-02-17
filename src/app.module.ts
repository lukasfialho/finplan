import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './schemas/user.schema';
import { TransacaoController } from './controllers/transacao/transacao.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true
    }),
    TypegooseModule.forRoot(
      process.env.DATABASE_URI
    ),
    TypegooseModule.forFeature([User])
  ],
  controllers: [AppController, UserController, TransacaoController],
  providers: [AppService, UserService],
})
export class AppModule {}
