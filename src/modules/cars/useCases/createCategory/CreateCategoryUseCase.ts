import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  /**
   * It receives an object with the name and description properties, and then it creates a new category
   * @param {IRequest}  - IRequest - This is the type of the object that will be passed to the execute
   * method.
   */
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category Already exists!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
