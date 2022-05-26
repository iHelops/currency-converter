import {makeAutoObservable} from 'mobx'

class Converter {
    constructor() {
        makeAutoObservable(this)
    }

    value = 0
    inPrice = 0
    toPrice = 0

    setValue = value => this.value = value
    setInPrice = inPrice => this.inPrice = inPrice
    setToPrice = toPrice => this.toPrice = toPrice

    getConvertedValue = () => {
        const val = (this.value * (this.inPrice / this.toPrice))
        return isNaN(val) || val === Infinity ? 0 : val
    }
}

export default new Converter();