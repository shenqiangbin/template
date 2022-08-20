export default {
  // 对数组进行分页
  pagination(pageNo, pageSize, array) {
    var offset = (pageNo - 1) * pageSize
    return offset + pageSize >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + pageSize)
  },
}
