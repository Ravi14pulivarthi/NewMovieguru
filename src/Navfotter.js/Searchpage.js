import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import useFetch from "./useFetch";

 //  all data in verable
// const  searchdata1 = [
//     {
//       Id: 1,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:10:48Z&dt=Web",
//       Moviename: "Mama Maschindra",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Mama Maschindra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:10:48Z&dt=Web",
//       video: "https://www.youtube.com/embed/URPjeqQgkUg",
      
//     },
//     {
//       Id: 2,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/D43B89A2-F781-4C1A-9A3E-2E3EBB9099CC/0-2x3.jpg?width=305&updatedTime=2023-11-03T12:30:48Z&dt=Web",
//       Moviename: "The Great Indian Suicide",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'The Great Indian Suicide' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/D43B89A2-F781-4C1A-9A3E-2E3EBB9099CC/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:17:15Z&dt=Web",
//       video: "https://www.youtube.com/embed/Ad3KpruTlCk",
//     },
//     {
//       Id: 3,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/C02362E5-C250-4033-ADDD-B77A8C7D5F39/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:18:40Z&dt=Web",
//       Moviename: "Mr.Pregnant",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Mr.Pregnant' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/C02362E5-C250-4033-ADDD-B77A8C7D5F39/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:18:40Z&dt=Web",
//       video: "https://www.youtube.com/embed/MDUVa03xbIs",
//     },

