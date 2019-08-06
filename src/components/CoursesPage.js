import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as auhtorActions from "../redux/actions/authorActions";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
    componentDidMount() {
        this.props.actions.courseActions.loadCourses().catch(error => {
            alert("Loading courses failed " + error);
        });
        this.props.actions.authorActions.loadAuthors().catch(error => {
            alert("Loading authors failed " + error);
        })
    }

    render() {

        return <div>
            <CourseList deleteCourse={""} courses={this.props.courses}/>

        </div>;
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    courses: state.authors.length === 0 ? [] : state.courses.map(course => {
        return {
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).name
        };
    }),
    authors: state.authors
});
const mapDispatchToProps = dispatch => ({
    actions: {
        courseActions: bindActionCreators(courseActions, dispatch),
        authorActions: bindActionCreators(auhtorActions, dispatch)
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);