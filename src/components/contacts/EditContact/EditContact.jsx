import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

const EditContact = () => {
    // Use useParams to get the contactId from the URL
    let { contactId } = useParams();

    // Initialize state directly without destructuring
    const [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: ''
        },
        groups: [],
        errorMessage: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState(prevState => ({ ...prevState, loading: true }));
                let response = await ContactService.getContact(contactId);
                let groupResponse = await ContactService.getGroups();
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    contact: response.data,
                    groups: groupResponse.data
                    
                }));
            } catch (error) {
                // Handle error appropriately
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    errorMessage: error.message
                }));
            }
        };

        fetchData();
    }, [contactId]);

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value
            }
        });
    };

    // Destructure state properly
    const { loading, contact, groups, errorMessage } = state;

    return (
        <React.Fragment>
            <pre>{JSON.stringify(contact)}</pre>
            <section className="add-contact">
                <div className="container p-3">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae incidunt, nisi illo perspiciatis non mollitia. Repellat veniam debitis odio dolorem nemo obcaecati maxime, reprehenderit molestias facilis placeat voluptatum, voluptate illo.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        value={contact.name}
                                        name="name"
                                        onChange={updateInput}
                                        required="true"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Photo URL"
                                        value={contact.photo}
                                        name="photo"
                                        onChange={updateInput}
                                        required="true"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Mobile"
                                        value={contact.mobile}
                                        name="mobile"
                                        onChange={updateInput}
                                        required="true"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={contact.email}
                                        name="email"
                                        onChange={updateInput}
                                        required="true"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Company Name"
                                        value={contact.company}
                                        name="company"
                                        onChange={updateInput}
                                        required="true"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        value={contact.title}
                                        name="title"
                                        onChange={updateInput}
                                        required="true"
                                    />
                                </div>
                                <div className="mb-2">
                                    <select className="form-control" 
                                        value={contact.groupId}
                                        name="groupId"
                                        onChange={updateInput}
                                        required="true"
                                        >
                                        <option value="">Select a Group</option>
                                        {groups.map(group => (
                                            <option key={group.id} value={group.id}>
                                                {group.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        value="Update"
                                    />
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={contact.photo}
                                alt="Contact"
                                className="contact-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default EditContact;
