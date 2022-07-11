import Login, { User } from './Login';

class IDLogin implements Login {
  $id: HTMLInputElement;
  $password: HTMLInputElement;

  constructor() {
    this.createDom();
  }

  createDom() {
    this.$id = document.createElement('input');
    this.$id.type = 'text';
    this.$password = document.createElement('input');
    this.$password.type = 'password';

    document.body.append(this.$id);
    document.body.append(this.$password);
  }

  get id() {
    return this.$id.value;
  }

  get password() {
    return this.$password.value;
  }

  async login() {
    try {
      const data = await this.fetch();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  get payload() {
    return {
      id: this.id,
      password: this.password,
    };
  }

  async fetch() {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.payload),
    });
    const data: Promise<User> = await response.json();
    return data;
  }
}

export default IDLogin;
