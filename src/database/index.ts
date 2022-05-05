import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

/* Getting the connection options from the ormconfig.json file and then changing the host to database. */
getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database';
  createConnection({
    ...options,
  });
});
