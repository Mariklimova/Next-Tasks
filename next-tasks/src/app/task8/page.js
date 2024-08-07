'use client'
import axios from 'axios';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Task8() {

    const [data, setData] = useState('');

    const getIp = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setData(response.data.ip)
    }

    useEffect(() => {
        getIp()
    }, []);

    return <>
        <p>8. Создайте компонент, который выполняет запрос к API
            https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
            (решить задачу через клиентский компонент)
        </p>

        <p>{data}</p>


        <p><Link href='/'>home</Link></p>

    </>
}