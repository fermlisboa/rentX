import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  /**
   * It receives a request and a response, and returns a response
   * @param {Request} request - Request - This is the request object that contains the request
   * information.
   * @param {Response} response - Response: The response object is used to send data back to the client.
   * @returns A list of categories
   */

  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase);
    const all = await listCategoryUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
