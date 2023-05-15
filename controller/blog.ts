import { blogDB } from '../db/blog'
import { Result } from '../res/result'
import { BlogController } from '../types/blog'
import { BlogList } from '../types/db'

export const blogController: BlogController = {
  async getBlog(req, res, next) {
    const query = {
      ...req.query,
      author: req.headers.username as string
    }
    const data = await blogDB.getBlogList(query)
    res.json(Result.ok<BlogList>(data))
    return
  },

  async addBlog(req, res, next) {
    const body = {
      ...req.body,
      author: req.headers.username as string
    }
    const result = await blogDB.addBlog(body)
    res.json(Result.ok())
  }
}
