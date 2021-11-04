import React from "react"

const Title = (props) =>{
    const {tag: Tag, text, fontsize, fontcol} = props
    const styleTitle={
        fontSize: fontsize,
        color: fontcol,
    }
    return(
        <Tag style={styleTitle}>{text}</Tag>
    )
}

export default Title