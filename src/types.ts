import { Factory } from './factory';
import { DataSource, EntityManager } from 'typeorm';

export type FactoryClass<T> = new (dataSource: DataSource | EntityManager) => Factory<T>;
export type Constructable<T> = new (...args: any[]) => T;
export type SequenceFn = (i: number) => any;
