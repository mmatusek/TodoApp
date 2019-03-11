import React from 'react';
import AddTask from '../pages/AddTask.js';
import DoneTasks from '../pages/DoneTasks.js';
import WaitingTasks from '../pages/WaitingTasks.js';
import ErrorPage from '../pages/ErrorPage.js';
import {
    Switch,
    Route
} from 'react-router-dom';


class Page extends React.Component {
        counter = 5;

        state={
            tasks: []
        }

       componentDidMount(){
           fetch("/tasks.json")
           .then(response =>
            response.json())
           .then(data => {
               this.setState({
                   tasks: data.tasks
               })
          
           })
       }

        addTask = (text,date, priority) => {
            const task = {
                id: this.counter,
                title: text,
                date,
                priority,
                active: true,
                finishDate: null
            }
            this.counter++;
            this.setState(prevState => ({
                tasks: [...prevState.tasks, task]
            }))
            return true;
        }

        handleStatus = (id) => {
            const tasks = [...this.state.tasks];
            tasks.forEach(task => {
                if (task.id === id) {
                    task.active = false;
                    task.finishDate = new Date().getTime()
                }
            })

            this.setState({
                tasks
            })
        }

        handleDelete = (id) => {
            const tasks = [...this.state.tasks];
            const index = tasks.findIndex(task => task.id === id)
            tasks.splice(index, 1)
            this.setState({
                tasks
            })

        }

        render() { 
           
            
         return ( 
       <Switch>
        <Route path = "/" exact component = {() => <AddTask tasks = {this.state.tasks}
        add = {this.addTask }/>} />
         <Route path = "/doneTasks" component = {() => <DoneTasks tasks = {this.state.tasks}
        delete = {this.handleDelete }/>} />
         <Route path = "/waitingTasks" component = {() => <WaitingTasks tasks = {this.state.tasks}
        status = { this.handleStatus} delete = { this.handleDelete }/>} />
        <Route component = { ErrorPage }/>
        </Switch>
  
       
        )}
        
        }

 export default Page;