import { Factory } from './factory';
import { DataSource, EntityManager, ObjectLiteral } from 'typeorm';

export type FactoryClass<T extends ObjectLiteral> = new (dataSource: DataSource | EntityManager) => Factory<T>;
export type Constructable<T> = new (...args: any[]) => T;
export type SequenceFn = (i: number) => any;

export type DeepPartial<T> =
  | T
  | {
      [K in keyof T]?: DeepPartial<T[K]>;
    };
