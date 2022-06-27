import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [studyData, setStudyData] = useState(null);

  const handleClick3 = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(result);
    setStudyData(result.data);
  };

  return (
    <div>
      <button onClick={handleClick3}> study 데이터 가져오기</button>
      {studyData && (
        <ul>
          {studyData.map((data) => (
            <p>
              {data.name} : {data.email}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
