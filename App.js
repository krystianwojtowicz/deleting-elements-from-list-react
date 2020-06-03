const Task = (props) => {
    return(
    <li>
  <span>{props.text}</span>
  <button onClick={() => props.delete(props.text)}>X</button>
  </li>
    )
}


class App extends React.Component {


    state = {
        tasks: [
            {
                id: 0,
                text: '1'
            },
            {
                id: 1,
                text: '2'
            },
            {
                id: 2,
                text: '3'
            },
            {
                id: 3,
                text: '4'
            },
            {
                id: 4,
                text: '5'
            },]
    }


    deleteTask = id => {
        let tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id)
        tasks.splice(index,1)
        this.setState({
          tasks
        })
      }

    render() {
        return (
        <ul>{this.state.tasks.map(task => <Task key={task.id} text={task.text} delete={this.deleteTask.bind(this, task.id)}/>)}  </ul>
            
                )
              }
            }
        
        
ReactDOM.render(<App />, document.getElementById('root'))