import nodemailer from 'nodemailer';
import { NODEMAILER_GOOGLE_EMAIL, NODEMAILER_GOOGLE_EMAIL_PASSWORD } from '$env/static/private';

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: NODEMAILER_GOOGLE_EMAIL,
		pass: NODEMAILER_GOOGLE_EMAIL_PASSWORD
	}
});

transporter.verify(function (error, success) {
	if (error) {
		console.log('emailSetup.server.js verify error:', error.name);
		transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: NODEMAILER_GOOGLE_EMAIL,
				pass: NODEMAILER_GOOGLE_EMAIL_PASSWORD
			}
		});
	} else {
		console.log('emailSetup.server.js verify success:', success);
	}
});

export default transporter;
