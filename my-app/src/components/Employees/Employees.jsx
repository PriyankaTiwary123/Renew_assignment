
import React, { Component } from 'react';
import MaterialTable from "material-table"; import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { withRouter } from 'react-router-dom';
import employeData from '../../Assets/employedetails.json';
import AppButtons from '../../Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import '../../Styles.css'
import { Card } from '@material-ui/core';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: "User Id", field: "userId" },
                { title: "Job Title", field: "jobTitleName" },
                { title: "Name", field: "preferredFullName", render: rowData => <p>{rowData.firstName} {rowData.lastName}</p> },
                { title: "Employee Code", field: "employeeCode" },
                { title: "Region", field: "region" },
                { title: "Phone Number", field: "phoneNumber" },
                { title: "Email Address", field: "emailAddress" },
                { title: '', field: "deleteIcon", render: rowData => <Grid className='inline-flex'><EditIcon key={rowData.userId} onClick={(e) => this.modifyEmploye(e, rowData)} ></EditIcon></Grid> },
                { title: '', field: "editIcon", render: rowData => <Grid className='inline-flex'><DeleteIcon key={rowData.userId} onClick={(e) => this.deleteEmployee(e, rowData)} ></DeleteIcon></Grid> },
            ],
            employeDetails: [],
            modifyFlag: false,
            json: undefined
        }
    }
    componentDidMount = () => {
        this.setState({ employeDetails: employeData })
    }
    addEmployee = () => {
        this.props.history.push({ pathname: '/addModifyEmployee' })
    }
    modifyEmploye = (e, rowData) => {
        this.props.history.push({ pathname: '/addModifyEmployee', state: { employeDataToBeModified: rowData, text: "modify" } })
    }


    deleteEmployee = (e, rowData) => {
        const updatedEmployeDetails = this.state.employeDetails.filter(function (res, index) {
            return res !== rowData
        })
        this.setState({ employeDetails: updatedEmployeDetails })
    }
    onRowClickedExceptionReport = (rows) => {
        console.log(rows)
    }

    render() {
        return (
            <container-fluid>
                <Card>
                    <div className="add-button-div">
                        <AppButtons className="btn btn-primary add-btn" label="Add Employe" onButtonClick={this.addEmployee} />
                    </div>
                </Card>

                <div className="Employee-table">
                    <MaterialTable
                        columns={this.state.columns}
                        data={this.state.employeDetails}
                        options={{
                            selection: true,
                            pageSize: 5,
                            exportButton: true,
                        }}
                        onSelectionChange={(rows) => this.onRowClickedExceptionReport(rows)}
                        title="Employee Details"
                    />
                </div>
            </container-fluid>
        )
    }
}
export default withRouter(Employees);
