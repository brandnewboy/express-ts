import { SearchBlogParam } from '../types/blog'
import { getCondition } from '../utils/sql'
import { runSQL } from './mysql'

export const getBlogList = async (param: SearchBlogParam) => {
  const condition = getCondition<SearchBlogParam>(param)
  const sql = `
  SELECT id, title, content, createtime, author
  FROM blogs
  WHERE ${condition}
  `
  return await runSQL(sql)
}

export const blogDB = {
  getBlogList
}
