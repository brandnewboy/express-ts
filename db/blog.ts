import { SearchBlogParam } from '../types/blog'
import { BlogList } from '../types/db'
import { getCondition } from '../utils/sql'
import { runSQL } from './mysql'

/**
 * 获取文章列表
 * @param param 搜索参数
 * @returns 列表
 */
export const getBlogList = async (param: SearchBlogParam) => {
  const condition = getCondition<SearchBlogParam>(param)
  const sql = `
  SELECT id, title, content, createtime, author
  FROM blogs
  WHERE ${condition}
  `
  return await runSQL<BlogList>(sql)
}

export const blogDB = {
  getBlogList
}
