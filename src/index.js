import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import mapboxgl from 'mapbox-gl'
import { App } from './App'

mapboxgl.accessToken = 'sk.eyJ1IjoiZXZlbGluYWJlIiwiYSI6ImNra3pxb3BwMTBhYjQybm9vb2htdmptMGcifQ.y9x_BywRoQ5YGUW0JHBxBw';

ReactDOM.render(<App />, document.getElementById('root'))
