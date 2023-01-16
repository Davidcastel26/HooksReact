// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp';

export const App = () => {
    return (
        <div>
            <CounterApp value={100}/>
            {/* <FirstApp title='Hola, Soy Goku' /> */}
        </div>
    );   
}