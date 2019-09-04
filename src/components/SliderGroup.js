import React from 'react';
import SliderBox from './SliderBox';

const SliderGroup = ({ setDecisionThreshold, setNumRecommendations, decisionThreshold }) => {
    return (
        <div className="slider-group">
            <SliderBox
                sliderTitle={"Num Recommendations"}
                domain={[1, 100]}
                values={[20]}
                step={1}
                setConnectedState={setNumRecommendations}
            />
            <SliderBox
                sliderTitle={"Decision Threshold"}
                domain={[0, 1]}
                values={[parseFloat(decisionThreshold).toFixed(2)]}
                step={0.01}
                setConnectedState={setDecisionThreshold}
            />

        </div>
    )

}

export default SliderGroup