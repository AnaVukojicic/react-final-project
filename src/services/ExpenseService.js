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

    getAllExpenses(){
        return requestInstance.get(this.api.expenses)
            .then(res=>res?.data?.data.map(expense=>new ExpenseModel(expense)))
            .catch(err=>Promise.reject(err))
    }

    getProfitOrExpenseSum(type){
        return this.getAllExpenses()
            .then(res=>{
                let amount=0;
                const items=res.filter(expense=>expense?.type===type)
                items.forEach((item)=>{
                    return amount+=parseFloat(item.amount)
                })
                return amount;
            })
            .catch(err=>Promise.reject(err))
    }

    getAllProfitsOrExpenses(type){
        return this.getAllExpenses()
            .then(res=>{
                return res.filter(expense=>expense.type===type)
            })
            .catch(err=>Promise.reject(err))
    }

}

export const expenseService=new Expenseservice()