const app = require('express')();
const helmet = require('helmet');
const cors = require('cors');

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening at port 5000');
});
