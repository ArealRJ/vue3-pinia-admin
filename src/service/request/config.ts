import config from "@/config/index"
let BASE_URL = config.baseUrl
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = config.baseUrl
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = ''
} else {
  BASE_URL = ''
}

export { BASE_URL, TIME_OUT }