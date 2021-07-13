
const Item = {
    tags: [],
    body: '',
    gear: [],
    attachments: []
}

export const GearPrices = {
    CHEAP: '$: <$100 USD',
    FAIR: '$$: <$500 USD',
    PRICEY: '$$$: >$1k USD'
}

export const GearDetail = {
    name: '',
    price: '',
    url: '',
    error: false,
    reset: function () {
        this.name = ''
        this.price = ''
        this.url = ''
        this.error = false
    }
}

export default Item 