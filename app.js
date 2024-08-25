const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

//app.use(dateMiddleware)

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter)

app.listen(3000, () => {
  console.log('el servidor está escuchando en el puerto 3000');
});
