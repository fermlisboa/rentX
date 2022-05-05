import { Category } from '../entities/Category';

/* Defining the shape of the data that will be passed to the create method. */
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

/* Defining the methods that the repository must have. */
interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
