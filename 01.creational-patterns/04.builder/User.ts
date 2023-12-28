class User {
  id: string;

  name: string;

  gender: 'M' | 'F' | '';

  birthday: string;

  location: string;

  job: string;

  constructor(id: string, name: string, gender: 'M' | 'F' | '', birthday: string, location: string, job: string) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.location = location;
    this.job = job;
  }
}

export default User;
