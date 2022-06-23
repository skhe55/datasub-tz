import { Button, Stack, TextField } from "@mui/material";
import Box  from "@mui/material/Box";
import { keyframes } from "@mui/material";
import * as React from "react";
import axios from "axios";
import { validateException } from "~/utils/exceptionValidator";

const buttonAnimation = keyframes`
    from {
        mask-position: 150%;
    } 
    to {
        mask-position: -50%;
    }
`
const PaymentCard: React.FC = () => {
    const [date, setDate] = React.useState<string>('01/2022');
    const [cardNumber, setCardNumber] = React.useState<string>('');
    const [cvv, setCvv] = React.useState<string>('123');
    const [amount, setAmount] = React.useState<number | null>(null);
    const [disableButton, setDisableButton] = React.useState<boolean>(true);

    const onClickButton = async () => {
        try {
            const data = await axios.post(`http://localhost:3001/payment/create-payment`, {
                "card_number": cardNumber.toString(),
                "expiration_date": date,
                "cvv": cvv.toString(),
                "amount": amount
            })
            alert(JSON.stringify(data.data))
        } catch(e: any) {
            alert(validateException(e.response.data).join('\n'));
        }   
    }

    React.useEffect(() => {
        if(date && cardNumber && cvv && amount) {
            setDisableButton(false);
        }   
    }, [date, cardNumber, cvv, amount])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 380,
                height: 430,
                backgroundColor: '#ead4d7',
                borderRadius: 12
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '10% 5% 10% 5%'
                }}
            >
                <Stack spacing={3}>
                    <TextField 
                        sx={{
                            boxShadow: '5px 5px 8px #1d815e',
                            borderRadius: 1
                        }}
                        required
                        id="outlined"
                        label="Card Number"
                        type='number'
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                    />
                    <TextField 
                        sx={{
                            boxShadow: '5px 5px 8px #1d815e',
                            borderRadius: 1
                        }}
                        required
                        id="outlined-required"
                        label="mm/yyyy"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                    <TextField 
                        sx={{
                            boxShadow: '5px 5px 8px #1d815e',
                            borderRadius: 1
                        }}
                        required
                        id="outlined"
                        label="CVV"
                        type="number"
                        value={cvv}
                        onChange={(event) => setCvv(event.target.value)}
                    />
                    <TextField 
                        sx={{
                            boxShadow: '5px 5px 8px #1d815e',
                            borderRadius: 1
                        }}
                        required
                        id="outlined-number"
                        label="Amount"
                        type="number"
                        onChange={(event) => setAmount(Number(event.target.value))}
                    />
                    {disableButton === true ? 
                        <Button disabled>Save Payment</Button> :
                        <Button
                            sx={{
                                '&:hover': {
                                    maskImage: 'linear-gradient(-75deg, rgba(0, 0, 0, .6) 30%, #000 50%, rgba(0, 0, 0, .6) 70%)',
                                    maskSize: '200%',
                                    'animation': `${buttonAnimation} 4s infinite`
                                },

                            }}
                            variant="contained"
                            onClick={onClickButton}
                        >
                            Save Payment
                        </Button>
                    }
                </Stack>
            </Box>
        </Box>
    );
}   

export default PaymentCard;

