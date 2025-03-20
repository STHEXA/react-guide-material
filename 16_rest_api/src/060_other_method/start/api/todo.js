import axios from "axios";

const ENDPOINT_URL = "http://127.0.0.1:3003/todo";

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    return result.data;
  },
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + "/" + todo.id);
    return result.data;
  },
  async put(todo) {
    const result = await axios.put(ENDPOINT_URL + "/" + todo.id, todo);
    return result.data;
  },
};

todoApi.put({
  id: "f2c38014-e2df-40ae-ac93-36303b8771ce",
  content: "買い物します",
  editing: false,
  completed: false,
});

export default todoApi;
