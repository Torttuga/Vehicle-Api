import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:sonofkrypton@cluster0.ungvf.mongodb.net/vehiculodb?retryWrites=true&w=majority'),
    MantenimientosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
