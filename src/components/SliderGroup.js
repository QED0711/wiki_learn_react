import React from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';

import { Handle } from './SliderComponents'

const sliderStyle = {  // Give the slider some width
    position: 'relative',
    width: '50%',
    margin: '1em auto',
    height: 160,
}

const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    margin: '35px 0',
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
}

const SliderGroup = ({ domain, values, step, stateConnection }) => {

    return (
        <Slider
            domain={domain}
            rootStyle={sliderStyle}
            values={values}
            step={step}

        >

            <Rail>
                {({ getRailProps }) => (
                    <div style={railStyle} {...getRailProps()} /> // render your clickable rail!
                )}
            </Rail>

            <Handles>
                {({ handles, getHandleProps }) => {
                    stateConnection(handles[0].value.toFixed(2))
                    return (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )
                }}
            </Handles>
        </Slider>
    )

}

export default SliderGroup
