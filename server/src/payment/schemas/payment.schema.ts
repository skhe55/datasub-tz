import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
    @Prop({required: true})
    card_number: number;

    @Prop({required: true})
    expiration_date: string;

    @Prop({required: true})
    cvv: number;

    @Prop({required: true})
    amount: number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);