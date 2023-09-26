import React from "react";
import { Box, Button } from "@chakra-ui/react";
export default function SubscriptionNote() {
  return (
    <>
      <div className="TrendingSection" style={{ padding: 20 }}>
        <Box className="SubBox">
          <div>
            <p className="subscribe" style={{ fontSize: 20, padding: 5 }}>
              Subscribe to Premium
            </p>
            <p style={{ padding: 5 }}>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
            <Button
              borderRadius="full"
              style={{ margin: 5, paddingLeft: 20, paddingRight: 20 }}
              background={"black"}
              color={"white"}
              variant="solid"
            >
              Subscribe
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
