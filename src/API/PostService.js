import axios from "axios"

export default class PostService {

  static async getData(limit = 10, page = 1) {
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(urlPosts,
      {
        params: {
          _limit: limit,
          _page: page
        }
      })
    return response


  }
}