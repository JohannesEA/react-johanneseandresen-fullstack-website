import { publicRequest } from './requestMethods';
import { useEffect } from 'react';
import Home from './pages/home/Home';

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
      <Home/>

    </div>
  );
}

export default App;
