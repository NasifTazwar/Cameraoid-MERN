import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./LearnMore.css";

const LearnMore = () => {
  const { user } = useAuth();
  return (
    <div className="jumbotron jumbotron-fluid bg-dark">
      <div className="jumbotron-background">
        <img
          src="https://placeimg.com/2000/1000/nature"
          className="blur "
          alt=""
        />
      </div>

      <div className="container text-white">
        <h1 className="display-4">Hello, {user.displayName}!</h1>
        <p className="lead">
          Beyond basic. For a new generation of imagemakers.
        </p>
        <hr className="my-4" />
        <p>
          With groundbreaking performance in both still and movie recording, our
          cameras are the ideal hybrid, providing breathtaking imagery along
          with on-the-spot delivery and distribution. Each camera is designed to
          bring to life the artistic visions of today's creators.
        </p>
        <button className="btn btn-primary btn-lg">Learn more</button>
      </div>
    </div>
  );
};

export default LearnMore;
