import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons";
import { Modal, Button } from "react-bootstrap";
import AddPost from "../modal/AddPost";
import { useState } from "react";

export default function Share({user, refresh, setRefresh}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
  
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    {/* <img className="shareProfileImg" src="/assets/person/2.jpeg" alt="" /> */}
                    {/* <input placeholder="personalise and share your recipe here" className="shareInput"/> */}
                </div>
                {/* <hr className="shareHr"/> */}
                <div className="shareBottom">
                    <div className="shareOptions">
                        {/* <div className="shareOption">
                            
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Media </span>
                        </div> */}
                        
                    </div>
                    <div className="heading">
                            <h3 className="title">What are your favourite cuisines?</h3>
                        </div>
                    <button className="shareButton" onClick={handleShow}>Create Post</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Add Recipe
                            </Modal.Title>

                        </Modal.Header>
                        <Modal.Body>
                            <AddPost
                            refresh={refresh}
                            setRefresh={setRefresh}
                            user={user}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close Button
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
