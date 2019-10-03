import React from 'react'
    class Clock extends React.Component {
        constructor(props) {
            super()
            this.state = {time: ''}
        }
        
        componentDidMount() {
            let time = setInterval(() => {
                this.time = new Date().toLocaleTimeString()    
            }, 1000)
            this.setState({time: time})
        }
        
        render() {
            return (
                <div className="time">
                    The time is: {this.state.time}
                </div>
            );
        }
    }
 export default Clock 