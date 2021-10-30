const faker = require("faker");

const users = Array.from({ length: 10 }).map((value, index) => {
  return {
    id: index,
    name: faker.name.firstName(1),
    lastName: faker.name.lastName(),
    info: faker.company.catchPhrase(),
    phone: faker.phone.phoneNumber(),
  };
});

module.exports = users;
