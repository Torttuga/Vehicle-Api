import { Module } from '@nestjs/common';
import { MantenimientoSchema } from './mantenimiento.schema';
import { MantenimientosController } from './mantenimientos.controller';
import { MantenimientosService } from './mantenimientos.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Mantenimiento', schema: MantenimientoSchema}])
  ],
  controllers: [MantenimientosController],
  providers: [MantenimientosService]
})
export class MantenimientosModule {}
