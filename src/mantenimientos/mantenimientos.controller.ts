import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';

@Controller('mantenimientos')
export class MantenimientosController {
    constructor(private service: MantenimientosService){}

    @Get()
    obtenerMantenimientos(){
        return this.service.obtenerMantenimientos();
    }

    @Patch('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async actualizarMantenimiento(@Param('id') id, @Body() props){
        try{
            await this.service.actualizarMantenimiento(id, props);
        }
        catch(e){
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
