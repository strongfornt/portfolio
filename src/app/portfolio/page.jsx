import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { portfolio } from "@/constants/data";

export default function page() {
  return (
    <>
      <section>
        <header className="  hidden md:flex mt-6 lg:mt-12    items-center justify-center ">
          <h3 className=" md:text-white/10 text-8xl font-bold  tracking-[15px]   ">
            WORKS
          </h3>
          <div className="flex  min-w-fit items-center justify-center flex-col absolute">
            <h3 className="text-white/90 text-5xl   font-bold font-sans mt-3 mb-3  ">
              MY <span className="text-[#ffb400]">PORTFOLIO</span>
            </h3>
            <span className="h-[3px] w-16 bg-[#ffb400] inline-flex   " />
          </div>
        </header>

        <main>
          <section class="">
            <div class="container px-2 md:px-7 lg:max-w-4xl  xl:max-w-6xl py-10 mx-auto">
              <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12  md:grid-cols-2 xl:grid-cols-3">
                {portfolio?.map((item, idx) => (
                  <div
                    key={idx}
                    class="overflow-hidden bg-center bg-cover bg-no-repeat rounded-lg cursor-pointer h-96 group"
                    style={{
                      backgroundImage: `url(${item?.bg})`,
                    }}
                  >
                    <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                      <h2 class="mt-4 text-xl  font-semibold text-white capitalize">
                        {item?.title}
                      </h2>

                      <div className="mt-3 w-full">
                        <Menu>
                          <MenuButton as={Button} className="bg-red-800">
                            Source
                          </MenuButton>
                          <MenuList>
                            <MenuItem>
                              <a href={item?.LiveLink} target="_blank">
                                {item?.LiveTitle}
                              </a>
                            </MenuItem>
                            <MenuItem>
                              <a href={item?.ClientRepoLink} target="_blank">
                                {item?.ClientRepoTitle}
                              </a>
                            </MenuItem>
                            {item?.ServerRepoTitle && (
                              <MenuItem>
                                <a href={item?.ServerRepoLink} target="_blank">
                                  {item?.ServerRepoTitle}
                                </a>
                              </MenuItem>
                            )}
                          </MenuList>
                        </Menu>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
