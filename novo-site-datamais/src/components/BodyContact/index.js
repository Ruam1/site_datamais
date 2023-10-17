import React from 'react';
import { TextField, makeStyles } from "@material-ui/core";
import { Form, TextArea } from 'semantic-ui-react'

import './style.css';

const useStyles = makeStyles((theme) => ({
    input: {
        color: "#000",
        background: "#fff",
        fontSize: 16,
    },
}));

const BodyContact = () => {
    const classes = useStyles();
    return (
        <div className='body_contact'>
            <div className='container'>
                <div className='row'>
                    <h2>Envie uma mensagem</h2>
                    <div className='col-sm-4 body_column'>
                        <div className='input_area_contact'>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="Nome"
                                variant="filled"
                                size="small"
                                inputProps={{ className: classes.input }}
                            />
                        </div>
                        <div className='input_area_contact'>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="Telefone"
                                variant="filled"
                                size="small"
                                inputProps={{ className: classes.input }}
                            />
                        </div>
                        <div className='input_area_contact'>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="E-mail"
                                variant="filled"
                                size="small"
                                inputProps={{ className: classes.input }}
                            />
                        </div>
                    </div>
                    <div className='col-sm-4 body_column'>
                        <div className='input_area_contact'>
                            <Form>
                                <TextArea
                                    placeholder='Mensagem'
                                    style={{ minHeight: 150 }}
                                />
                            </Form>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default BodyContact;