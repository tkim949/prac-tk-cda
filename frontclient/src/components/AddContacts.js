import React, {Component} from 'react';

class AddContacts extends Component {

    emptyContact ={
        name: '',
    }

    constructor(pros) {
        super(pros);
        this.state ={
            contact: this.emptyContact
        };
        this.submitContact = this.submitContact.bind(this);
    }

    async submitContact(e) {
        e.preventDefault();
        const {contact} = this.state;
         //const contactsInput = createRef();
         //this.focusContactsInput = () => this.contactsInput.current.focus();
        //let contact = useRef(null);
          //  { name: this.refs.name.value //deprecate!}

        await fetch("/api/v1/person", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contact)
        }).then(response => response.json());

        window.location.reload()
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" ref={this.name} type="text" className="validate"/>
                                <label htmlFor="name">Name</label>
                        </div>

                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                    </div>

                </form>
            </div>

        )
    }
}
export default AddContacts;