export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://react-image-upload.herokuapp.com'
  : 'http://192.168.0.22:8080'