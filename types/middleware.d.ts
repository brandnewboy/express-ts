import { Request, Response, NextFunction } from 'express'

export type MiddleWareProp = (req: Request, res: Response, next: NextFunction) => void
