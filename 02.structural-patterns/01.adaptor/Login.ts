export interface User {
  id: string;
  name: string;
}

interface Login {
  login(): Promise<User | undefined>;
}

export default Login;
