import React from "react";

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
    };
    render(){

       return <div>
           <form onSubmit={this.handleSubmit}>
               <h3>Add course</h3>
               <input type="text" value={this.state.course.title} onChange={this.handleChange} />
               <button type="submit">Add</button>
           </form>
       </div>;
    }
}
export default CoursesPage;