//     {
//       Id: 4,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/D54C647B-A5E6-4A21-8252-0116BD3DB32F/0-2x3.jpg?width=305&updatedTime=2023-10-05T17:42:52Z&dt=Web",
//       Moviename: "Mayapetika",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Mayapetika' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/D54C647B-A5E6-4A21-8252-0116BD3DB32F/0-16x9.jpg?width=2310&updatedTime=2023-10-05T17:42:52Z&dt=Web",
//       video: "https://www.youtube.com/embed/iNb-ycFhcOQ",
//     },
//     {
//       Id: 5,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/841C0A2D-DFA5-4DDF-B45A-BA04C037444A/0-2x3.jpg?width=305&updatedTime=2023-11-01T14:32:49Z&dt=Web",
//       Moviename: "Baby",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Baby' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/841C0A2D-DFA5-4DDF-B45A-BA04C037444A/0-16x9.jpg?width=2310&updatedTime=2023-11-01T14:32:49Z&dt=Web",
//       video: "https://www.youtube.com/embed/_npN4uwDMLk",
//     },
//     {
//       Id: 6,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/D4020CD7-1377-461D-B4BD-D4AEA6D7D6FA/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:33:40Z&dt=Web",
//       Moviename: "Samajavaragamana",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Samajavaragamana' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/D4020CD7-1377-461D-B4BD-D4AEA6D7D6FA/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:33:40Z&dt=Web",
//       video: "https://www.youtube.com/embed/URPjeqQgkUg",
//     },
//     {
//       Id: 7,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/6FA987D5-64A6-476F-A34F-8B7AC3821474/0-2x3.jpg?width=305&updatedTime=2023-11-01T04:31:47Z&dt=Web",
//       Moviename: "Krishna Gadu Ante Oka Range",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Krishna Gadu Ante Oka Range' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/6FA987D5-64A6-476F-A34F-8B7AC3821474/0-16x9.jpg?width=2310&updatedTime=2023-11-01T04:31:47Z&dt=Web",
//       video: "https://www.youtube.com/embed/Ad3KpruTlCk",
//     },
//     {
//       Id: 8,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/4D3FD6FD-63E5-4C8A-96D8-1CA7D07CAB6D/0-2x3.jpg?width=305&updatedTime=2023-10-23T11:02:20Z&dt=Web",
//       Moviename: "Surapanam",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Surapanam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/4D3FD6FD-63E5-4C8A-96D8-1CA7D07CAB6D/0-16x9.jpg?width=2310&updatedTime=2023-10-23T11:02:20Z&dt=Web",
//       video: "https://www.youtube.com/embed/MDUVa03xbIs",
//     },
//     {
//       Id: 9,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/7AED5CE3-45A3-40EF-92F5-64853AC950F9/0-2x3.jpg?width=305&updatedTime=2023-10-22T13:26:42Z&dt=Web",
//       Moviename: "Case30",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Case30' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/7AED5CE3-45A3-40EF-92F5-64853AC950F9/0-16x9.jpg?width=2310&updatedTime=2023-10-22T13:26:42Z&dt=Web",
//       video: "https://www.youtube.com/embed/MDUVa03xbIs",
//     },
//     {
//       Id: 10,
//       img1: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:10:48Z&dt=Web",
//       Moviename: "Mama Maschindra",
//       relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//       description:
//         "In the film 'Mama Maschindra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//       img2: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:10:48Z&dt=Web",
//       video: "https://www.youtube.com/embed/MDUVa03xbIs",
//     },
//     {
//         Id: 11,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/7393D94F-E0A6-488D-AD73-DDF01AA9F764/0-2x3.jpg?width=305&updatedTime=2023-10-18T11:54:59Z&dt=Web",
//         Moviename: "Intinti Ramayanam",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Intinti Ramayanam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/7393D94F-E0A6-488D-AD73-DDF01AA9F764/0-16x9.jpg?width=2310&updatedTime=2023-10-18T11:54:59Z&dt=Web",
//         video: "https://www.youtube.com/embed/cKj_HBXgh_0",
//       },
//       {
//         Id: 12,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/F3EF00A6-7BFD-4118-AB6C-AE782E2F7E5F/0-2x3.jpg?width=305&updatedTime=2023-10-18T11:53:29Z&dt=Web",
//         Moviename: "Sathi Gani Rendu Ekaralu",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Sathi Gani Rendu Ekaralu' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/F3EF00A6-7BFD-4118-AB6C-AE782E2F7E5F/0-16x9.jpg?width=2310&updatedTime=2023-10-18T11:53:29Z&dt=Web",
//         video: "https://www.youtube.com/embed/jFn9WD138Hg",
//       },
//       {
//         Id: 13,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-2x3.jpg?width=305&updatedTime=2023-09-10T18:15:47Z&dt=Web",
//         Moviename: "Colour Photo",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Colour Photo' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-16x9.jpg?width=2310&updatedTime=2023-09-10T18:15:47Z&dt=Web",
//         video: "https://www.youtube.com/embed/T-R3h9va2j4",
//       },
//       {
//         Id: 14,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/72DD3211-3D3E-4911-92E6-48132F335F5A/0-2x3.jpg?width=305&updatedTime=2023-10-05T03:50:18Z&dt=Web",
//         Moviename: "Bhamakalapam",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Bhamakalapam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/72DD3211-3D3E-4911-92E6-48132F335F5A/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:50:18Z&dt=Web",
//         video: "https://www.youtube.com/embed/SIRf8Htplkk",
//       },
//       {
//         Id: 15,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-2x3.jpg?width=305&updatedTime=2023-08-18T15:09:37Z&dt=Web",
//         Moviename: "Senapathi",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Senapathi' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-16x9.jpg?width=2310&updatedTime=2023-08-18T15:09:37Z&dt=Web",
//         video: "https://www.youtube.com/embed/LwVgKav50wE"
//       },
//       {
//         Id: 16,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-2x3.jpg?width=305&updatedTime=2023-10-05T03:43:39Z&dt=Web",
//         Moviename: "Mail",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Mail' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:43:39Z&dt=Web",
//         video: "https://www.youtube.com/embed/cKj_HBXgh_0",
//       },
//       {
//         Id: 17,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/3C1645E9-5C60-454E-BC7F-EFA559FBA44F/0-2x3.jpg?width=305&updatedTime=2023-10-05T03:42:35Z&dt=Web",
//         Moviename: "EEGA",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'EEGA' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/3C1645E9-5C60-454E-BC7F-EFA559FBA44F/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:42:35Z&dt=Web",
//         video: "https://www.youtube.com/embed/T-R3h9va2j4",
//       },
//       {
//         Id: 18,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/34171E31-9E91-4567-8E6F-F6B81B2A481D/0-2x3.jpg?width=305&updatedTime=2023-09-01T12:48:49Z&dt=Web",
//         Moviename: "Naandhi",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Naandhi' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/34171E31-9E91-4567-8E6F-F6B81B2A481D/0-16x9.jpg?width=2310&updatedTime=2023-09-01T12:48:49Z&dt=Web",
//         video: "https://www.youtube.com/embed/T-R3h9va2j4",
//       },
//       {
//         Id: 19,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-2x3.jpg?width=305&updatedTime=2023-09-01T12:44:21Z&dt=Web",
//         Moviename: "Super Deluxe",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Super Deluxe' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-16x9.jpg?width=2310&updatedTime=2023-09-01T12:44:21Z&dt=Web",
//         video: "https://www.youtube.com/embed/T-R3h9va2j4",
//       },
//       {
//         Id: 20,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-2x3.jpg?width=305&updatedTime=2023-09-01T12:44:21Z&dt=Web",
//         Moviename: "Super Deluxe",
//         relese: "2023 • 2h 27m • Action • Comedy Adventurous • Humorous",
//         description:
//           "In the film 'Super Deluxe' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/920EDB10-46FB-42B8-9013-FD8ACF448968/0-16x9.jpg?width=2310&updatedTime=2023-09-01T12:44:21Z&dt=Web",
//         video: "https://www.youtube.com/embed/T-R3h9va2j4",
//       },
//       {
//         Id: 21,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/00BE93DA-3C15-4BB4-A8C9-27CF16DB1AEF/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:15:35Z&dt=Web",
//         Moviename: "Sarvam Shakthi Mayam",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Sarvam Shakthi Mayam' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/00BE93DA-3C15-4BB4-A8C9-27CF16DB1AEF/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:15:35Z&dt=Web",
//         video: "https://www.youtube.com/embed/a8pWHqIG7zk",
//       },
//       {
//         Id: 22,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/4CBBD95A-537B-4B95-BD6E-7CE5568B32BF/0-2x3.jpg?width=305&updatedTime=2023-11-02T07:59:31Z&dt=Web",
//         Moviename: "Papam Pasivadu",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Papam Pasivadu' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/4CBBD95A-537B-4B95-BD6E-7CE5568B32BF/0-16x9.jpg?width=2310&updatedTime=2023-11-02T07:59:31Z&dt=Web",
//         video: "https://www.youtube.com/embed/KXiAihlIh3I",
//       },
//       {
//         Id: 23,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/CD29D287-7DDA-46DC-9CF9-A9FAF088A1F0/0-2x3.jpg?width=305&updatedTime=2023-11-03T12:26:21Z&dt=Web",
//         Moviename: "Family Dhamaka",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Family Dhamaka' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/4A78CA85-3432-403B-9A33-4FE715082440/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:08:19Z&dt=Web",
//         video: "https://www.youtube.com/embed/YfvAUJjWgXs",
//       },
//       {
//         Id: 24,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/2B91E192-78A4-4E8B-9967-AC9D161DBD03/0-2x3.jpg?width=305&updatedTime=2023-09-24T12:05:02Z&dt=Web",
//         Moviename: "Nenu Super Woman",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Nenu Super Woman' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/47E3281F-1E9C-43AB-B9BF-994A2E840788/0-16x9.jpg?width=2310&updatedTime=2023-09-24T12:05:03Z&dt=Web",
//         video: "https://www.youtube.com/embed/2-UMJYb9kvg"
//       },
//       {
//         Id: 25,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/BBF8D5B7-2B63-4604-9562-ED3B3BCF9465/0-2x3.jpg?width=305&updatedTime=2023-05-26T13:11:15Z&dt=Web",
//         Moviename: "Telugu Indian Idol",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Telugu Indian Idol' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=2310&updatedTime=2023-10-05T04:00:34Z&dt=Web",
//         video: "https://www.youtube.com/embed/kHvY04m40DA",
//       },
//       {
//         Id: 26,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/953C6ACC-CD82-48CB-B7F5-CB8E9B1EE2C1/0-2x3.jpg?width=305&updatedTime=2023-04-25T02:07:55Z&dt=Web",
//         Moviename: "Unstoppable",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Unstoppable' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:06:28Z&dt=Web",
//         video: "https://www.youtube.com/embed/a8pWHqIG7zk",
//       },
//       {
//         Id: 27,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/BA371718-4FC7-4DAB-83D8-1D7ABB5038D7/0-2x3.jpg?width=305&updatedTime=2023-04-24T13:39:40Z&dt=Web",
//         Moviename: "SARKAAR",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'SARKAAR' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/836A0A87-656C-46FE-BBD1-F12BA6088F68/0-16x9.jpg?width=2310&updatedTime=2023-11-02T08:16:23Z&dt=Web",
//         video: "https://www.youtube.com/embed/KXiAihlIh3I",
//       },
//       {
//         Id: 28,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/03BB17CC-18AB-4E24-B6F9-2EA3D546B5F5/0-2x3.jpg?width=305&updatedTime=2023-11-02T08:14:00Z&dt=Web",
//         Moviename: "Comedy Stock Exchange",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Comedy Stock Exchange' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/998DEE7A-492F-4E20-9C5E-EA7B186E0A5F/0-16x9.jpg?width=2310&updatedTime=2023-07-17T11:45:48Z&dt=Web",
//         video: "https://www.youtube.com/embed/YfvAUJjWgXs",
//       },
//       {
//         Id: 29,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/11946C7F-4468-4C5A-ACFF-E1BD19D97B3E/0-2x3.jpg?width=305&updatedTime=2023-04-24T08:04:43Z&dt=Web",
//         Moviename: "Chef mantra",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Chef mantra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/A7C4A8B8-B112-4C74-8AFC-6128093F71FC/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:45:53Z&dt=Web",
//         video: "https://www.youtube.com/embed/kHvY04m40DA",
//       },
//       {
//         Id: 30,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:10:48Z&dt=Web",
//         Moviename: "Mama Maschindra",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Mama Maschindra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/D41FA14B-492F-416E-9EDE-ABBFCD970D0F/0-16x9.jpg?width=2310&updatedTime=2023-10-30T12:10:48Z&dt=Web",
//         video: "https://www.youtube.com/embed/kHvY04m40DA",
//       },
//       {
//         Id: 31,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/CD29D287-7DDA-46DC-9CF9-A9FAF088A1F0/0-2x3.jpg?width=305&updatedTime=2023-10-30T12:08:18Z&dt=Web",
//         Moviename: "EP 8 : Teachers Special",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'EP 8 : Teachers Special' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/F17D8EEC-6D3F-48EC-AA4C-508EE28947E5/0-16x9.jpg?width=2310&updatedTime=2023-10-11T13:43:10Z&dt=Web",
//         video: "https://www.youtube.com/embed/YTQJuaOeu-Y",
//       },
//       {
//         Id: 32,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/2B91E192-78A4-4E8B-9967-AC9D161DBD03/0-2x3.jpg?width=305&updatedTime=2023-09-24T12:05:02Z&dt=Web",
//         Moviename: "Nenu Super Woman ",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Nenu Super Woman ' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/2B91E192-78A4-4E8B-9967-AC9D161DBD03/0-16x9.jpg?width=2310&updatedTime=2023-09-24T12:05:02Z&dt=Web",
//         video: "https://www.youtube.com/embed/eMLvYkEGQpg",
//       },
//       {
//         Id: 33,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/0E75A713-3FEC-4311-B1B6-CC2A4CE587FA/0-2x3.jpg?width=305&updatedTime=2023-08-02T16:56:08Z&dt=Web",
//         Moviename: "Set Kaadu...Set Cheskovali",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Set Kaadu...Set Cheskovali' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/0E75A713-3FEC-4311-B1B6-CC2A4CE587FA/0-16x9.jpg?width=2310&updatedTime=2023-08-02T16:56:08Z&dt=Web",
//         video: "https://www.youtube.com/embed/AwG-AtAtiB8",
//       },
//       {
//         Id: 34,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/5C550DD4-163F-4C63-9D3C-7D85788D3592/0-2x3.jpg?width=305&updatedTime=2023-11-02T08:13:53Z&dt=Web",
//         Moviename: " Sarkaar 3",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film ' Sarkaar 3' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/5C550DD4-163F-4C63-9D3C-7D85788D3592/0-16x9.jpg?width=2310&updatedTime=2023-11-02T08:13:53Z&dt=Web",
//         video: "https://www.youtube.com/embed/aJVl79Pmtm0",
//       },
//       {
//         Id: 35,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/9FFA19A6-057F-46DB-B392-8DB7CA713FF1/0-2x3.jpg?width=305&updatedTime=2023-06-22T18:29:43Z&dt=Web",
//         Moviename: "Iconic Finale Part 2",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Iconic Finale Part 2' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/9FFA19A6-057F-46DB-B392-8DB7CA713FF1/0-16x9.jpg?width=2310&updatedTime=2023-06-22T18:29:43Z&dt=Web",
//         video: "https://www.youtube.com/embed/XazM4Hlat4o"
//       },
//       {
//         Id: 36,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/99C084F2-C137-4F97-A048-45E7C5E80DAD/0-2x3.jpg?width=305&updatedTime=2023-04-25T17:11:55Z&dt=Web",
//         Moviename: " Game - Erupting like a Volcano!",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film ' Game - Erupting like a Volcano!' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/99C084F2-C137-4F97-A048-45E7C5E80DAD/0-16x9.jpg?width=2310&updatedTime=2023-04-25T17:11:55Z&dt=Web",
//         video: "https://www.youtube.com/embed/YTQJuaOeu-Y",
//       },
//       {
//         Id: 37,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/8379FC92-DFAC-472C-83CA-32CA937B49C3/0-2x3.jpg?width=305&updatedTime=2023-04-24T08:04:56Z&dt=Web",
//         Moviename: " Chef Mantra",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film ' Chef Mantra' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/8379FC92-DFAC-472C-83CA-32CA937B49C3/0-16x9.jpg?width=2310&updatedTime=2023-04-24T08:04:56Z&dt=Web",
//         video: "https://www.youtube.com/embed/eMLvYkEGQpg",
//       },
//       {
//         Id: 38,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/017E3F9A-8ACA-4985-BA42-9974895AA6FF/0-2x3.jpg?width=305&updatedTime=2023-04-25T01:37:33Z&dt=Web",
//         Moviename: " Telugu Indian Idol",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Telugu Indian Idol' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/223A7061-13F8-4C6B-9F71-9A36E5FA382F/0-16x9.jpg?width=2310&updatedTime=2023-04-25T01:36:02Z&dt=Web",
//         video: "https://www.youtube.com/embed/AwG-AtAtiB8",
//       },
  
