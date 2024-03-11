import React from "react"

class RefClass extends React.Component {
    constructor(props){
        super(props)
        this.state =  {
            name: "Rachit Yadav",
            newName: "Rachit New"
        }    
        this.myref = React.createRef()
    }
    handleChange = (e) =>{
        this.setState({name: e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();  // Prevents the default form submission behavior
        console.log("get each values using ref",this.input,this.myref)
    }
    render(){
        return <>
        <h1>Ref class compoent {this.props.ref_class}</h1>
        <label>Class Input</label>
        <input value = {this.state.name} onChange={this.handleChange}/>
        <form onSubmit={this.handleSubmit}>
            {/* <input value = {this.state.newName} ref = {(input) => this.input = input}/> */}
            <input value = {this.state.newName} ref = {this.myref}/>

            <button type="submit">submit</button>
        </form>
        </>
    }
}

export default RefClass