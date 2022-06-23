import {ValidateBy, buildMessage, ValidationOptions} from 'class-validator';

export const IS_CUSTOM_DATE = 'isCustomDate';


/**
 * Checks if a given value is a date.
 */
export function isCustomDate(value: string): boolean {
    return !isNaN(Date.parse(value.split('/').reverse().join('-')));
}


/**
 * Checks if a value is a date.
 */
export function IsCustomDate(validationOptions?: ValidationOptions): PropertyDecorator {
    return ValidateBy(
        {
            name: IS_CUSTOM_DATE,
            validator: {
                validate: (value, args): boolean => isCustomDate(value),
                defaultMessage: buildMessage(eachPrefix => eachPrefix + `$property must be a Date instance`, validationOptions),
            },
        },
        validationOptions
    );
}