import React from "react";
import Slider from "../Slider";
import Innerpage from "./Innerpage";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import useFetch from "./useFetch";

function Mymovies() {

  const Sliderimgsdata= [
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/B1C29F65-BC60-4CDC-9311-12D6DCD2073B/0-16x9.jpg?width=2310&updatedTime=2023-10-17T11:58:48Z&dt=Web",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/C02362E5-C250-4033-ADDD-B77A8C7D5F39/0-3x1.jpg?width=2310&updatedTime=2023-10-30T12:18:40Z&dt=Web",
    },
    { img: "https://i.ytimg.com/vi/4GzAwnjVTqc/maxresdefault.jpg" },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/E5C92F75-2BB4-464F-974A-6B26F25C38F2/0-3x1.jpg?width=2310&updatedTime=2023-10-18T11:50:29Z&dt=Web",
    },
    {
      img: "https://thesouthfirst.com/wp-content/uploads/2022/09/poster-pelli-choopulu.jpg",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/2645A8F2-C002-4EDB-83F2-38BD077A0EDA/0-16x9.jpg?width=2310&updatedTime=2023-09-01T12:48:44Z&dt=Web",
    },
    {
      img: "https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-3x1.jpg?width=2310&updatedTime=2023-09-10T18:15:47Z&dt=Web",
    },
  ];
  // const Moviedata1 = [
  //   {
  //     Id: 1,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:10:48Z&dt=Web",
  //     Moviename: "Mama Maschindra",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Mama Maschindra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:10:48Z&dt=Web",
  //     video: "https://www.youtube.com/embed/URPjeqQgkUg",
  //   },
  //   {
  //     Id: 2,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/D43B89A2-F781-4C1A-9A3E-2E3EBB9099CC/0-2x3.jpg?width=305&updatedTime=2023-11-03T12:30:48Z&dt=Web",
  //     Moviename: "The Great Indian Suicide",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'The Great Indian Suicide' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/D43B89A2-F781-4C1A-9A3E-2E3EBB9099CC/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:17:15Z&dt=Web",
  //     video: "https://www.youtube.com/embed/Ad3KpruTlCk",
  //   },
  //   {
  //     Id: 3,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/C02362E5-C250-4033-ADDD-B77A8C7D5F39/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:18:40Z&dt=Web",
  //     Moviename: "Mr.Pregnant",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Mr.Pregnant' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/C02362E5-C250-4033-ADDD-B77A8C7D5F39/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:18:40Z&dt=Web",
  //     video: "https://www.youtube.com/embed/MDUVa03xbIs",
  //   },

  //   {
  //     Id: 4,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/D54C647B-A5E6-4A21-8252-0116BD3DB32F/0-2x3.jpg?width=305&updatedTime=2023-10-05T17:42:52Z&dt=Web",
  //     Moviename: "Mayapetika",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Mayapetika' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/D54C647B-A5E6-4A21-8252-0116BD3DB32F/0-16x9.jpg?width=2310&updatedTime=2023-10-05T17:42:52Z&dt=Web",
  //     video: "https://www.youtube.com/embed/iNb-ycFhcOQ",
  //   },
  //   {
  //     Id: 5,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/841C0A2D-DFA5-4DDF-B45A-BA04C037444A/0-2x3.jpg?width=305&updatedTime=2023-11-01T14:32:49Z&dt=Web",
  //     Moviename: "Baby",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Baby' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/841C0A2D-DFA5-4DDF-B45A-BA04C037444A/0-16x9.jpg?width=2310&updatedTime=2023-11-01T14:32:49Z&dt=Web",
  //     video: "https://www.youtube.com/embed/_npN4uwDMLk",
  //   },
  //   {
  //     Id: 6,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/D4020CD7-1377-461D-B4BD-D4AEA6D7D6FA/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:33:40Z&dt=Web",
  //     Moviename: "Samajavaragamana",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Samajavaragamana' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/D4020CD7-1377-461D-B4BD-D4AEA6D7D6FA/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:33:40Z&dt=Web",
  //     video: "https://www.youtube.com/embed/URPjeqQgkUg",
  //   },
  //   {
  //     Id: 7,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/6FA987D5-64A6-476F-A34F-8B7AC3821474/0-2x3.jpg?width=305&updatedTime=2023-11-01T04:31:47Z&dt=Web",
  //     Moviename: "Krishna Gadu Ante Oka Range",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Krishna Gadu Ante Oka Range' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/6FA987D5-64A6-476F-A34F-8B7AC3821474/0-16x9.jpg?width=2310&updatedTime=2023-11-01T04:31:47Z&dt=Web",
  //     video: "https://www.youtube.com/embed/Ad3KpruTlCk",
  //   },
  //   {
  //     Id: 8,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/4D3FD6FD-63E5-4C8A-96D8-1CA7D07CAB6D/0-2x3.jpg?width=305&updatedTime=2023-10-23T11:02:20Z&dt=Web",
  //     Moviename: "Surapanam",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Surapanam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/4D3FD6FD-63E5-4C8A-96D8-1CA7D07CAB6D/0-16x9.jpg?width=2310&updatedTime=2023-10-23T11:02:20Z&dt=Web",
  //     video: "https://www.youtube.com/embed/MDUVa03xbIs",
  //   },
  //   {
  //     Id: 9,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/7AED5CE3-45A3-40EF-92F5-64853AC950F9/0-2x3.jpg?width=305&updatedTime=2023-10-22T13:26:42Z&dt=Web",
  //     Moviename: "Case30",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Case30' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/7AED5CE3-45A3-40EF-92F5-64853AC950F9/0-16x9.jpg?width=2310&updatedTime=2023-10-22T13:26:42Z&dt=Web",
  //     video: "https://www.youtube.com/embed/MDUVa03xbIs",
  //   },
  //   {
  //     Id: 10,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:10:48Z&dt=Web",
  //     Moviename: "Mama Maschindra",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Mama Maschindra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:10:48Z&dt=Web",
  //     video: "https://www.youtube.com/embed/MDUVa03xbIs",},
  // ];
  // const Moviedata2 = [
  //   {
  //     Id: 1,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/7393D94F-E0A6-488D-AD73-DDF01AA9F764/0-2x3.jpg?width=305&updatedTime=2023-10-18T11:54:59Z&dt=Web",
  //     Moviename: "Intinti Ramayanam",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Intinti Ramayanam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/7393D94F-E0A6-488D-AD73-DDF01AA9F764/0-16x9.jpg?width=2310&updatedTime=2023-10-18T11:54:59Z&dt=Web",
  //    video:"https://www.youtube.com/embed/cKj_HBXgh_0",
  //   },
  //   {
  //     Id: 2,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/F3EF00A6-7BFD-4118-AB6C-AE782E2F7E5F/0-2x3.jpg?width=305&updatedTime=2023-10-18T11:53:29Z&dt=Web",
  //     Moviename: "Sathi Gani Rendu Ekaralu",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Sathi Gani Rendu Ekaralu' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/F3EF00A6-7BFD-4118-AB6C-AE782E2F7E5F/0-16x9.jpg?width=2310&updatedTime=2023-10-18T11:53:29Z&dt=Web",
  //    video:"https://www.youtube.com/embed/jFn9WD138Hg",
  //   },
  //   {
  //     Id: 3,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-2x3.jpg?width=305&updatedTime=2023-09-10T18:15:47Z&dt=Web",
  //     Moviename: "Colour Photo",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Colour Photo' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-16x9.jpg?width=2310&updatedTime=2023-09-10T18:15:47Z&dt=Web",
  //     video:"https://www.youtube.com/embed/T-R3h9va2j4",
  //   },
  //   {
  //     Id: 4,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/72DD3211-3D3E-4911-92E6-48132F335F5A/0-2x3.jpg?width=305&updatedTime=2023-10-05T03:50:18Z&dt=Web",
  //     Moviename: "Bhamakalapam",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Bhamakalapam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/72DD3211-3D3E-4911-92E6-48132F335F5A/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:50:18Z&dt=Web",
  //     video:"https://www.youtube.com/embed/SIRf8Htplkk",
  //   },
  //   {
  //     Id: 5,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-2x3.jpg?width=305&updatedTime=2023-08-18T15:09:37Z&dt=Web",
  //     Moviename: "Senapathi",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Senapathi' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-16x9.jpg?width=2310&updatedTime=2023-08-18T15:09:37Z&dt=Web",
  //     video:"https://www.youtube.com/embed/LwVgKav50wE",
  //   },
  //   {
  //     Id: 6,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-2x3.jpg?width=305&updatedTime=2023-10-05T03:43:39Z&dt=Web",
  //     Moviename: "Mail",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Mail' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:43:39Z&dt=Web",
  //     video:"https://www.youtube.com/embed/cKj_HBXgh_0",
  //   },
  //   {
  //     Id: 7,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/3C1645E9-5C60-454E-BC7F-EFA559FBA44F/0-2x3.jpg?width=305&updatedTime=2023-10-05T03:42:35Z&dt=Web",
  //     Moviename: "EEGA",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'EEGA' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/3C1645E9-5C60-454E-BC7F-EFA559FBA44F/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:42:35Z&dt=Web",
  //     video:"https://www.youtube.com/embed/T-R3h9va2j4",
  //   },
  //   {
  //     Id: 8,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/34171E31-9E91-4567-8E6F-F6B81B2A481D/0-2x3.jpg?width=305&updatedTime=2023-09-01T12:48:49Z&dt=Web",
  //     Moviename: "Naandhi",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Naandhi' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/34171E31-9E91-4567-8E6F-F6B81B2A481D/0-16x9.jpg?width=2310&updatedTime=2023-09-01T12:48:49Z&dt=Web",
  //     video:"https://www.youtube.com/embed/T-R3h9va2j4",
  //   },
  //   {
  //     Id: 9,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-2x3.jpg?width=305&updatedTime=2023-09-01T12:44:21Z&dt=Web",
  //     Moviename: "Super Deluxe",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Super Deluxe' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-16x9.jpg?width=2310&updatedTime=2023-09-01T12:44:21Z&dt=Web",
  //     video:"https://www.youtube.com/embed/T-R3h9va2j4",
  //   },
  //   {
  //     Id: 10,
  //     img1: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-2x3.jpg?width=305&updatedTime=2023-09-01T12:44:21Z&dt=Web",
  //     Moviename: "Super Deluxe",
  //     relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
  //     description:
  //       "In the film 'Super Deluxe' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
  //     img2: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-16x9.jpg?width=2310&updatedTime=2023-09-01T12:44:21Z&dt=Web",
  //     video:"https://www.youtube.com/embed/T-R3h9va2j4",
  //   },
  // ];
  const Moviedata1=useFetch("./Moviesdata1.json")
  const Moviedata2=useFetch("./Moviedata2.json")
  
  return (
    <div>
      <Navbar/>
      <Slider  Moviegurusliderdata={Sliderimgsdata} /><br/><br/>

      <div style={{color:"white", fontSize:"25px"}}>New releses</div><br/><br/>
       <Innerpage Moviegurudata={Moviedata1 }/>
       <br/><br/>

      <div style={{color:"white", fontSize:"25px"}}>New Trending</div><br/><br/>
       <Innerpage Moviegurudata={Moviedata2}/>
        <Fotter/>
       
    </div>
  );
}

export default Mymovies;
