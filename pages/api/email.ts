
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set');
  process.exit(1);
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

type EmailFormData = {
  sender: string;
  email: string;
  content: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    
  const { sender, email, content }: EmailFormData = body;

  // Validate the required fields
  if (!sender || !email || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }


  const msg = {
    to: 'hclaire1007@gmail.com',
    from: 'hclaire1007@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Sender: ${sender}\nEmail: ${email}\nContent: ${content}`,
    html: `<strong>Sender:</strong> ${sender}<br><strong>Email:</strong> ${email}<br><strong>Content:</strong> ${content}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error instanceof Error ? error.message : String(error) });
  }
}

// import type { NextApiRequest, NextApiResponse } from 'next';
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     const msg = {
//       to: 'hclaire1007@gmail.com',
//       from: 'hclaire1007@gmail.com', // Must be a verified sender
//       subject: 'New Contact Form Portfolio',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       html: `
//         <strong>Name:</strong> ${name}<br>
//         <strong>Email:</strong> ${email}<br>
//         <strong>Message:</strong> ${message}
//       `,
//     };

//     try {
//       const response = await sgMail.send(msg);
//       console.log('Email sent successfully:', response);
//       res.status(200).json({ success: true });
//     } catch (error: any) {
//       console.error('Error sending email:', error);
//       if (error.response) {
//         console.error(error.response.body);
//       }
//       res.status(500).json({ 
//         success: false, 
//         error: 'Failed to send email',
//         details: error.message
//       });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }