import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";

class CoursesPage extends React.Component
{
    componentDidMount() {
        this.props.actions.loadCourses().catch(error=>{
            alert("Loading courses failed "+error);
        })
    }

    render(){

       return <div>
               {this.props.courses.map(course=>(
                   <div key={course.title}>{course.title}</div>

               ))}
       </div>;
    }
}
CoursesPage.propTypes={
    courses:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    courses: state.courses
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(courseActions,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps) (CoursesPage);