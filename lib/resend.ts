"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

type Submission = {
  email: string;
  name: string;
  phoneNumber: string;
  message: string;
}

export async function sendSubmission({ data }: { data: Submission }) {
  const email = await resend.emails.send({
    from: 'Lindrit <contact@lindritsulaj.com>',
    to: ['sulajlindrit@gmail.com'],
    subject: 'New Form Submission - lindritsulaj.com',
    html: `
      <p>Someone just submitted a form in the developer portfolio.</p>
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Message</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>${data.email}</td>
            <td>${data.name}</td>
            <td>${data.phoneNumber}</td>
            <td>${data.message}</td>
          </tr>
        </tbody>
      </table>
    `
  });

  if (email.error) {
    throw new Error("Something went wrong")
  } else {
    return "Email has been sent";
  }
}