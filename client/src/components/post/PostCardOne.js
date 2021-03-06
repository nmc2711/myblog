import React, { Fragment } from "react";
import { Card, CardImg, CardBody, CardTitle, Button, Badge, Row } from "reactstrap";
import { Link } from "react-router-dom";

const PostCardOne = ({ posts }) => {
  return (
    <Fragment>
      {Array.isArray(posts)
        ? posts.map(({ _id, title, fileUrl, comments, views }) => {
            return (
              <div key={_id} className="col-md-4">
                <Link to={`/post/${_id}`} className="text-dark text-decoration-none">
                  <Card className="mb-3">
                    <CardImg top alt="카드이미지" src={fileUrl} />
                    <CardBody>
                      <CardTitle className="text-truncate d-flex justify-content-between">
                        <span className="text-truncate">{title} </span>
                        <span>
                          &nbsp;&nbsp;
                          <span>{views}</span>
                        </span>
                      </CardTitle>
                      <Row>
                        <Button color="primary" className="p-2 btn-block">
                          More <Badge color="light">{comments.length}</Badge>
                        </Button>
                      </Row>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            );
          })
        : ""}
    </Fragment>
  );
};

export default PostCardOne;
