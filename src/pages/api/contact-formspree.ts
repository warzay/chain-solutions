import type { APIRoute } from 'astro';

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

    // Use Formspree for email sending
    // Replace 'YOUR_FORMSPREE_ENDPOINT' with your Formspree endpoint
    const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: workEmail,
        name: contactName,
        company: companyName,
        phone: companyPhone,
        companySize: companySize,
        message: message,
        _subject: `New message from CSS Cloud Solutions website from ${contactName}`,
        _replyto: workEmail,
        _to: 'aaafwalex@aol.com, craig@chain-serve.com, michael@chain-serve.com, a.zayets@gmail.com',
        _format: 'html'
      })
    });

    if (formspreeResponse.ok) {
      return new Response(JSON.stringify({
        success: true,
        message: 'Message sent successfully!'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Formspree sending error');
    }

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