import { requestInstance } from "../config/requestInstance";
import CategoryModel from "../models/CategoryModel";

class CategoryService{
    api={
        categories: '/v1/categories',
        singleCategory: '/v1/categories/'
    }

    getAllCategories(){
        return requestInstance.get(this.api.categories)
            .then(res=>res?.data?.data.map(category=>new CategoryModel(category)))
            .catch(err=>Promise.reject(err))
    }

    getSingleCategory(id){
        return requestInstance.get(`${this.api.singleCategory}${id}`)
            .then(res=>new CategoryModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }
}

export const categoryService=new CategoryService();