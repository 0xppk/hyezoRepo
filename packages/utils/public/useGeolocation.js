'use strict';

var react = require('react');

function useGeolocation(options) {
  const [loading, setLoading] = react.useState(true);
  const [error, setError] = react.useState(null);
  const [data, setData] = react.useState({});
  react.useEffect(() => {
    const successHandler = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler = (e) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, [options]);
  return { loading, error, data };
}

module.exports = useGeolocation;
