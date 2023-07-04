import { DeepPartial, FactoryClass } from './types';
import { Factory } from './factory';
import { DataSource, EntityManager, ObjectLiteral } from 'typeorm';

export class SubFactory<T extends ObjectLiteral> {
  factory: FactoryClass<T>;
  values: DeepPartial<T> | undefined;

  constructor(factory: FactoryClass<T>, values?: DeepPartial<T>) {
    this.factory = factory;
    this.values = values;
  }

  newFactory = (dataSource: DataSource | EntityManager): Factory<T> => {
    return new this.factory(dataSource);
  };
}
