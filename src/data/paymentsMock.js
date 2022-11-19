let paymentsMock = [
    {
        number: "0000000000003456",
        cvv: "000",
        expiration: "0329",
        holder:"John Doe",
        system: "Apple Pay"
    },
    {
        number: "0000000000009293",
        cvv: "000",
        expiration: "0329",
        holder:"John Doe",
        system: "Master Card"
    }
]
let icons = [
    {
        name: "Master Card",
        icon: require("../assets/icons/settings/master-card.svg")
    },
    {
        name: "Apple Pay",
        icon: require("../assets/icons/settings/apple-pay.svg")
    }
]
const getLogo = (data) => {
    data.map(item => {
        icons.map(logo =>{
            (item.system === logo.name) && (item.icon = logo.icon)
        })
    })
    return data
}

getLogo(paymentsMock)

export {paymentsMock}