import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react';
import Compartment from './components/Compartment';
import InputBox from './components/InputBox';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  // State variables
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);


  // Fetch seat data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch seat data from the server
  const fetchData = async () => {

    setLoading(false);

    try {
      const response = await axios.get("https://seat-booking-tg8y.onrender.com/api/seats");
      setLoading(true);
      setData(response.data.availableSeats);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(true);
    }
  };



  return (
    <Flex justify={"space-around"} align={"center"} h="100vh" minHeight={"fit-content"} bg={"#E5E7EB"} >

      {/* Compartment component to display seat grid */}
      <Compartment data={data} loading={loading} />

      {/* InputBox component for booking and resetting seats */}
      <InputBox fetchData={fetchData} setData={setData} data={data} />

    </Flex>
  );
}

export default App;
