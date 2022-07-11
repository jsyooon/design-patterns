class Token {
  async getToken(body: { authorization_code: string; client_id: string }) {
    const response = await fetch('https://oauth.com/token', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }
}

export default Token;
