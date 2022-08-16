import { Form, Button } from "react-bootstrap";
import { BiCommentCheck } from "react-icons/bi";
import { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DataForm() {
  const storyTitleTxt = useRef();
  const storyPostTxt = useRef();
  const [status, setStatus] = useState(0);

  const notifyMessageSent = () => toast.info("Your post has been successfully shared.",{position: "top-right",autoClose: 5000,hideProgressBar: false,});
  const notifyMesseageNotSent = () => toast.info("Failed to shared post.",{position: "top-right",autoClose: 5000,hideProgressBar: false,});

  const submit = (e) => {
    e.preventDefault();

    const url = "http://192.168.29.204:8001/post/create";

    //console.log(dataToSend)

    axios
      .post(url, {
        title: `${storyTitleTxt.current.value}`,
        post: `${storyPostTxt.current.value}`,
        status: status,
        likes: 0,
      })
      .then((Response) => {
        //setMessages(Response);
        console.log(storyPostTxt);
        storyTitleTxt.current.value = "";
        storyPostTxt.current.value = "";
        notifyMessageSent();
      })
      .catch((error) => {
        console.log(error);
        notifyMesseageNotSent();
      });
  };

  return (
    <>
      <ToastContainer/>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Story Title</Form.Label>
          <Form.Control as="input" rows={3} ref={storyTitleTxt} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tell us the tale</Form.Label>
          <Form.Control as="textarea" rows={3} ref={storyPostTxt} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => setStatus(1)}
        >
          Post it <BiCommentCheck />
        </Button>{" "}
        <Button
          variant="primary"
          type="submit"
          onClick={() => setStatus(0)}
        >
          Save as Draft <BiCommentCheck />
        </Button>{" "}
        <Button
          variant="primary"
          type="submit"
        >
          Clear <BiCommentCheck />
        </Button>
      </Form>
    </>
  );
}

export default DataForm;
