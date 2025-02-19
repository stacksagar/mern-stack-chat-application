import { Request, Response } from "express";

const asyncHandler = require("express-async-handler");

module.exports.authHandler = module.exports.addMessage = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(res.locals.user);
  }
);
