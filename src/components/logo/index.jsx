import React from 'react';

export default props => {
    // Somente deve exibir a logo se o menu estiver expandido

    switch (props.type) {
        case 'site':
            return (
                <div style={props.style} className={props.className || null}>
                    <img src="../img/logo_ant.png" title="Guia Edutec" width={props.width || '170px'} />
                </div>
            )
        case 'expanded':
            return (
                <div className={props.className || null}>
                    <img src="../img/logo_horizontal.png" title="Guia Edutec" />
                </div>
            )
        case 'short':
            return (
                <div className={props.className || null}>
                    <img src="../img/logo_horizontal.png" title="Guia Edutec" />
                </div>
            )
        default:
            return null
    }
}