//       {
//         Id: 39,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/09E87D4B-120A-4971-8016-E177B373E66E/0-2x3.jpg?width=305&updatedTime=2023-08-05T14:28:03Z&dt=Web",
//         Moviename: "Tharagathi Gadhi Daati",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Tharagathi Gadhi Daati' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/09E87D4B-120A-4971-8016-E177B373E66E/0-16x9.jpg?width=2310&updatedTime=2023-08-05T14:28:03Z&dt=Web",
//         video: "https://www.youtube.com/embed/aJVl79Pmtm0",
//       },
//       {
//         Id: 40,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/482F3A41-2C53-40C2-8CB2-5A22F1ACAFC1/0-2x3.jpg?width=305&updatedTime=2023-07-27T17:59:33Z&dt=Web",
//         Moviename: "The Angry Birds Movie 2",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'The Angry Birds Movie 2' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/BD67C4EA-80CC-4B0D-B6EB-9CC1E96379A1/0-16x9.jpg?width=2310&updatedTime=2023-07-06T15:26:14Z&dt=Web",
//         video: "https://www.youtube.com/embed/DXFN60x3vP4",
//       },
//       {
//         Id: 41,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/CC8D49CA-250E-4597-AE67-883FAFA4CB2D/0-2x3.jpg?width=305&updatedTime=2023-04-25T09:31:07Z&dt=Web",
//         Moviename: "Ghatotkachudu Master Of Magic",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Ghatotkachudu Master Of Magic' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/CC8D49CA-250E-4597-AE67-883FAFA4CB2D/0-16x9.jpg?width=2310&updatedTime=2023-04-25T09:31:07Z&dt=Web",
//         video: "https://www.youtube.com/embed/6aZX9kn4ZUk",
//       },
//       {
//         Id: 42,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/880D006B-E7E7-4A85-BE7E-4AC9AB64D019/0-2x3.jpg?width=305&updatedTime=2023-10-05T03:55:29Z&dt=Web",
//         Moviename: "The Magical Three Horses",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'The Magical Three Horses' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/880D006B-E7E7-4A85-BE7E-4AC9AB64D019/0-16x9.jpg?width=2310&updatedTime=2023-10-05T03:55:29Z&dt=Web",
//         video: "https://www.youtube.com/embed/IsCrd-hrmUc",
//       },
//       {
//         Id: 43,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/E1393AA6-177A-419F-80D6-0B40F698AC90/0-2x3.jpg?width=305&updatedTime=2023-06-05T09:05:36Z&dt=Web",
//         Moviename: "Christmas Thatha Trailer",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Christmas Thatha Trailer' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/5D3109F9-8D21-453D-A653-429770B0CEA2/0-16x9.jpg?width=2310&updatedTime=2022-07-22T03:27:01Z&dt=Web",
//         video: "https://www.youtube.com/embed/te8_PFW87S8",
//       },
//       {
//         Id: 44,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/53EE8CB1-E3B2-4C62-82F3-EC0C677F6639/0-2x3.jpg?width=305&updatedTime=2023-04-21T16:41:59Z&dt=Web",
//         Moviename: "Bala Bharatham",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Bala Bharatham' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/53EE8CB1-E3B2-4C62-82F3-EC0C677F6639/0-16x9.jpg?width=2310&updatedTime=2023-04-21T16:41:59Z&dt=Web",
//         video: "https://www.youtube.com/embed/DXFN60x3vP4",
//       },
//       {
//         Id: 45,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/88E06F5B-9ED1-4DB6-A5FC-0E111A40E6B2/0-2x3.jpg?width=305&updatedTime=2023-04-24T12:16:17Z&dt=Web",
//         Moviename: "Prahlad",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Prahlad' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/88E06F5B-9ED1-4DB6-A5FC-0E111A40E6B2/0-16x9.jpg?width=2310&updatedTime=2023-04-24T12:16:17Z&dt=Web",
//         video: "https://www.youtube.com/embed/6aZX9kn4ZUk",
//       },
//       {
//         Id: 46,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/11975FAE-738D-4EBE-B4F2-48BB7A4EC758/0-2x3.jpg?width=305&updatedTime=2023-04-21T16:29:55Z&dt=Web",
//         Moviename: "Bal Hanuman 2",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Bal Hanuman 2' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/11975FAE-738D-4EBE-B4F2-48BB7A4EC758/0-16x9.jpg?width=2310&updatedTime=2023-04-21T16:29:55Z&dt=Web",
//         video: "https://www.youtube.com/embed/IsCrd-hrmUc",
//       },
//       {
//         Id: 47,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/D63864BB-29C7-46C2-98BE-9E679222E6D6/0-2x3.jpg?width=305&updatedTime=2023-04-25T09:15:48Z&dt=Web",
//         Moviename: "Gajasuras Penance",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Gajasuras Penance' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/54D13CDB-47BD-4F5E-8CF3-DDCFE9437319/0-16x9.jpg?width=2310&updatedTime=2023-04-24T12:11:39Z&dt=Web",
//         video: "https://www.youtube.com/embed/te8_PFW87S8",
//       },
//       {
//         Id: 48,
//         img1: "https://image-resizer-cloud-api.akamaized.net/image/B35722BC-1EBF-4EE2-A4B0-09730948653C/0-16x9.jpg?width=300&updatedTime=2023-04-24T12:06:01Z",
//         Moviename: "Vishnu Promise",
//         relese: "2023 • 1 Season • Drama • Romance Humorous • Substances",
//         description:
//           "In the film 'Vishnu Promise' , Parasuram seeks revenge against his father and stepmother for his mother's death. After serving time in prison, he discovers his mother's  property is held by his uncle, whom he wins over and marries a girl his uncle considers a daughter. Parasuram instructs his assistant, Ramdaasu, to",
//         img2: "https://image-resizer-cloud-api.akamaized.net/image/B35722BC-1EBF-4EE2-A4B0-09730948653C/0-16x9.jpg?width=2310&updatedTime=2023-04-24T12:06:01Z&dt=Web",
//         video: "https://www.youtube.com/embed/te8_PFW87S8",
//       },
//   ];


