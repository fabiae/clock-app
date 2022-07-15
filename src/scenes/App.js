import { Image } from 'antd'
import { useState } from 'react';
import { useSelector } from 'react-redux'

import daytime from "../assets/desktop/bg-image-daytime.jpg"
import { ClockSection } from './components/ClockSection/ClockSection';
import { DetailSection } from './components/DetailSection/DetailSection';
import { QuoteSection } from './components/QuoteSection/QuoteSection';

function App() {

  const { detailVisible } = useSelector(state => state.app)

  return (
    <>
      <div className={`app-day${detailVisible ? "--detail" : ""}`} style={{ height: detailVisible ? "48%" : "100%" }}>
        {!detailVisible && <QuoteSection />}
        <ClockSection />
      </div>
      {detailVisible && <DetailSection />}
    </>
  );
}

export default App;
