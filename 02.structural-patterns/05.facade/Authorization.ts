class Authorization {
  async getCode(client_id: string) {
    const response = await fetch('https://oauth.com/authorize', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        client_id,
      },
    });
    const data = await response.json();
    return data;
  }
}

export default Authorization;
