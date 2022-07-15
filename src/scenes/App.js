import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { ClockSection } from './components/ClockSection/ClockSection';
import { DetailSection } from './components/DetailSection/DetailSection';
import { QuoteSection } from './components/QuoteSection/QuoteSection';
import { appActions } from '../services/App/AppSlice';
import moment from 'moment';

function App() {

  const dispatch = useDispatch()
  const { detailVisible, clientIp, worldTime } = useSelector(state => state.app)
  const [hour, setHour] = useState()

  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get("http://worldtimeapi.org/api/ip")
      if (response.status !== 200)
        return
      const { data } = response
      dispatch(appActions.setState({ key: "clientIp", newState: data.client_ip }))
      let hour = moment(worldTime?.datetime).get("hour")
      dispatch(appActions.setState({
        key: "worldTime",
        newState: {
          datetime: data.datetime,
          dayOfWeek: data.day_of_week,
          dayOfYear: data.day_of_year,
          timezone: data.timezone,
          weekNumber: data.week_number,
          schedule: hour >= 5 && hour <= 18 ? "day" : "night"
        }
      }))
    }
    fechData()
  }, [])

  useEffect(() => {
    if (clientIp) {
      const fetchData = async () => {
        const response = await axios.get(`https://api.ipbase.com/v2/info/?ip=${clientIp}`, { headers: { apikey: "UXzE3Y6YF9qyxUqo52zkYPkVJum9fbm4QbMXPZpf" } })
        console.log(response)
        if (response.status !== 200)
          return
        const { data: { data } } = response
        dispatch(appActions.setState({
          key: "ipBase",
          newState: {
            city: data.location.city.name,
            country: data.location.country.alpha3,
            code: data.timezone.code
          }
        }))
      }
      fetchData()
    }
  }, [clientIp])

  return (
    <>
      <div className={`app-${worldTime?.schedule}${detailVisible ? "--detail" : ""}`} style={{ height: detailVisible ? "48%" : "100%" }}>
        {!detailVisible && <QuoteSection />}
        <ClockSection />
      </div>
      {detailVisible && <DetailSection />}
    </>
  );
}

export default App;
