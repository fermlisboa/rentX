import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  /**
   * It receives a request and a response, extracts the name and description from the request body, calls
   * the createSpecificationUseCase with the extracted data, and returns a 201 status code
   * @param {Request} request - Request - The request object is an instance of the Request class. It
   * contains all the information about the request.
   * @param {Response} response - Response: This is the response object that will be returned to the
   * client.
   * @returns A response with status 201 and no body.
   */
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    await createSpecificationUseCase.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateSpecificationController };
