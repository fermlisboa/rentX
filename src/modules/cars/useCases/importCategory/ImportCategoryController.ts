import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCatetgoryUseCase';

class ImportCategoryController {
  /**
   * It receives a file, and then it calls the importCategoryUseCase.execute() function, passing the file
   * as a parameter
   * @param {Request} request - Request - The request object is an instance of express's Request class.
   * It contains information about the HTTP request that raised the event.
   * @param {Response} response - Response: The response object is used to send a response to the client.
   * @returns A response with a status code of 200.
   */
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    await importCategoryUseCase.execute(file);
    return response.status(201).send();
  }
}

export { ImportCategoryController };
