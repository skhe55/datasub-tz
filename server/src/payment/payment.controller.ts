import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { PaymentService } from "./payment.service";
import { Payment } from "./schemas/payment.schema";

@ApiTags('Payment Service')
@Controller('payment') 
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @Post("/create-payment")
    async createPayment(@Body() createPaymentDto: CreatePaymentDto): Promise<{requestId:string, amount:number}>{
        return await this.paymentService.create(createPaymentDto);
    }

    @Get("/get-payments")
    async getPayments(): Promise<Payment[]> {
        return await this.paymentService.findAll();
    }
}