interface Env {
  BREVO_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos obligatorios' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const brevoPayload = {
      sender: { name, email },
      to: [{ email: 'jplapersonal@gmail.com', name: 'Jose Pla' }],
      subject: `Nuevo mensaje de Festeret.AI de: ${name}`,
      htmlContent: `
        <h2>Nuevo contacto desde la web Festeret.AI</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': context.env.BREVO_API_KEY
      },
      body: JSON.stringify(brevoPayload)
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Brevo API Error:', err);
      return new Response(JSON.stringify({ error: 'Error al enviar el email vía Brevo' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
