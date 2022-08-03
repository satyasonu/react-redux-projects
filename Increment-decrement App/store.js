import rootReducer from './reducer/index'

import { createStore } from '@reduxjs/toolkit'

const store = createStore(rootReducer);

export default store ;