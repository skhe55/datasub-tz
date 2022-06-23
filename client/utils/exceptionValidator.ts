export const validateException = (errors: Array<string>) => {
    let messages:string[] = [];
    errors.map((element:string) => {
        if(element.indexOf('expiration_date') !== -1) {
            messages.push('укажите верный формат даты выпуска');
        } else if(element.indexOf('card_number') !== -1) {
            messages.push('кол-во цифр номера карты неверно')
        } else if(element.indexOf('cvv') !== -1) {
            messages.push('кол-во цифр кода cvv неверно')
        } else if(element.indexOf('amount') !== -1) {
            messages.push('платеж должен быть положительным числом')
        }
    }) 
    return messages;
}