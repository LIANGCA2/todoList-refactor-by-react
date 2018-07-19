import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./component/title";
import AddItemInput from "./component/addItemInput";
import Todolist from "./component/todolist";
import FilterList from "./component/filterList";



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoList:[],
            status:"all"
        }
    }

    addItem = (content)=>{
        var list = this.state.todoList;
        var id = this.generateUUID();
        list.push({id:id,content:content,complete:false})
        this.setState ({
            todoList:list
        })
    }




    generateUUID  =()=> {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }
    changeCheckStatus =(id)=>{

        var todolist = this.state.todoList;
        var iscomplete = todolist.find((item)=>item.id ==id).complete;
        todolist.find((item)=>item.id ==id).complete = !iscomplete;
        this.setState  ({
            todoList:todolist
        })
    }
    changeTab = (status)=>{
        console.log(status);
        this.setState({
            status:status
        })
    }
    changeContent = (id, content)=>{
        var todolist = this.state.todoList;
        todolist.find((item)=>item.id ==id).content = content;
        this.setState  ({
            todoList:todolist
        })
    }
  render() {
    return (
        <div className="container">
           <Title/>
<AddItemInput addItem = {(content)=>this.addItem(content)}/>
            <br/>
       <Todolist todolist = {this.showTodoList()}  changeContent={(id,content)=>this.changeContent(id,content)} changeCheckStatus ={(id)=>this.changeCheckStatus(id)}status = {this.state.status}/>
<FilterList changeTab = {(status)=>this.changeTab(status)}  status = {this.state.status}/>
        </div>
    );
  }

    showTodoList =()=>{
        return this.state.todoList.filter((item)=>this.state.status=="all"?true:this.state.status=="active"?!item.complete:item.complete)
    }
}






export default App;
