import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from '../ninjas/ninjas.module';
import { NinjasController } from '../ninjas/ninjas.controller';
import { NinjasService } from '../ninjas/ninjas.service';

@Module({
  imports: [NinjasModule],
  controllers: [AppController, NinjasController],
  providers: [AppService, NinjasService],
})

export class AppModule {}
