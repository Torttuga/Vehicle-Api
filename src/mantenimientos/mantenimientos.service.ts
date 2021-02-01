import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mantenimiento } from './mantenimiento.schema';
import { Model } from 'mongoose';

@Injectable()
export class MantenimientosService {
    constructor(@InjectModel('Mantenimiento') private MantenimientoModel: Model<Mantenimiento>){}

    obtenerMantenimientos(){
        return this.MantenimientoModel.find();
    }

    actualizarMantenimiento(id: string, props: any){
        return this.MantenimientoModel.updateOne({_id: id}, {$set: props});
    }
}
