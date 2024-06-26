type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}
const originalUser:User  = {
    name: `Alex`,
    surname: `Backham`,
    email: `175backalex@ukr.net`,
    password: `1234123`,
}
function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
  return { ...initialValues, ...updates };
}

const newUser: User = createOrUpdateUser(originalUser, { 
  email: 'user@mail.com', 
  password: 'password123' 
});
console.log(`Task 4 Done //`, newUser);
