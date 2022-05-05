import { getRepository, Repository } from 'typeorm';

import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = getRepository(Specification);
  }

  /**
   * It receives an object with the name and description properties, creates a new Specification object,
   * assigns the name and description properties to it, and pushes it to the specifications array
   * @param {ICreateSpecificationDTO}  - ICreateSpecificationDTO
   */
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });
    await this.repository.save(specification);
  }

  /**
   * It returns the list of specifications
   * @returns The specifications array.
   */
  list(): Promise<Specification[]> {
    return this.repository.find();
  }

  /**
   * "Find the specification with the given name."
   *
   * The function takes a string as an argument and returns a Specification
   * @param {string} name - The name of the specification you want to find.
   * @returns The specification with the name that matches the name passed in.
   */
  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ name });
    return specification;
  }
}

export { SpecificationsRepository };
