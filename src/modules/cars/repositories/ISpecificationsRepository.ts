import { Specification } from '../entities/Specification';

/* Defining the shape of the data that will be passed to the create method. */
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

/* Defining the shape of the data that will be passed to the create method. */
interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
