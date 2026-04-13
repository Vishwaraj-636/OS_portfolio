import React, { useState, useEffect } from 'react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(d) {
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const hours24 = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const ampm = hours24 >= 12 ? 'PM' : 'AM';
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${day} ${month} ${date} ${hours12}:${minutes} ${ampm}`;
}

const DateTime = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="datetime">{formatDate(now)}</div>
  );
};

export default DateTime;