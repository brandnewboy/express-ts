import { Blog } from './db'
import { MiddleWareProp } from './middleware'

export interface BlogController {
  getBlog: MiddleWareProp
}

export type SearchBlogParam = Partial<Blog>
