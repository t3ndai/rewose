
const Item = {
    tags: [],
    notes: '',
    gear: [],
    attachments: [],
    create: async() => {
        const form = new FormData()
        form.append('tags', Item.tags)
        form.append('gear', JSON.stringify(Item.gear))
        form.append('notes', Item.notes)
        Item.attachments.map(file => {
            form.append('photos', file)
        })

        const originUrl = window.location.origin
        m.request({
            method: 'POST',
            url: originUrl+'/items/createItem',
            body: form, 
            withCredentials: true 
        })
        .then(res => {
            Item.reset()
            m.route.set('/') 
        })
        .catch(err => {
            console.log(err)
        })
    },
    reset: function() {
        this.tags = []
        this.notes = ''
        this.gear = []
        this.attachments = []
    }
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