import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  /**
   * It receives a request and a response, then it extracts the name and description from the request
   * body, and then it calls the createCategoryUseCase.execute function, passing the name and description
   * as parameters
   * @param {Request} request - Request - This is the request object that comes from the express
   * framework.
   * @param {Response} response - Response: This is the response object that will be returned to the
   * client.
   * @returns A response with a status code of 201 and no body.
   */
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
