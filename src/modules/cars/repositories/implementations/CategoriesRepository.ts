import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  /**
   * It receives an object with the properties name and description, and creates a new category with
   * those properties
   * @param {ICreateCategoryDTO}  - ICreateCategoryDTO: This is the interface that will be used to
   * validate the data that will be received.
   */
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  /**
   * It returns the categories array
   * @returns The categories array.
   */
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  /**
   * "Find the category with the given name and return it."
   *
   * The function takes a string as an argument and returns a Category
   * @param {string} name - string - the name of the category we want to find
   * @returns The category object that matches the name passed in.
   */
  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
