class Fruit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let description = this.description.value
      let id = this.props.fruit.id
      let fruit ={id:id, name:name, description: description}
      this.props.handleUpdate(fruit)
    }
    this.setState({
      editable: !this.state.editable  //this sets state editable to true
    })
  }

  render() {
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name} /> : <h3>{this.props.fruit.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.fruit.description} /> : <p>{this.props.fruit.description}</p>
    return (
      <div>
        {name}
        {description}
        <button onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete Fruit</button>
      </div>
    )
  }
}

/* The render has two ternary operators. Variables name and description will display input fields if editable is true.
    If its false it will just display the original data with no input box. The return displays two buttons, Edit and Delete.
    Edit will appear if state editable is equal to false. If edit is clicked and editable becomes true, the button will read as submit.*/