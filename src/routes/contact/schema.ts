import {
	object,
	string,
	email,
	pipe,
	boolean,
	maxLength,
	minValue,
	nonEmpty,
	nullish,
	number
} from 'valibot';

// ####### Zod ##########
// export const schema = z.object({
// 	msg: z.string().min(2),
// 	email: z.string().email()
// });

const emailErr = 'Моля, въведете валиден имейл адрес ';
const msgErr = 'Съобщението е твърде дълго!';
const termsErr = 'Необходимо е съгласието';

// ####### Valibot ##########
export const schema = object({
	// name: pipe(optional(string(), 'Hello world!'), minLength(2)),
	msg: pipe(string(), maxLength(250, msgErr)),
	email: pipe(string(), email(emailErr)),
	// terms: boolean(),
	// email: pipe(string(), email()),
	terms: pipe(boolean(), minValue(true, termsErr)),
	cfTurnstileResponse: pipe(string(), nonEmpty('Please complete turnstile')),
	throttling: pipe(nullish(number()))
});
