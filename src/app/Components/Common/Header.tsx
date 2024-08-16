import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { animals } from "./data";
import { IoSearch, IoSearchCircleOutline } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";

export default function App() {
  return (
    <div className="">
      <Navbar className="bg-gradient-to-r from-[#006a4e] to-[#188f00] text-white" isBordered>
        <NavbarContent className="max-w-7xl" justify="start">
          <NavbarBrand className="mr-4">
            {/* <AcmeLogo /> */}
            <p className="hidden sm:block font-bold text-inherit">National Portal</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" href="">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-white bg-opacity-30 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<IoSearch size={25} />}
            type="search"
          />
          <ThemeToggle />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
