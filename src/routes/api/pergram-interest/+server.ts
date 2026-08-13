import { Resend } from 'resend';
import { getSiteConfig } from '$lib/utils/content';
import { RESEND_API_KEY } from '$env/static/private';

const toEmail = getSiteConfig().email;
const fromEmail = getSiteConfig().resendEmail;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export const POST = async ({ request }) => {
	const resend = new Resend(RESEND_API_KEY);
	const { email } = await request.json();

	if (typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email.trim())) {
		return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), {
			status: 400
		});
	}

	const { data, error } = await resend.emails.send({
		from: fromEmail,
		to: toEmail,
		subject: 'New PerGram early access signup',
		text: `Someone wants early access to PerGram:\nEmail: ${email.trim()}`
	});

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
	console.log('Email sent successfully');
	return new Response(JSON.stringify({ data }), { status: 200 });
};
