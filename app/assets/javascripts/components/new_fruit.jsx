const NewFruit = (props) => {

    let formFields = {}

    return (
        <form onSubmit={(e) => {
            props.handleFormSubmit(formFields.name.value, formFields.description.value);
        }}>
            <input ref={input => formFields.name = input} placeholder="Enter the name of the item" />
            <input ref={input => formFields.description = input} placeholder="Enter a description" />
            <button>Submit</button>
        </form>
    )
}

/* Form fields is an empty object that receives the inputs from the name field and the description field.
    the form receives handleFormSubmit as a prop from Body, and passes in the value of name and description to the form fields object */