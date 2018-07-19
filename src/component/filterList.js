import React,{Component} from "react"


class FilterList extends Component{
    constructor(props){
        super(props);
    }
    changeTab = (event,status)=>{
        this.props.changeTab(status)
    }
    render(){
        return (<div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" className={this.props.status=="all"?"selected":""}  onClick = {(event,status)=>this.changeTab(event,"all")}>ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active"  className={this.props.status=="active"?"selected":""} onClick = {(event,status)=>this.changeTab(event,"active")}>Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" className={this.props.status=="complete"?"selected":""} onClick = {(event,status)=>this.changeTab(event,"complete")}>Complete</a>
                </li>
            </ul>

        </div>)
    }
}
export default FilterList