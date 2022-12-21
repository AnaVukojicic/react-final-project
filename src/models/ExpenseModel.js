import dayjs from "dayjs";

class ExpenseModel{
    constructor(data){
        this.id=data?.id;
        this.date=data?.entry_date;
        this.time=data?.entry_time;
        this.amount=data?.amount;
        this.description=data?.description;
        this.type=data?.type;
        this.note=data?.note;
        this.categoriesArray=data?.categories
    }

    getDateAndTime(){
        return dayjs(this.date+" "+this.time).format('DD/MM/YYYY HH:mm');
    }
}

export default ExpenseModel;