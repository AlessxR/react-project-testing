import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "John M.", salary: 807, increase: true, id: 1},
                {name: "Alex W.", salary: 3030, increase: false, id: 2},
                {name: "Robert K.", salary: 5000, increase: true, id: 3}
            ]
        };
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            // // console.log(index);
            // data.splice(index, 1);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                // data: newArr
                data: data.filter(item => item.id !== id)
            }
        });
    };

    render() {
        return (
            <div className="app">
    
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>            
            
                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesAddForm />
    
            </div>
        );
    }
}

export default App;