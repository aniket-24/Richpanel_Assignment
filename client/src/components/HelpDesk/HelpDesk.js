import React, { useState } from "react";
import {
  Search,
  Dropdown,
  Input,
  Button,
  Card,
  Image,
  Icon,
  Segment,
  // Divider,
  Label,
  Feed,
  Form,
} from "semantic-ui-react";

import "./HelpDesk.css";

const dummyData = [
  {
    id: 1,
    name: "Parshant Bhardwaj",
    email: "bprashant602@gmail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Parshant%20Bhardwaj&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",

    messages: [
      "Hi bhai,",
      "Kya kr rha hai ?",
    ],
  },
  {
    id: 2,
    name: "Rithik Sharma",
    email: "srithik645@gmail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Rithik%20Sharma&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    messages: [
      "Badhiya, tu suna ?",
      "Khuch nahi!",
      "Khali betha hu.",
    ],
  },
  {
    id: 3,
    name: "Jaskirat Singh",
    email: "jaskiratsingh562@gmail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Jaskirat%20Singh&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    messages: ["Haan vro", "Okay"],
  },
  {
    id: 4,
    name: "Aryan Garg",
    email: "aryan.garg@gmail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Aryan%20Gupta&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    messages: ["Kl, chl rhe ho na ghumne ?"],
  },
  {
    id: 5,
    name: "Ritik Ranaut",
    email: "rranaut76@gmail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Ritik%20Ranaut&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    messages: [
      "Movie dekhne chlte hai",
      "Fir McD chelege ya fir dominos",
      "Baaki sb bhi bta do",
    ],
  },
  {
    id: 6,
    name: "Vishesh Gupta",
    email: "visheshgamer@gmail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Vishesh%20Gupta&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    messages: [
      "Bhai, etna karcha kyu krna ?",
      "Whi jaake dekhege",
      "Bahar se khalege...",
    ],
  },
  {
    id: 7,
    name: "Ayush Goyal",
    email: "goyalayush@mail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Ayush%20Goyal&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    messages: [
      "Scooty le aaunga",
      "Mughe chlane diyo",
      "Petrol full kra leta hu.",
    ],
  },
  {
    id: 8,
    name: "Shravani Shewale",
    email: "shravani1shewale@gmail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://api.dicebear.com/6.x/initials/svg?seed=Shravani%20Shewale&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    messages: [
      "Jao, maje kro",
      "Etni door kese aau ?",
      "Huh,",
    ],
  },
];

const HelpDesk = () => {
  const [customers, setCustomers] = useState(dummyData);

  console.log("customers", customers[0].messages);

  let list = customers.map((item, key) => {
    return (
      <div style={{ marginTop: "1rem", cursor: "pointer" }} key={key}>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={item.url}
            />
            <Card.Header> {item.name} </Card.Header>
            <Card.Meta> {item.email} </Card.Meta>
            <Card.Description>
              {item.messages[item.messages.length - 1]}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  });

  const getChats = (userID) => {
    let selectedChat = customers.filter((item) => item.id === userID);
    selectedChat.map((itm, key) => {
      return (
        <div key={key}>
          <Feed.Event>
            <Feed.Label image="/images/avatar/small/joe.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Aniket Kumar</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>{itm.messages}</Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />24 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </div>
      );
    });
  };

  return (
    <div className="main">
      <div className="header">
        <div className="group">
          <h1 className="title">Conversations</h1>
          <div className="search">
            <Search />
          </div>
          <div className="filter">
            <Dropdown
              text="Filter"
              floating
              labeled
              button
              // className='icon'
            >
              <Dropdown.Menu>
                <Input icon="search" iconPosition="left" className="search" />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="online">
          <Button basic color="green">
            Online
          </Button>
        </div>
      </div>
      <Segment className="body">
        <div className="list"> {list} </div>
        <Segment className="message">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginRight: "4rem", fontWeight: "bold" }}>Aniket Kumar</div>
            <div style={{ marginRight: "4rem" }}>Room: 102</div>
            <div style={{ marginRight: "4rem" }}>Feb 13 - Feb 14</div>
            <Label>Create a task</Label>
          </div>
          <div style={{ marginTop: "2rem", color: "grey" }}>Today</div>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#696969" }}>
              <p>Hi guys!</p>
              <p>Kl chl rhe ho na ?</p>
            </div>
            <div style={{ color: "grey" }}>10:34</div>
          </div>
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <div
              style={{
                textAlign: "right",
                fontWeight: "bold",
                color: "#696969",
              }}
            >
              <p>Hello,</p>
              <p>
                Kl sb metro station pr milna
              </p>
            </div>
            <div style={{ color: "grey" }}>10:35</div>
          </div>
          <Form
            style={{
              marginTop: "10rem",
            }}
          >
            <Input icon="attach" fluid placeholder="Reply ...." />
          </Form>
        </Segment>
        <div className="right">
          <div className="about">
            <div>
              <Image
                src="https://api.dicebear.com/6.x/initials/svg?seed=Aniket%20Kumar&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600
                "
                size="small"
                circular
              />
            </div>
            <div
              style={{
                marginTop: "1rem",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Aniket Kumar
            </div>
            <div
              style={{
                margin: "0.5rem 0 0.5rem 0",
                color: "green",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Online
            </div>
            <div style={{ display: "flex" }}>
              <Button size="mini" style={{ marginRight: "1rem" }}>
                <Icon name="call" /> Call
              </Button>
              <Button size="mini">
                <Icon name="mail" /> Email
              </Button>
            </div>
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 1rem 0 0.5rem",
                }}
              >
                <div style={{ color: "grey" }}>Room</div> <div>102</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 1rem 0 0.5rem",
                }}
              >
                <div style={{ color: "grey" }}>Category</div>
                <div>Standard</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 1rem 0 0.5rem",
                }}
              >
                <div style={{ color: "grey" }}> Country</div> <div>India</div>
              </div>
            </div>
          </div>
          <div className="Task"></div>
        </div>
      </Segment>
    </div>
  );
};

export default HelpDesk;
