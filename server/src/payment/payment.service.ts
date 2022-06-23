import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { Payment, PaymentDocument } from "./schemas/payment.schema";


@Injectable()
export class PaymentService {
    constructor(@InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>) {}


    async create(@Body() createPaymentDto: CreatePaymentDto): Promise<{requestId:string, amount:number}> {
        const createdPayment = new this.paymentModel(createPaymentDto);
        const {_id, amount} = createdPayment;
        createdPayment.save();
        return {
            requestId: _id,
            amount: amount
        };
    }

    async findAll(): Promise<Payment[]> {
        return this.paymentModel.find().exec();
    }
}