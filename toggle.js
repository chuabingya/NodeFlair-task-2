import React, { Component } from 'react'




export class Toggle extends Component {
    constructor(props) {
        super(props)

        this.state = {
          tabType: "general"
        }
    }
    toggleMe=(value)=>{
      this.setState({
        tabType:value
      })
    }

    nextPath(path) {
      this.props.history.push(path);
    }
  
    render() {
        return (
            <div>
              <div className="mt-3">
                <button className="btn btn-primary m-2" onClick={()=>this.nextPath('/src/Mountain')}>Mountain</button>
                <button className="btn btn-secondary m-2" onClick={()=>this.toggleMe('Beaches')}>Beaches</button>
                <button className="btn btn-warning m-2" onClick={()=>this.toggleMe('Birds')}>Birds</button>
                <button className="btn btn-info m-2" onClick={()=>this.toggleMe('Food')} >Food</button>
            </div>
            <div>
              {
                this.state.tabType==='Mountain' && <div> Mountain </div>
              }
              {
                this.state.tabType==='Beaches' && <div> Mountain </div>
              }
              {
                this.state.tabType==='Beaches'  && <div> Mountain </div>
              }
              {
                this.state.tabType==='Food' && <div> Mountain </div>
              }
              </div>
            </div>
              
        )
            }
          }
          
export default Toggle
