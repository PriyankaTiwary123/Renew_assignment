
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { withRouter } from 'react-router-dom';
import AppButtons from '../../Button';
import { Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


class AddModifyEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeField: {
                userId: "",
                jobTitleName: "",
                firstName: "",
                lastName: "",
                employeeCode: "",
                region: "",
                phoneNumber: "",
                emailAddress: ""

            }
        }
    }
    componentDidMount = () => {
        if (this.props && this.props.location && this.props.location.state && this.props.location.state.text === "modify") {
            this.setState({ employeeField: this.props && this.props.location.state && this.props.location.state.employeDataToBeModified })

        }
    }

    saveEmployeeAdded = (employeData) => {
        this.props.history.push({ pathname: '/', state: { employeeDetails: this.state.employeeField } })
    }
    redirectToPreviousPage = () => {
        this.props.history.push({ pathname: '/' })

    }
    handleUserIdChange = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                userId: e.target.value
            }
        }))
    }

    handleJobTitle = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                jobTitleName: e.target.value
            }
        }))
    }
    handleFirstName = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                firstName: e.target.value
            }
        }))
    }
    handleLastName = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                lastName: e.target.value
            }
        }))
    }
    handleEmployeCode = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                employeeCode: e.target.value
            }
        }))
    }
    handleRegion = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                region: e.target.value
            }
        }))
    }
    handlePhoneNo = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                phoneNumber: e.target.value
            }
        }))
    }
    handleEmailId = (e) => {
        e.persist();
        this.setState(prevState => ({
            employeeField: {
                ...prevState.employeeField,
                emailAddress: e.target.value
            }
        }))
    }


    render() {
        return (<div className="add-modify-employee">
            <container-fluid>
                <Card>
                    <div className="add-modify-content">
                        <Row className="first-row">
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="UserId" variant="outlined" type="text"
                                        name="userId"
                                        autoComplete="userId" value={this.state.employeeField && this.state.employeeField.userId ? this.state.employeeField.userId : ""} onChange={(e) => this.handleUserIdChange(e)} />
                                </form>
                            </Col>
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="JobTitle" variant="outlined" value={this.state.employeeField.jobTitleName} onChange={(e) => this.handleJobTitle(e)} />
                                </form>
                            </Col>
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" value={this.state.employeeField.firstName} onChange={(e) => this.handleFirstName(e)} />
                                </form>
                            </Col>
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" value={this.state.employeeField.lastName} onChange={(e) => this.handleLastName(e)} />
                                </form>
                            </Col>
                        </Row>
                        <Row className="second-row">
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Employee Code" variant="outlined" value={this.state.employeeField.employeeCode} onChange={(e) => this.handleEmployeCode(e)} />
                                </form>
                            </Col>
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Region" variant="outlined" value={this.state.employeeField.region} onChange={(e) => this.handleRegion(e)} />
                                </form>
                            </Col>
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={this.state.employeeField.phoneNumber} onChange={(e) => this.handlePhoneNo(e)} />
                                </form>
                            </Col>
                            <Col sm={3}>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Email Address" variant="outlined" value={this.state.employeeField.emailAddress} onChange={(e) => this.handleEmailId(e)} />
                                </form>
                            </Col>
                        </Row>

                    </div>
                    <AppButtons className="btn btn-group back-btn" label="Back" onButtonClick={() => this.redirectToPreviousPage()} />

                    <AppButtons className="btn btn-group save-btn" label="Save" onButtonClick={() => this.saveEmployeeAdded(this.state.employeeField)} />

                </Card>

            </container-fluid>
        </div>
        )
    }
}
export default withRouter(AddModifyEmployee);
