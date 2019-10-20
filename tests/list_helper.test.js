const listHelper = require('../utils/list_helper')

describe('likes', () =>{
  const listWithMoreBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Go To Statement Considered Harmful9',
      author: 'Edsger W. Dijkstra9',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html9',
      likes: 59,
      __v: 0
    }
  ]

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog equals the likes of that', ()=>{
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)

  })

  test('of a bigger list is calculated right',()=>{
    const resultBigger = listHelper.totalLikes(listWithMoreBlogs)
    expect(resultBigger).toBe(64)
  })

  test('dummy returns one', () => {
    const blogs = []
    
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })

})

