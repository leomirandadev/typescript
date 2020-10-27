import { Request, Response } from 'express';
import UserRepository from '../repository/UserRepository'

export default {
  async index(req: Request, res: Response) {
    const userRepository = new UserRepository
    return res.json(userRepository.getAll());
  }
}