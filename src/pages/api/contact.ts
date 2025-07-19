import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    const companyName = formData.get('company-name') as string;
    const companySize = formData.get('company-size') as string;
    const contactName = formData.get('contact-name') as string;
    const companyPhone = formData.get('company-phone') as string;
    const workEmail = formData.get('work-email') as string;
    const message = formData.get('message') as string;

    // Validate required fields
    if (!companyName || !contactName || !workEmail || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Please fill in all required fields'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'a.zayets@gmail.com', // Replace with your Gmail
        pass: 'rqjfvbymgbaqrrru' // Replace with Gmail app password
      }
    });

    // Create HTML email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f17c3d;">New message from CSS Cloud Solutions website</h2>
        <div style="background-color: #f4f7fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Company Size:</strong> ${companySize || 'Not specified'}</p>
          <p><strong>Contact Name:</strong> ${contactName}</p>
          <p><strong>Phone:</strong> ${companyPhone || 'Not specified'}</p>
          <p><strong>Email:</strong> ${workEmail}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #f17c3d;">
          <h3 style="color: #002c41;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    // Send email to multiple recipients
    const mailOptions = {
      from: 'your-email@gmail.com', // Replace with your Gmail
      to: 'aaafwalex@aol.com, craig@chain-serve.com, michael@chain-serve.com, a.zayets@gmail.com',
      subject: `New message from CSS Cloud Solutions website from ${contactName}`,
      html: emailHtml,
      replyTo: workEmail
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully!'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Form processing error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'An error occurred while sending the message. Please try again later.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 