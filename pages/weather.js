import Image from "next/image";
import Layout from "@/pages/layout";

export async function getStaticProps() {
    const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=30de923456283628da276346257b5d19"
    );
    const data = await res.json();
    console.log(data);

    return {
        props: {
            data,
        },
    };
}

const Weather = ({data}) => {
    return (
        <Layout>
            <div className="border shadow-md mt-10 py-5 bg-slate-50 flex items-center justify-center space-x-5"
            style={{width:400}}>
                <Image
                    width="100"
                    height="100"
                    src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    alt=""
                />
                <div>
                    <p className="text-5xl font-bold">
                        {Math.round(data.main.temp - 273.15)}
                        <sup>°C</sup>
                    </p>
                </div>
                <div className="text-slate-400">
                    <p>Main: {data.weather[0].main}</p>
                    <p>Huminity: {data.main.humidity}%</p>
                    <p>Wind: {data.wind.speed} km/h</p>
                </div>
            </div>
        </Layout>
    )
}

export default Weather;