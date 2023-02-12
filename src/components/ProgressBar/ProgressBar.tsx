import React from 'react'

const ProgressBar = (props : any) => {
    const { bgcolor, currentValue, maxValue } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${currentValue/maxValue*100}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        alignText: 'center',
        fontSize: 18,
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
            <span style={labelStyles}>{`${currentValue}/${maxValue}`}</span>
        </div>
      </div>
    );
}

export default ProgressBar