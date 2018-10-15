import React from 'react'

const Select = ({list, readOnly, input , placeholder, required, optionDescription}) => {
    return (
        <div className="form-group">
            <select     { ...input }
                        className="form-control" 
                        disabled    = { readOnly }
                        readOnly    = { readOnly } 
                        placeholder = { placeholder } 
                        required    = { required }
                        >
                <option value={''}>SELECT</option>
                {list.map((item,index) =>  <option key={ index }>{ item[optionDescription] }</option>)} 
            </select>
        </div>
    )
}

export default Select