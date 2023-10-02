"use client";
import { Drawer } from "antd";
import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

function MobileMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div
      id="menuToggle"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <Drawer
        maskStyle={{ zIndex: 2 }}
        zIndex={4}
        bodyStyle={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
        size="large"
        className="flex justify-end items-end"
        placement="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <ul className={"menu flex flex-col justify-end items-end"}>
          <li
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a href="#portfolio">Project</a>
          </li>
          <li
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Drawer>

      <div
        className={
          "ham-btn flex flex-col gap-2 cursor-pointer mr-[5px] " +
          (openDrawer ? "btn-active" : "")
        }
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MobileMenu;
