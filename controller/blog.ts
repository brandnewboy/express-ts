import { blogDB } from '../db/blog'
import { Result } from '../res/result'
import { BlogController } from '../types/blog'
import { BlogList } from '../types/db'
import { logger } from '../utils'

export const blogController: BlogController = {
  async getBlog(req, res, next) {
    const query = req.query
    const data = await blogDB.getBlogList(query)
    res.json(Result.ok<BlogList>(data))
    return
  }
}
