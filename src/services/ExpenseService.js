import { requestInstance } from "../config/requestInstance"
import ExpenseModel from "../models/ExpenseModel"

class Expenseservice{
    api={
        expenses: '/v1/expenses'
    }

    params={
        type: 'type=',
        description: 'description=',
        category: 'category_id=',
        date: 'entry_date='
    }

    getAllTransactions(type,description,category,date){
        const typeParam=type.length>0 ? `?${this.params.type}${type}` : '';
        const descriptionParam=description.length>0 
            ? (typeParam ? `&${this.params.description}${description}` 
                : `?${this.params.description}${description}`) 
            : '';
        const categoryParam=category 
            ? category.map((c,i,arr)=>{
                return (((typeParam || descriptionParam) || arr.indexOf(c)!==0) 
                    ? `&${this.params.category}${c}` : `?${this.params.category}${c}`)
                }) 
            : '';
        const dateParam=date.length>0 
            ? ((typeParam || descriptionParam || categoryParam) ? `&${this.params.date}${date}` 
                : `?${this.params.date}${date}`) 
            : '';
        return requestInstance.get(`${this.api.expenses}${typeParam}${descriptionParam}${categoryParam}${dateParam}`)
            .then(res=>res?.data?.data.map(expense=>new ExpenseModel(expense)))
            .catch(err=>Promise.reject(err))
    }
}

export const expenseService=new Expenseservice()