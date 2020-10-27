interface User {
  name: string,
  age: number,
  telefone: string,
}

const users: User[] = [
  {
    name: 'Leonardo',
    age: 22,
    telefone: '47 9997114465',
  },
  {
    name: 'Nicole',
    age: 24,
    telefone: '47 99239710',
  },
];

class UserRepository {

  getAll(): User[] {
    return users
  }

}

export default UserRepository