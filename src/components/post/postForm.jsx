import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import Select from '../../commons/forms/select'

class PostForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="box box-primary">
                <form role='form' onSubmit={handleSubmit}>
                    <div className="box-header with-border">
                        <h3 className="box-title">Compose a new posting</h3>
                    </div>

                    <div className="box-body">
                        <div className="form-group">
                            <Field className="form-control" required component='input' name='title' placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <Field className="form-control" required component='input' name='author' placeholder="Author" />
                        </div>
                        <div className="form-group">
                            <Field className="form-control" required component={Select} name='category' placeholder="Author" key={'name'} optionDescription={'name'} list={this.props.categories} />
                        </div>
                        <div className="form-group">
                            <Field id="compose-textarea" required component='textarea' name='body' placeholder="body" className="form-control" style={{ height: 100 }}>

                            </Field>
                        </div>

                    </div>

                    <div className="box-footer">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Publish</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'postForm' })(PostForm)