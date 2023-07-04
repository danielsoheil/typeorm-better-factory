import { Company } from '../entities/Company';
import { Factory } from '../../src';
import { PostGeneration } from '../../src/decorators';
import { EmployeeFactory } from './employee.factory';
import { getConnection } from 'typeorm';

const myFunction = () => {
  console.log(new Date());
};

export class CompanyFactory extends Factory<Company> {
  entity = Company;

  name = 'Linnify';
  numberOfEmployees = 40;
  description = 'Simplifying life through innovation';
  website = 'https://linnify.com';
  active = true;

  @PostGeneration()
  async createLog(company: Company) {
    const dataSource = getConnection();

    company.employees = await new EmployeeFactory(dataSource).createMany(5, { company });
  }

  @PostGeneration()
  callAFunction() {
    myFunction();
  }
}
