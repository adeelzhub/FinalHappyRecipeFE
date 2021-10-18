import {Form, Button} from "react-bootstrap";
import React, { useState } from "react";



//fetch request-handler
// anonm fution that takes e, (onchange)



function AddPost({user, refresh, setRefresh}) {


    const fetchRequest = async (desc) => {
        try {
            const response = await fetch("https://happy-recipea.herokuapp.com/api/posts/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    userId: user._id,
                    desc: desc
                }),
            });
            console.log(response)
        } catch (error) {
            console.log(error)
            
        }
    }
    const [desc, setDesc]= useState();

    const submitHandler = (e) => {
        e.preventDefault();
        fetchRequest( desc );
        setRefresh(!refresh)
        //call fetch request for creating post
      }
    return (
        <form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder=" Desc *"
                    required
                    onChange={(e)=> setDesc(e.target.value)}
                    
                />
            </Form.Group>

            <Button variant="success" type="submit" block="true" >
                Add Post
            </Button>
        </form>
    )
}

export default AddPost
