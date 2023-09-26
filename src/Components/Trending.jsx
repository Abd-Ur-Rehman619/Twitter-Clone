import React from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
export default function Trending() {
  return (
    <>
      <Box style={{ padding: 20 }}>
        <div>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsSearch color="gray.300" />
              </InputLeftElement>
              <Input
                borderRadius="full"
                size="md"
                placeholder="Search"
                style={{ background: "#e5e4e2" }}
              />
            </InputGroup>
          </Stack>
        </div>
      </Box>
    </>
  );
}
