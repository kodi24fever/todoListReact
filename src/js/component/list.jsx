import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

export class List extends React.Component{
    constructor() {
        super();
        this.state = {
            inputValue : '',
            listOfItems: [{id: 0, value: 'This is a sample task. You can add more or delete them.'}],
            nextId: 1
        };
    }
    
    handledChange(e){
        this.setState({inputValue: e.target.value});
    }
    
    handledSubmit(e) {
        e.preventDefault();
        //console.log('submited');
        let newList = {
            value: this.state.inputValue,
            id: this.state.nextId
        };
        
        let addText = this.state.listOfItems;
        if (newList.value === ''){
            alert('Write something please');
        }else {
            addText.push(newList);
        }
        
        let countedId = this.state.nextId;
        
        this.setState({addText, inputValue: '', nextId: ++countedId});
    }
    
    removeList(id) {
        //console.log('remove', id);
        this.setState({
            listOfItems: this.state.listOfItems.filter((todo, index) => todo.id !== id)
        });
    }
    
    
    render(){
        return (
            <div>
            
                <form onSubmit={(e) => this.handledSubmit(e)}>
                    <div className="input-group input-group-lg">
                        <input type="text" value={this.state.inputValue} onChange={(e) => this.handledChange(e)} className="form-control" placeholder="What's need to be done?"/>
                    </div>
                </form>
                
                <div className="list-group">
                    {this.state.listOfItems.map((todo, index) => {
                    return (
                        <div className="list-group-item d-flex justify-content-between align-items-center" key={todo.id} id={todo.id}>
                            {todo.value}
                            <span onClick={() => this.removeList(todo.id)}><FontAwesomeIcon icon={faTimes} /></span>
                        </div>
                    );
                    })}
                </div>
                
                <div className="row"><div className="col-12">{this.state.listOfItems.length} tasks letf</div></div>
            </div>
        );
    }
}