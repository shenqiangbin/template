import arrUtil from '@/util/arrUtil.js'

let UserService = {
  getUserList(query) {
    let list = [
      { id: 1, stuClass: '二班', name: '张三', age: 20 },
      { id: 2, stuClass: '二班', name: '李四', age: 21 },
      { id: 3, stuClass: '二班', name: '李四1', age: 22 },
      { id: 4, stuClass: '二班', name: '李四2', age: 23 },
      { id: 5, stuClass: '二班', name: '李四3', age: 24 },
      { id: 6, stuClass: '二班', name: '李四4', age: 25 },
      { id: 7, stuClass: '二班', name: '李四5', age: 26 },
    ]

    // 排序
    let { sortField, sort } = query
    if (sortField) {
      list.sort(function (a, b) {
        return a[sortField] - b[sortField]
      })
    }
    if (sort && sort === 'descend') list.reverse()

    // 分页
    let result = { list: null, count: 0 }
    result.list = arrUtil.pagination(query.pageIndex, query.pageSize, list)
    result.count = list.length
    return result
  },
  test() {
    alert('this is test')
  },
}

export default UserService
