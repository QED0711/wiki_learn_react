import React from 'react'

const Handle = ({handle: { id, value, percent },getHandleProps}) => {
    return (
        <div
            style={{
                left: `${percent}%`,
                position: 'absolute',
                marginLeft: -15,
                marginTop: 25,
                zIndex: 2,
                width: 30,
                height: 30,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#2F5655',

            }}
            {...getHandleProps(id)}
        >
            <div style={{ fontFamily: 'sans serif', fontSize: 14, marginTop: -15 }}>
                {value.toFixed(2)}
            </div>
        </div>
    )
}

export {
    Handle
}