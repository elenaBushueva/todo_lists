import React, {useState} from 'react';

function App() {

    const initState1 = [
        {id: 1, name: 'Vera'},
        {id: 2, name: 'Nico'},
    ];

    const initState2 = [
        {id: 3, name: 'Kate'},
        {id: 4, name: 'John'},
    ];

    const [list1, setList1] = useState(initState1);
    const [list2, setList2] = useState(initState2);

    const moveToList2 = (id) => {
        const moveItem = list1.find(el => (el.id === id));
        setList2([...list2, moveItem]);
        setList1(list1.filter(el => el.id !== id));
    }

    const moveToList1 = (id) => {
        const moveItem = list2.find(el => (el.id === id));
        setList1([...list1, moveItem]);
        setList2(list2.filter(el => el.id !== id));
    }

    return (
        <ol>
            <h4>List 1</h4>
            {list1.map(el =>
                <li>
                    {el.name}
                    <button onClick={() => moveToList2(el.id)}>move to list 2</button>
                </li>)}
            <hr/>
            <h4>List 2</h4>
            {list2.map(el =>
                <li>
                    {el.name}
                    <button onClick={() => moveToList1(el.id)}>move to list 1</button>
                </li>)}
                <hr/>
        </ol>
    );
}

export default App;
