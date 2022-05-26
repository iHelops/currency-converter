import axios from 'axios';
import {makeAutoObservable, toJS, runInAction} from 'mobx'

class Currency {
    constructor() {
        makeAutoObservable(this)
    }

    currency = []
    
    getCurrency = () => {
        return toJS(this.currency)
    }

    getPrice = (name) => {
        try {
            const course = this.currency.filter(item => item.charCode === name)[0]
            return course.value / course.nominal
        } catch {
            return 0
        }
    }
    
    fetchCurrency = () => {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(({data}) => {            
            const valute = Object.values(data.Valute).map(item => {
                const obj = {
                    charCode: item.CharCode,
                    nominal: item.Nominal,
                    name: item.Name,
                    value: item.Value
                }
                return obj
            })

            runInAction(() => {
                this.currency = valute
            })
        })
    }
}

export default new Currency();