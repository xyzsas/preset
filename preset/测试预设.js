// preset/测试预设
// Phantomlsh
// 2021.03.31

export const info = '测试用的预设模板'

export const params = {
  data: [{
    key: '语文',
    label: '语文分数'
  }, {
    key: '数学',
    label: '数学分数'
  }]
}

export const check = (params) => {
  try {
    for (const d of params.data) {
      if (!d.key || !d.label) return '数据需要key和label'
    }
    return false
  } catch {
    return 'data参数必须是列表'
  }
}

export const generate = (params) => {
  let content = '<p>这只是一个测试</p>\n\n'
  for (const d of params.data) {
    content += `<p>${d.key}[${d.label}]</p>\n`
  }
  return { content }
}
