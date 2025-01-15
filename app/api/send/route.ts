import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_b2CPYw9X_7YQ9TvKpayfNkdMVR5QAkThe');

export async function POST() {
  try {
    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      // to: ['delivered@resend.dev'],
      to: ['jrayc.email@gmail.com'],
      subject: 'Hello from Resend and Next.js',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({message: 'Email sent successfully'}, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// import { Resend } from 'resend';

// const resend = new Resend('re_b2CPYw9X_7YQ9TvKpayfNkdMVR5QAkThe');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'jrayc.email@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });