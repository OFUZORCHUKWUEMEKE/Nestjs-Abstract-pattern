import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/user.entity';
@Module({
  imports: [UserModule, TypeOrmModule.forRootAsync({
    useFactory: () => {
      return {
        type: 'postgres',
        url: 'postgresql://emeke:password@localhost:5434/user',
        // autoLoadEntities: true,
        synchronize: true,
        host: 'localhost',
        entities: [
             User
        ]
      }
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
