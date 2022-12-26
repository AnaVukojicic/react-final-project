import dayjs from "dayjs";
import { t } from "react-switch-lang";

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

    getTrimmedNote(){
        return this.note && (this.note.length>20 ? `${this.note.substring(0,20)}...` : this.note);
    }

    getTypeName(){
        if(this.type==='expense'){
            return t('common.expense')
        }else if(this.type==='income'){
            return t('common.income')
        }
    }
}

export default ExpenseModel;