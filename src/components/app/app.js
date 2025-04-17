import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

function App() {

    const data = [
        {name: "John M.", salary: 807, increase: true, id: 1},
        {name: "Alex W.", salary: 3030, increase: false, id: 2},
        {name: "Robert K.", salary: 5000, increase: true, id: 3}
    ];


    return (
        <div className="app">

            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>            
        
            <EmployeesList data={data} />
            <EmployeesAddForm />

        </div>
    );
}

export default App;