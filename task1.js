"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function fetchUsers() {
  // Ваш код

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users.map(user => ({ id: user.id, name: user.name }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }

}

console.log(fetchUsers())

module.exports = fetchUsers;