import { FactoryClass } from './types';
import { Factory } from './factory';
import { DataSource, EntityManager } from 'typeorm';

export class SubFactory<T> {
  factory: FactoryClass<T>;
  values: Partial<T> | undefined;

  constructor(factory: FactoryClass<T>, values?: Partial<T>) {
    this.factory = factory;
    this.values = values;
  }

  newFactory = (dataSource: DataSource | EntityManager): Factory<T> => {
    return new this.factory(dataSource);
  };
}
