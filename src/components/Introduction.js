import React from 'react';

export default class Introduction extends React.Component {
    render() {
        return (
            <div id={'Introduction'}>
                <h1>HCI UVic Course Experiment</h1>
                <p>By Paria Naghavi and Sharon Umute</p>
                <p>Used and Editted by Richa Bhute and Mona Soleimanieh</p>
                <div>
                    <h3>
                        Effectiveness of text representations against bubble representations, 
                        in finding the median value.
                    </h3>
                    For this experiment, you will be shown a series of numbers
                    represented as either text or circles of corresponding
                    sizes.
                    <p>
                        <b>Instructions:<br /></b> {' '}
                        <b>1. Click the median number/circle as fast as you
                        can. </b> 
                        <b><br />The median will be the middle most value<br /> among all the values,</b> 
                        <b> that you visually or textually see.<br /></b>
                        <b>2. Click submit upon finishing all the tasks, once the results are shown so we can gather data.<br /></b>
                        <b>3. Finish the exit survey.<br /></b>
                    </p>
                </div>
                <p>Click the button below to begin the experiment</p>
                <button type={'submit'} onClick={this.props.onBeginExperiment}>
                    Begin
                </button>
            </div>
        );
    }
}