function Searchpage() {
  
  const searchdata1=useFetch("./Total.json")
     const location=useLocation()
     const  data=location.state

      const navgate=useNavigate()
      
      function click(data){
        navgate(`/clickpage/${data.Moviename}`,{state:data}) 
          
       
    }
  return (
    <div >
        <Navbar name={data}/>

        <br/><br/><br/>

        <h1 style={{color:"white"}}>Search result show for {data}</h1>

         <div  style={{display:"flex"}}>  
         {
           searchdata1.map((value)=>{
             return ( 
             <div style={{cursor:"pointer"}}> 
                  <br/><br/><br/>  

                {value.Moviename.toLowerCase().includes(data) && <div>
               <div onClick={ function (){click(value)}}  style={{width: "10rem",height:"18rem",backgroundImage:`url(${value.img1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"10px"}} >
                  <span style={{backgroundColor:"orange",width:"90px",color:"white",borderRadius:"0px 10px 0px 10px" ,textAlign:"center", position:"relative",left:"83px"}}>Primemum</span>
                   </div>
           <div><p style={{color:"white" ,width:"170px",fontFamily:"cursive"}}>{value.Moviename}</p></div></div> }
             </div>)
           })
         } 
         </div>

    </div>
  )
}

export default Searchpage





{
  true && <h1></h1>
}



