const AllFruits = (props) => {

    var fruits = props.fruits.map((fruit) => {
        return (
            <div key={fruit.id}>
            <Fruit fruit = {fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
            </div>
        )
    })
    return (
        <div>
            {fruits}
        </div>
    )
}

/* This component receives fruits array from Body component through props, then maps the array to var fruits.
    It then assigns the Key as the fruit id, and passes each fruit as a prop to the fruit component, along with the handle delete & update functions from Body.
    The return displays the fruits and descriptions.*/