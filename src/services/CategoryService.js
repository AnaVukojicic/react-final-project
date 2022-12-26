import { requestInstance } from "../config/requestInstance";
import CategoryModel from "../models/CategoryModel";

class CategoryService{
    api={
        categories: '/v1/categories'
    }

    getAllCategories(){
        return requestInstance.get(this.api.categories)
            .then(res=>res?.data?.data.map(category=>new CategoryModel(category)))
            .catch(err=>Promise.reject(err))
    }

    getSingleCategory(id){
        return requestInstance.get(`${this.api.categories}/${id}`)
            .then(res=>new CategoryModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }

    addCategory(data){
        const formData={
            "name":data?.name,
            "color":data?.color
        }
        return requestInstance.post(this.api.categories,formData)
            .then(res=>new CategoryModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }

    editCategory(data){
        const formData={
            "name":data?.name,
            "color":data?.color
        }
        return requestInstance.put(`${this.api.categories}/${data?.id}`,formData)
            .then(res=>new CategoryModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }

    deleteCategory(id){
        return requestInstance.delete(`${this.api.categories}/${id}`)
            .then(res=>new CategoryModel(res?.data?.data))
            .catch(err=>Promise.reject(err))
    }

}

export const categoryService=new CategoryService();