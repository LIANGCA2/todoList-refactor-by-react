import React, {Component} from "react"

class Todolist extends Component {
    constructor(props) {
        super(props)
    }

    changeCheckStatus = (event, id) => {
        //this.props.todoList.find((item)=>item.id ==id).complete = event.target.checked;
        this.props.changeCheckStatus(id);
    }

    changeEditStatus = (event) => {

        event.target.setAttribute("contentEditable", true);

    }

    changeContent = (event, id)=>{

            var content = event.target.innerText;

        this.props.changeContent(id, content);
    }

    render() {


        return (<ol>
            <li id="c57aab79-7dfa-4d85-8ede-aa653a8b5d93" className="">
                <input name="done-todo" type="checkbox" className="done-todo"/> Parking Lot APP Refactor
            </li>
            <li id="00bd6227-e881-4024-ad7a-4212d930c947" className="checked">
                <input name="done-todo" type="checkbox" className="done-todo" checked/> Parking Lot APP 时序图
            </li>
            {
                this.props.todolist.map((item) => {
                    return (<li id={item.id} className={item.complete ? "checked" : ""}
                                onDoubleClick={(event) => this.changeEditStatus(event)}
                                onBlur= {(event,id)=>this.changeContent(event, item.id)}
                    >
                        <input name="done-todo" type="checkbox" className="done-todo"
                               onChange={(event, id) => this.changeCheckStatus(event, item.id)}
                               checked={item.complete ? true : false}
                               /> {item.content}</li>)
                })
                //{}注意onChange函数参数的传法
            }
        </ol>)
    }
}

export default Todolist;