import React, { useEffect, useState } from 'react';
import localforage from 'localforage';
import StyledApp from './style';
import GlobalStyles from '../Common/GlobalStyles';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import BikeList from '../BikeList';
import BikeForm from '../BikeForm';
import Aside from '../Aside';
import StatisticPanel from '../StatisticPanel';

function App() {
  const [bikes, setBikes] = useState([]);
  const [getData, setGetData] = useState(true);

  useEffect(() => {
    if (setGetData) {
      localforage
        .keys()
        .then(res => Promise.all(res.map(key => localforage.getItem(key))))
        .then(arr => setBikes([...arr.sort(item => item.id)]))
        .then(() => setGetData(false));
    }
  }, [getData]);

  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <Main>
        <BikeList bikeList={bikes} setGetData={setGetData} />
        <Aside>
          <BikeForm setGetData={setGetData} />
          <StatisticPanel bikes={bikes} />
        </Aside>
      </Main>
      <Footer />
    </StyledApp>
  );
}

export default App;
