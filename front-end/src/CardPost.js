import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FcOk,FcCancel,FcEmptyTrash } from "react-icons/fc";
function CardPost() {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    fetch("http://192.168.29.204:8001/post/allposts")
      .then((res) => res.json())
      .then(
        (result) => {
          setisLoaded(true);
          setData(result);
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  if (!isLoaded) {
    return <>No Data</>;
  } else if (isLoaded) {
    return (
      <>
        {data.map((item) => (
          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Body>
              <Card.Title>Card Title {item.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Good <br/> <FcOk size={30}/></Button>{" "}
              <Button variant="primary">Hide <br/><FcCancel size={30}/></Button>{" "}
              <Button variant="primary">Delete <br/><FcEmptyTrash size={30}/></Button>{" "}

            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export default CardPost;
