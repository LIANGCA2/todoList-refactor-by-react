import React,{Component} from "react";


class AddItemInput extends Component{
    constructor(props){
        super(props);
    }
    addItem = (event)=>{

        var content = event.target.previousSibling.value;
        this.props.addItem(content);
        event.target.previousSibling.value = "";
    }
    render(){
        return (<div>
            <input className="input-text" type="text" name="ListItem" />
                <div id="button" onClick= {(event)=>this.addItem(event)}>Add</div>
        </div>)
    }
}
export default AddItemInput;