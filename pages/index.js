import Head from 'next/head';
import FamousPlaces from "../components/FamousPlaces";

export default function Home() {
  return (
    <div>
      <head>
        <title>WEATHER APP</title>
      </head>
      <div className="home">
        <div className="container">
          <FamousPlaces />
        </div>
      </div>
    </div>
  )
}
