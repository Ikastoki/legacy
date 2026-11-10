import type { APIRoute } from 'astro';

export const prerender = false;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, { status: 204, headers });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, model } = await request.json();

    const apiKey = import.meta.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key no configurada' }), {
        status: 500,
        headers,
      });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'X-Title': 'Tutorial Hell',
      },
      body: JSON.stringify({
        model: model || 'google/gemini-2.0-flash-exp:free',
        messages: [
          { role: 'system', content: 'Eres un profesor experto en programación. Responde de forma breve, clara y didáctica. Ve al grano, sin rodeos.' },
          { role: 'user', content: message },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: response.status,
        headers,
      });
    }

    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers,
    });
  }
};
