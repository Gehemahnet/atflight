const ProfileField = ({img, data, description}) => {
    return (
        <div className="profile__main-field">
            <div className="profile__main-field-data">
                <img src={img} alt=""/>
                <span>{data !== null ? data : "No data"}</span>
            </div>
            <div className="profile__main-field-description">
                {description}
            </div>
        </div>
    )
}

export default ProfileField