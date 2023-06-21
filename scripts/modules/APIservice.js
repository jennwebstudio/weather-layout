const API_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '0bda6e24044ed392c01d6a49720a897f';

export const fetchWeather = async (city) => {


  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }
    const data = await response.json();
    return { success: true, data};

  } catch(err) {
    return { success: false, err};
  }

  
};