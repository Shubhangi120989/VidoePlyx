import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from 'axios'
const Container = styled.div`
display: flex;
flex-wrap: wrap;

align-items: flex-start;
position: relative;
padding: 20px;
gap: 20px;
  
`;


const Home = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

  useEffect(()=>{
    const fetchVideo=async ()=>{
      try {
        // console.log(type)
        // if(type==='history'){
          const result=await axios.get("http://localhost:8000/api/v1/users/history",{withCredentials:true})
          // console.log("the frontendend fetched data is: ",result.data.data.watchHistory);
          setVideos(result.data.data.watchHistory)
          // setTotalPages(result.data.data.totalPages);
        // }else{
        //   const result=await axios.get("http://localhost:8000/api/v1/videos?page=${page}")
        // // console.log("the frontendend fetched data is: ",result.data.data.docs);
        // setVideos(result.data.data.docs)
        // setTotalPages(result.data.data.totalPages);

        // }
        

      } catch (error) {
        setError(error)
        console.log("the errror is ",error);
      }
    }
    //we are making a async function and then calling it inside the useEffect
    fetchVideo()
  },[])
//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

  return (
    <>
    <Container>
      {!error && videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
      
    </Container>
    {/* <ButtonContainer>
        <Button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </Button>
      </ButtonContainer> */}
    </>
  );
};

export default Home;