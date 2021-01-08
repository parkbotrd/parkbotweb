import React from "react"

const introducing = ({mgt, imgurl, align, alt, title, desc, nd, st, oc}) => {
return (
    <div type="button" onClick={
        () => {window.location.href=oc}
    }>
        <hr
            style={{
                height: 5,
                backgroundColor: 'gray',
                marginTop: mgt
            }}
        />

        <div className="margin">
            <img src={imgurl} align={align} alt={alt} style={{ maxWidth: "700px" }} />
            <p align={align === "right" ? "left" : "right"} className="inb bold">{title}</p>
            <p className="inm" align={align === "right" ? "left" : "right"} style={{ color: 'gray' }}>{desc}<br />{nd}{st ? <br /> : ""}{st}</p>
        </div>
    </div>
);
}

export default introducing;