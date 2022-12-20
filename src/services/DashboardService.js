import { requestInstance } from "../config/requestInstance"

class DashboardService{
    api={
        chart: '/v1/bar-chart-report',
        sum: '/v1/incomes-expenses-report'
    }

    params={
        type: 'type=',
        month: 'month='
    }

    getChartData(type,month){
        return requestInstance.get(`${this.api.chart}?${this.params.type}${type}&${this.params.month}${month}`)
            .then(res=>res?.data)
            .catch(err=>Promise.reject(err))
    }

    getIncomesExpenses(){
        return requestInstance.get(this.api.sum)
            .then(res=>res.data)
            .catch(err=>Promise.reject(err))
    }
}

export const dashboardService=new DashboardService()