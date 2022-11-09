const ProfileDataField = ({label, style, type, name, placeholder, data, setData, img}) => {
    return (
        <div style={style} className="profile__modal-field">
            <label className="profile__modal-field-label">{label}</label>
            <div className="profile__modal-field-container">
                <input className="profile__modal-field-input"
                       type={type ? type : "text"}
                       name={name}
                       placeholder={placeholder}
                       value={data}
                       onChange={setData}
                />
                <img
                    src={img}
                    alt=""
                    className="profile__modal-field-image"
                />
            </div>
        </div>
    );
};

export default ProfileDataField;