'use client'

import Link from "next/link";
import { useState } from "react";

export default function Task2() {

    const [data, setData] = useState('');
    

    return <>
        <p>8. Создайте компонент, который выполняет запрос к API
            https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
            (решить задачу через клиентский компонент)
        </p>


        <div>
            <button onClick={() => setFlag(true)}>Show text</button>
            <button onClick={() => setFlag(false)}>Hide text</button>

            <p>{data}</p>
        </div>

        <p><Link href='/'>home</Link></p>

    </>
}