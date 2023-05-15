import { Blog } from './db'
import { MiddleWareProp } from './middleware'

export interface BlogController {
  getBlog: MiddleWareProp
  addBlog: MiddleWareProp
}

export type SearchBlogParam = Partial<Blog> & { username?: string }
