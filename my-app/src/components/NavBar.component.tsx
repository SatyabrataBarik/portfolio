"use client";
import { Stack, Typography, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import SocialIcon from "../../json/imagesSocial.json";
import tabIcon from "../../json/tabIcon.json";
const NavBar = () => {
  const [hover, sethover] = useState(false);
  const [id, setid] = useState();
  return (
    <Stack
      sx={{
        backgroundColor: "#040b14",
        height: "100vh",
        width: "20%",
        color: "white",
      }}
    >
      <Avatar
        sx={{
          alignSelf: "center",
          marginTop: "65px",
          height: "120px",
          width: "120px",
        }}
      />
      <Typography
        sx={{
          fontSize: "18px",
          alignSelf: "center",
          fontWeight: 700,
          textTransform: "uppercase",
          marginTop: "32px",
        }}
      >
        Satyabrata Barik
      </Typography>
      <Stack direction={"row"} justifyContent={"space-around"} marginTop={2}>
        {SocialIcon?.map((item: any, idx: any) => (
          <Avatar
            sx={{
              backgroundColor: hover && idx == id ? "red" : "#ffff",
              height: 26,
              width: 26,
              cursor: "pointer",
            }}
            src={item?.src}
            sizes="30px"
            onClick={() => alert("hii")}
            onMouseOver={() => {
              sethover(true), setid(idx);
            }}
            onMouseOut={() => sethover(false)}
          />
        ))}
      </Stack>
      <Tabs
        aria-label="basic tabs example"
        orientation="vertical"
        sx={{ marginTop: 12 }}
      >
        {tabIcon?.map((item: any) => (
          <Tab
            label={item.lable}
            sx={{ color: "#ffff" }}
            icon={
              <img
                src={item?.icon}
                height={22}
                style={{ backgroundColor: "#ffff" }}
              />
            }
            iconPosition="start"
          />
        ))}
      </Tabs>
    </Stack>
  );
};

export default NavBar;
