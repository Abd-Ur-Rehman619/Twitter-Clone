"use client";

import React, { ReactNode, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  IoIosSearch,
  IoIosHome,
  IoIosNotificationsOutline,
  IoMdListBox,
  IoIosPeople,
  IoIosSettings,
  IoIosMore,
  IoIosPerson,
} from "react-icons/io";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { FaXTwitter, FaRegMessage } from "react-icons/fa6";
import { IconType } from "react-icons";
import { Padding } from "@mui/icons-material";
import Posts from "./Posts";
import Trending from "./Trending";
import TwitterPost from "./tweets";
import MyPosts from "./MyPosts";
import SubscriptionNote from "./SubscriptionNote";
import TrendsSection from "./trendsSection";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: IoIosHome, address: "/" },
  { name: "Explore", icon: IoIosSearch, address: "/Explore" },
  {
    name: "Notification",
    icon: IoIosNotificationsOutline,
    address: "/Notification",
  },
  { name: "Messages", icon: FaRegMessage, address: "/Message" },
  { name: "List", icon: IoMdListBox, address: "/List" },
  { name: "Communitites", icon: IoIosPeople, address: "/Communities" },
  { name: "Verified", icon: FaXTwitter, address: "/Verified" },
  { name: "Profile", icon: IoIosPerson, address: "/Profile" },
  { name: "More", icon: IoIosMore },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <FaXTwitter />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link to={link.address}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Link>
      ))}
      <Button
        className="PostBtn"
        style={{ paddingLeft: 100, paddingRight: 100, borderRadius: 999 }}
        colorScheme="twitter"
      >
        Post
      </Button>
      <HStack spacing={{ base: "0", md: "6" }} style={{ padding: 50 }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://www.bmw.ca/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Germany</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <>
      <Flex {...rest}>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Flex>
    </>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setimageList] = useState(null);

  // Callback function to receive the selected image from MyPost
  const handleImageUpload = (Image) => {
    setSelectedImage(Image);
  };
  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} background="white" p="4">
          {/* Content */}
          <div className="PostTrend">
            <div className="Posts">
              <Posts />
            </div>
            <div className="Trending">
              <Trending />
            </div>
          </div>
        </Box>
        <Box ml={{ base: 0, md: 60 }} background="white" p="4">
          {/* Content */}
          <div className="PostTrend">
            <div className="Posts" style={{ display: "flex" }}>
              <MyPosts onImageUpload={handleImageUpload} />
            </div>
            <div className="Trending">
              <SubscriptionNote />
            </div>
          </div>
        </Box>
        <Box ml={{ base: 0, md: 60 }} background="white" p="4">
          {/* Content */}
          <div className="PostTrend">
            <div className="Posts">
              <TwitterPost selectedImage={selectedImage} />
            </div>
            <div className="Trending">
              <TrendsSection />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default SidebarWithHeader;
