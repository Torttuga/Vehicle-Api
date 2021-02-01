import { IsNotEmpty } from "class-validator";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

@Schema()
export class Mantenimiento extends Document{
    @Prop()
    description: string;

    @Prop()
    make: string;

    @Prop()
    @IsNotEmpty()
    estimatedate: string;

    @Prop()
    id: number;

    @Prop()
    km: number;
    
    @Prop()
    image: string;

    @Prop()
    @IsNotEmpty()
    name: string;

    @Prop()
    @IsNotEmpty()
    assigned: boolean;
}

export const MantenimientoSchema = SchemaFactory.createForClass(Mantenimiento);