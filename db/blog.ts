import { v4 as uuid } from 'uuid'
import { SearchBlogParam } from '../types/blog'
import { Blog, BlogList, SQLInsertRes } from '../types/db'
import { getCondition } from '../utils/sql'
import { escape, runSQL } from './mysql'

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
  ORDER BY createtime DESC
  `
  return await runSQL<BlogList>(sql)
}

export const addBlog = async (param: Blog) => {
  const { title, content, createtime, author, desc } = param
  let id = uuid().replace(/-/g, '')
  const sql = `
  INSERT INTO blogs (id, title, content, createtime, author, bdesc)
  VALUES (${escape(id)}, ${escape(title || '')}, ${escape(content)}, ${escape(
    createtime || Date.now()
  )}, ${escape(author || '未知')}, ${escape(desc)})
  `

  return await runSQL<SQLInsertRes>(sql)
}

export const blogDB = {
  getBlogList,
  addBlog
}
