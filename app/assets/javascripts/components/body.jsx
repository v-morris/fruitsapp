class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateFruit = this.updateFruit.bind(this)
    }

    handleFormSubmit(name, description) { //posts fruit name and description, then goes to the addNewFruit function
        let body = JSON.stringify({ fruit: { name: name, description: description } })
        fetch('http://localhost:3000/api/v1/fruits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => { return response.json() })
            .then((fruit) => {
                this.addNewFruit(fruit)
            })
    }

    handleDelete(id) {  //deletes fruit that has the id passed in, then goes to deleteFruit function
        fetch(`http://localhost:3000/api/v1/fruits/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.deleteFruit(id)
            })
    }

    //Sets newFruits, if filtered fruits id !==  id parameter, these go into array.
    //If the filtered fruit id === id parameter, don't put that fruit in the array
    deleteFruit(id) {
        newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
        this.setState({
            fruits: newFruits
        })
    }

    addNewFruit(fruit) {  //Updates the state and makes the page update with new fruit. Concat connects new fruit to fruit array and displays on page.
        this.setState({
            fruits: this.state.fruits.concat(fruit)
        })
    }

    handleUpdate(fruit) { //fetches specific fruit, passes into update fruit function
        fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ fruit: fruit }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.updateFruit(fruit)
            })
    }

    updateFruit(fruit) { //sets new fruit to filtered array, if the filtered id does not equal the fruit id of parameter passed, push that to the newFruits array
        let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
        newFruits.push(fruit)
        this.setState({
            fruits: newFruits
        })
    }

    componentDidMount() { // fetches all fruit and sets the state fruits array to the data fetched
        fetch('api/v1/fruits.json')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ fruits: data }) });
    }

    render() {
        return (
            <div>
                <NewFruit handleFormSubmit={this.handleFormSubmit} /> {/*this is the new fruit form component, passes the submit function through props*/}
                <AllFruits fruits={this.state.fruits} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate} /> 
                {/*this passes fruits array, delete function, and update function to All Fruits component*/}
            </div>
        )


    }
}