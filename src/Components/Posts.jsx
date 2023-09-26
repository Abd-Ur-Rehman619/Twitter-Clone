import React from "react";
import { Button, ButtonGroup, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Posts() {
  return (
    <>
      <div className="main">
        <div className="Home">
          <p className="home ">Home</p>
        </div>
        <div className="ForyouFollowing">
          <div>
            <Link to="/ForYouPage">
              <Button colorScheme="twitter" variant="link">
                For You
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/Following">
              <Button colorScheme="twitter" variant="link">
                Following
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
