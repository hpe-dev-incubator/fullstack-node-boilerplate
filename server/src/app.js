import express from 'express';

const app = express();

app.get('/api/bootstrap', (req, res) => {
  res.status(200).send({ gremlins: ['Stack', 'Alan', 'Eric', 'Chris', 'Shimi', 'Alex', 'Ian', 'Brittany', 'Orestis'] });
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
