import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-images">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2023</p>
          <h5 className="title">This is a Blog Title</h5>
          <p className="desc">
            Aliquam quis mollis nulla, sit amet condimentum lectus. Quisque a
            eleifend mi. Aenean eu mauris odio. Ut at eleifend justo, non
            interdum quam. Sed fermentum vitae elit non ullamcorper. Sed iaculis
            lobortis purus, tincidunt volutpat ipsum efficitur at. Aenean rutrum
            vestibulum venenatis.
          </p>
          <Link to="" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
