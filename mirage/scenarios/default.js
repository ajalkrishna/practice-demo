export default function (server) {
  server.create('fruit', {
    name: 'Apple',
    quantity: 500,
    price: 50,
  });

  server.create('fruit', {
    name: 'Orange',
    quantity: 1000,
    price: 60,
  });

  server.create('fruit', {
    name: 'Papaya',
    quantity: 100,
    price: 10,
  });
}
