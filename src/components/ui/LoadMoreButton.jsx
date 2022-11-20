const LoadMoreButton = ({onClick, text}) => {
    return (
        <button style={
            {
                background: "none", borderRadius: "8px", width: "140px",
                height: "56px", border: "1px solid #E0E0E0", display: "flex",
                alignItems: "center", justifyContent: "center"
            }}
                type="button"
                onClick={onClick}
                className="load-more-button"
        >

            {text}
        </button>
    )
}

export default LoadMoreButton