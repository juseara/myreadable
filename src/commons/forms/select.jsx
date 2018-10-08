import React, { Component } from 'react'

class Select extends Component {

    render() {
        const list = this.props.list || []
        return (
            <div className="form-group">
                <select     { ...this.props.input }
                            className="form-control" 
                            disabled    = { this.props.readOnly     }
                            readOnly    = { this.props.readOnly     } 
                            placeholder = { this.props.placeholder  } 
                            required    = { this.props.required     }
                            >
                    <option value={''}>SELECT</option>
                    {list.map((item,index) =>  <option key={ index }>{ item[this.props.optionDescription] }</option>)} 
                </select>
            </div>
        )
    }
}

export default Select