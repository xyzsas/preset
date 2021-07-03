// preset/简单问卷
// Phantomlsh
// 2021.07.03

export const info = '简单问卷生成'

export const params = [
  '填空标题 [小字提示]',
  '填空2 [标题不能相同]',
  '选择标题 [选项1;选项2;选项3]',
  '这是一个复选框 [x]'
]

export const check = (params) => {
  try {
    for (const d of params) {
      if (typeof d != 'string') return '条目必须是字符串'
    }
    return false
  } catch {
    return '参数必须是列表'
  }
}

export const generate = (params) => {
  let content = ''
  for (const d of params) {
    let type = 'input', tip = '', options = []
    const m = d.match(/\[(.+?)\]/)
    const title = d.replace(/\s*?\[.+?\]\s*/, '')
    if (m) {
      if (m[1].indexOf(';') > 0) {
        type = 'select'
        options = m[1].split(';')
      } else if (m[1] == 'x') type = 'check'
      else tip = m[1]
    }
    const model = `data['_${title}']`
    content += '<p><label class="label">'
    if (type == 'check') content += `<input type="checkbox" class="checkbox" model="${model}">`
    content += `${title}</label>`
    if (type == 'input') content += `<input class="input is-small" model="${model}">`
    if (type == 'select') {
      content += `<div class="select is-small"><select model="${model}">`
      for (const o of options) content += `<option>${o}</option>`
      content += '</select></div>'
    }
    if (tip) content += `<div class="is-size-7">${tip}</div>`
    content += '</p>\n'
  }
  return { content }
}
