import axios from "axios"

export default class PostService {


  static async getData() {
    try {
      const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
      const response = await axios.get(urlPosts)
      return response.data
    } catch (e) {
      console.log(e)
    }

  }
}