class UserInformation {
  async fetch(token: string) {
    const response = await fetch('https://oauth.com/login', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
}

export default UserInformation;
