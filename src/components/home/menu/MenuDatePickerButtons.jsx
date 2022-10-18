import arrowLeft from "../../../assets/icons/home/arrow-left.svg"
import arrowRight from "../../../assets/icons/home/arrow-right.svg"
import arrowLeftDark from "../../../assets/icons/home/arrow-left-dark.svg"
import arrowRightDark from "../../../assets/icons/home/arrow-right-dark.svg"
export const PrevButton = () => {
    return(
        <img src={arrowLeft} alt=""/>
    )
}
export const NextButton = () => {
    return(
        <img src={arrowRight} alt=""/>
    )
}
export const PrevButtonDark = () => {
    return(
        <img src={arrowLeftDark} alt=""/>
    )
}
export const NextButtonDark = () => {
    return(
        <img src={arrowRightDark} alt=""/>
    )
}