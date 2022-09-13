const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
const phoneRegExp = /^\+?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/im
const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const onlyDigits = /^\D/g
export {emailRegExp, phoneRegExp, password, onlyDigits}