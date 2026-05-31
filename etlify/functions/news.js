exports.handler = async function(event, context) {
  const url = 'https://news.google.com/rss/search?q=Trump&hl=en-US&gl=US&ceid=US:en';
  try {
    const res = await fetch(url);
    const xml = await res.text();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
      },
      body: xml,
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
