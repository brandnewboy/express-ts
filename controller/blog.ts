import { blogDB } from '../db/blog'
import { Result } from '../res/result'
import { BlogController } from '../types/blog'
import { BlogList } from '../types/db'

export const blogController: BlogController = {
  async getBlog(req, res, next) {
    const body = req.body
    const data = await blogDB.getBlogList(body)
    res.json(Result.ok<BlogList>(data))
    return
  }
}
