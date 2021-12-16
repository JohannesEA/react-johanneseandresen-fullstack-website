import './App.css';
import { publicRequest } from './requestMethods';
import { useEffect } from 'react';

function App() {



  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await publicRequest.get("api/test");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    testAPI();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
