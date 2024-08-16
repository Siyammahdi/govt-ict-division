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
import { IoSearch } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";

export default function App() {
  return (
    <div>
      <Navbar
        className="bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d] text-white px-4 sm:px-20"
        maxWidth="full"
        isBordered
      >
        <NavbarContent className="flex justify-between items-center w-full">
          <NavbarBrand className="flex items-center">
            {/* <AcmeLogo /> */}
            <p className="hidden sm:block font-bold text-inherit">National Portal</p>
          </NavbarBrand>
          
          <NavbarContent className="hidden lg:flex gap-6 text-white">
            <NavbarItem isActive>
              <Link color="secondary" href="">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                Institutions
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                Project
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                Gallery
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                Acts/Policy
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" aria-current="page">
                e-Services
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent style={{justifyContent: "endgit a"}} className="flex items-center gap-4">
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
          
          {/* Mobile Menu Toggle */}
          <NavbarContent className="flex sm:hidden items-center">
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  size="md"
                  className="cursor-pointer bg-transparent"
                  color="primary"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Mobile Menu">
                <DropdownItem>
                  <Link color="foreground" href="">
                    Home
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link color="foreground" href="#">
                    About Us
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link color="foreground" href="#">
                    Institutions
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link color="foreground" href="#">
                    Project
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link color="foreground" href="#">
                    Gallery
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link color="foreground" href="#">
                    Acts/Policy
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link color="foreground" href="#">
                    e-Services
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
