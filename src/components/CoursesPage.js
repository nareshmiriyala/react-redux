import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../redux/actions/couseActions";
import PropTypes from 'prop-types';
class CoursesPage extends React.Component
{
    state={
        course:{
        title:"React Course"
        }
    
    };
    handleChange = event => {
        event.preventDefault();
        let course={...this.state.course,title:event.target.value};

        this.setState({course})
    };
    handleSubmit=event =>{
    event.preventDefault();
    console.log("log message");
    debugger;
    this.props.dispatch(courseActions.createCourse(this.state.course));
    };
    render(){

       return <div>
           <form onSubmit={this.handleSubmit}>
               <h3>Add course</h3>
               <input type="text" value={this.state.course.title} onChange={this.handleChange} />
               <button type="submit">Add</button>
               {this.props.courses.map(course=>(
                   <div key={course.title}>{course.title}</div>

               ))}
           </form>
       </div>;
    }
}
CoursesPage.propTypes={
    courses:PropTypes.array.isRequired,
    dispatch:PropTypes.func.isRequired
};
function mapStateToProps(state) {
debugger;
    return {
        courses:state.courses
    };
}
export default connect(mapStateToProps) (CoursesPage);