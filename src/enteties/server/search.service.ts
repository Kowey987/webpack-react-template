import {serverInstance} from "@src/app/api";

export class searchService {
  static async getSearch (query: string) {
    return await serverInstance.get(`search:${query}`)
  }
}