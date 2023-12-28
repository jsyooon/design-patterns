import User from './User';

class UserBuilder {
  #id: string;

  #name: string;

  #gender: 'M' | 'F' | '';

  #birthday: string;

  #location: string;

  #job: string;

  id(id: string) {
    this.#id = id;
    return this;
  }

  name(name: string) {
    this.#name = name;
    return this;
  }

  gender(gender: 'M' | 'F') {
    this.#gender = gender;
    return this;
  }

  birthday(birthday: string) {
    this.#birthday = birthday;
    return this;
  }

  location(location: string) {
    this.#location = location;
    return this;
  }

  job(job: string) {
    this.#job = job;
    return this;
  }

  build() {
    const user = new User(this.#id, this.#name, this.#gender, this.#birthday, this.#location, this.#job);
    this.reset();
    return user;
  }

  reset() {
    this.#id = this.#name = this.#gender = this.#birthday = this.#location = this.#job = '';
  }
}

export default UserBuilder;
