import React from "react";
import Slider from "../Slider";
 import Innerpage from "./Innerpage";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import useFetch from "./useFetch";

function Shows(Props) {
  const  Slidershowsdata= [
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/D2E0B4C1-F5A4-4530-A2A7-D31108629519/0-3x1.jpg?width=2310&updatedTime=2023-10-30T12:06:26Z&dt=Web",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/CD29D287-7DDA-46DC-9CF9-A9FAF088A1F0/0-3x1.jpg?width=2310&updatedTime=2023-10-30T12:08:18Z&dt=Web",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/00BE93DA-3C15-4BB4-A8C9-27CF16DB1AEF/0-3x1.jpg?width=2310&updatedTime=2023-10-30T12:15:35Z&dt=Web",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/4CBBD95A-537B-4B95-BD6E-7CE5568B32BF/0-3x1.jpg?width=2310&updatedTime=2023-11-01T14:34:08Z&dt=Web",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/09E87D4B-120A-4971-8016-E177B373E66E/0-3x1.jpg?width=2310&updatedTime=2023-08-05T14:28:03Z&dt=Web",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/AB4E98DA-CAA5-48C0-81A8-DB20084EE026/0-3x1.jpg?width=2310&updatedTime=2023-10-05T03:42:35Z&dt=Web",
    },
  ];
  // const Showsdata1 = [
  //   {
  //     Id: 1,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/00BE93DA-3C15-4BB4-A8C9-27CF16DB1AEF/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:15:35Z&dt=Web",
  //     Moviename: "Sarvam Shakthi Mayam",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Sarvam Shakthi Mayam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/00BE93DA-3C15-4BB4-A8C9-27CF16DB1AEF/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:15:35Z&dt=Web",
  //   video:"https://www.youtube.com/embed/a8pWHqIG7zk",
  //   },
  //   {
  //     Id: 2,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/4CBBD95A-537B-4B95-BD6E-7CE5568B32BF/0-2x3.jpg?width=305&updatedTime=2023-11-02T07:59:31Z&dt=Web",
  //     Moviename: "Papam Pasivadu",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Papam Pasivadu' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/4CBBD95A-537B-4B95-BD6E-7CE5568B32BF/0-16x9.jpg?width=2310&updatedTime=2023-11-02T07:59:31Z&dt=Web",
  //   video:"https://www.youtube.com/embed/KXiAihlIh3I",
  //   },
  //   {
  //     Id: 3,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/CD29D287-7DDA-46DC-9CF9-A9FAF088A1F0/0-2x3.jpg?width=305&updatedTime=2023-11-03T12:26:21Z&dt=Web",
  //     Moviename: "Family Dhamaka",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Family Dhamaka' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/4A78CA85-3432-403B-9A33-4FE715082440/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:08:19Z&dt=Web",
  //    video:"https://www.youtube.com/embed/YfvAUJjWgXs",
  //   },
  //   {
  //     Id: 4,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/2B91E192-78A4-4E8B-9967-AC9D161DBD03/0-2x3.jpg?width=305&updatedTime=2023-09-24T12:05:02Z&dt=Web",
  //     Moviename: "Nenu Super Woman",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Nenu Super Woman' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/47E3281F-1E9C-43AB-B9BF-994A2E840788/0-16x9.jpg?width=2310&updatedTime=2023-09-24T12:05:03Z&dt=Web",
  //    video:"https://www.youtube.com/embed/2-UMJYb9kvg"
  //   },
  //   {
  //     Id: 5,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/BBF8D5B7-2B63-4604-9562-ED3B3BCF9465/0-2x3.jpg?width=305&updatedTime=2023-05-26T13:11:15Z&dt=Web",
  //     Moviename: "Telugu Indian Idol",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Telugu Indian Idol' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=2310&updatedTime=2023-10-05T04:00:34Z&dt=Web",
  //    video:"https://www.youtube.com/embed/kHvY04m40DA",
  //   },
  //   {
  //     Id: 6,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/953C6ACC-CD82-48CB-B7F5-CB8E9B1EE2C1/0-2x3.jpg?width=305&updatedTime=2023-04-25T02:07:55Z&dt=Web",
  //     Moviename: "Unstoppable",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Unstoppable' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:06:28Z&dt=Web",
  //     video:"https://www.youtube.com/embed/a8pWHqIG7zk",
  //   },
  //   {
  //     Id: 7,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/BA371718-4FC7-4DAB-83D8-1D7ABB5038D7/0-2x3.jpg?width=305&updatedTime=2023-04-24T13:39:40Z&dt=Web",
  //     Moviename: "SARKAAR",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'SARKAAR' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/836A0A87-656C-46FE-BBD1-F12BA6088F68/0-16x9.jpg?width=2310&updatedTime=2023-11-02T08:16:23Z&dt=Web",
  //     video:"https://www.youtube.com/embed/KXiAihlIh3I",
  //   },
  //   {
  //     Id: 8,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/03BB17CC-18AB-4E24-B6F9-2EA3D546B5F5/0-2x3.jpg?width=305&updatedTime=2023-11-02T08:14:00Z&dt=Web",
  //     Moviename: "Comedy Stock Exchange",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Comedy Stock Exchange' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/998DEE7A-492F-4E20-9C5E-EA7B186E0A5F/0-16x9.jpg?width=2310&updatedTime=2023-07-17T11:45:48Z&dt=Web",
  //     video:"https://www.youtube.com/embed/YfvAUJjWgXs",
  //   },
  //   {
  //     Id: 9,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/11946C7F-4468-4C5A-ACFF-E1BD19D97B3E/0-2x3.jpg?width=305&updatedTime=2023-04-24T08:04:43Z&dt=Web",
  //     Moviename: "Chef mantra",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Chef mantra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/A7C4A8B8-B112-4C74-8AFC-6128093F71FC/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:45:53Z&dt=Web",
  //     video:"https://www.youtube.com/embed/kHvY04m40DA",
  //   },
  //   {
  //     Id: 10,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:10:48Z&dt=Web",
  //     Moviename: "Mama Maschindra",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Mama Maschindra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:10:48Z&dt=Web",
  //     video:"https://www.youtube.com/embed/kHvY04m40DA",
  //   },
  // ];
  // const Showsdata2 = [
  //   {
  //     Id: 1,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/CD29D287-7DDA-46DC-9CF9-A9FAF088A1F0/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:08:18Z&dt=Web",
  //     Moviename: "EP 8 : Teachers Special",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'EP 8 : Teachers Special' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/F17D8EEC-6D3F-48EC-AA4C-508EE28947E5/0-16x9.jpg?width=2310&updatedTime=2023-10-11T13:43:10Z&dt=Web",
  //   video:"https://www.youtube.com/embed/YTQJuaOeu-Y",
  //   },
  //   {
  //     Id: 2,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/2B91E192-78A4-4E8B-9967-AC9D161DBD03/0-2x3.jpg?width=305&updatedTime=2023-09-24T12:05:02Z&dt=Web",
  //     Moviename: "Nenu Super Woman ",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Nenu Super Woman ' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/2B91E192-78A4-4E8B-9967-AC9D161DBD03/0-16x9.jpg?width=2310&updatedTime=2023-09-24T12:05:02Z&dt=Web",
  //     video:"https://www.youtube.com/embed/eMLvYkEGQpg",
  //   },
  //   {
  //     Id: 3,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/0E75A713-3FEC-4311-B1B6-CC2A4CE587FA/0-2x3.jpg?width=305&updatedTime=2023-08-02T16:56:08Z&dt=Web",
  //     Moviename: "Set Kaadu...Set Cheskovali",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Set Kaadu...Set Cheskovali' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/0E75A713-3FEC-4311-B1B6-CC2A4CE587FA/0-16x9.jpg?width=2310&updatedTime=2023-08-02T16:56:08Z&dt=Web",
  //     video:"https://www.youtube.com/embed/AwG-AtAtiB8",
  //   },
  //   {
  //     Id: 4,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/5C550DD4-163F-4C63-9D3C-7D85788D3592/0-2x3.jpg?width=305&updatedTime=2023-11-02T08:13:53Z&dt=Web",
  //     Moviename: " Sarkaar 3",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film ' Sarkaar 3' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/5C550DD4-163F-4C63-9D3C-7D85788D3592/0-16x9.jpg?width=2310&updatedTime=2023-11-02T08:13:53Z&dt=Web",
  //     video:"https://www.youtube.com/embed/aJVl79Pmtm0",
  //   },
  //   {
  //     Id: 5,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/9FFA19A6-057F-46DB-B392-8DB7CA713FF1/0-2x3.jpg?width=305&updatedTime=2023-06-22T18:29:43Z&dt=Web",
  //     Moviename: "Iconic Finale Part 2",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Iconic Finale Part 2' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/9FFA19A6-057F-46DB-B392-8DB7CA713FF1/0-16x9.jpg?width=2310&updatedTime=2023-06-22T18:29:43Z&dt=Web",
  //     video:"https://www.youtube.com/embed/XazM4Hlat4o"
  //   },
  //   {
  //     Id: 6,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/99C084F2-C137-4F97-A048-45E7C5E80DAD/0-2x3.jpg?width=305&updatedTime=2023-04-25T17:11:55Z&dt=Web",
  //     Moviename: " Game - Erupting like a Volcano!",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film ' Game - Erupting like a Volcano!' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/99C084F2-C137-4F97-A048-45E7C5E80DAD/0-16x9.jpg?width=2310&updatedTime=2023-04-25T17:11:55Z&dt=Web",
  //     video:"https://www.youtube.com/embed/YTQJuaOeu-Y",
  //   },
  //   {
  //     Id: 7,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/8379FC92-DFAC-472C-83CA-32CA937B49C3/0-2x3.jpg?width=305&updatedTime=2023-04-24T08:04:56Z&dt=Web",
  //     Moviename: " Chef Mantra",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film ' Chef Mantra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/8379FC92-DFAC-472C-83CA-32CA937B49C3/0-16x9.jpg?width=2310&updatedTime=2023-04-24T08:04:56Z&dt=Web",
  //     video:"https://www.youtube.com/embed/eMLvYkEGQpg",
  //   },
  //   {
  //     Id: 8,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/017E3F9A-8ACA-4985-BA42-9974895AA6FF/0-2x3.jpg?width=305&updatedTime=2023-04-25T01:37:33Z&dt=Web",
  //     Moviename: " Telugu Indian Idol",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Telugu Indian Idol' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/223A7061-13F8-4C6B-9F71-9A36E5FA382F/0-16x9.jpg?width=2310&updatedTime=2023-04-25T01:36:02Z&dt=Web",
  //     video:"https://www.youtube.com/embed/AwG-AtAtiB8",
  //   },

  //   {
  //     Id: 8,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/09E87D4B-120A-4971-8016-E177B373E66E/0-2x3.jpg?width=305&updatedTime=2023-08-05T14:28:03Z&dt=Web",
  //     Moviename: "Tharagathi Gadhi Daati",
  //     relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
  //     description:
  //       "In the film 'Tharagathi Gadhi Daati' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/09E87D4B-120A-4971-8016-E177B373E66E/0-16x9.jpg?width=2310&updatedTime=2023-08-05T14:28:03Z&dt=Web",
  //     video:"https://www.youtube.com/embed/aJVl79Pmtm0",
  //   },
  // ];
  const Showsdata1=useFetch("./showsdata1.json")
  const Showsdata2=useFetch("./showsdata2.json")
  
  return (
    <div>
         <Navbar/>
      <Slider Moviegurusliderdata={Slidershowsdata} /><br/><br/>
      <div style={{color:"white", fontSize:"25px"}}>Latest </div><br/><br/>
       <Innerpage  Moviegurudata={Showsdata1}/>
       <br/><br/>
      <div style={{color:"white", fontSize:"25px"}}> Trending</div><br/><br/>
       <Innerpage  Moviegurudata={Showsdata2}/>
       <Fotter/>
    </div>
  );
}

export default Shows;
