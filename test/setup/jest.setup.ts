import { createConnection, getConnection } from 'typeorm';
import { entities } from '../entities';
import { beforeAll, beforeEach, afterAll } from '@jest/globals';

beforeAll(
  async () =>
    await createConnection({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: entities,
      synchronize: true,
      logging: false,
    }),
);

beforeEach(async () => {
  await getConnection().synchronize(true);
});

afterAll(async () => {
  await getConnection().close();
});
