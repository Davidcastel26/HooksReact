import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp'

export const App = () => {
    return (
        <div>
            {/* <h1>Hola perros</h1> */}
            {/* <FirstApp /> */}
            <FirstApp  subTitle="123"/>
            <CounterApp value={32}/>
        </div>
    );   
}