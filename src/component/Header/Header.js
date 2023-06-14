import React, { useState, useEffect } from 'react';

const Header = () => {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(json => {
        setCount(json);
        const name = json.map(details => details.name)
      })
  });
    return (
        <div>
            

        </div>
    );
};

export default Header;