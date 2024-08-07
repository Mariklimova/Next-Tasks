'use client'

import Link from "next/link";
import { useState } from "react";


export default function Task3() {

    const [str, setStr] = useState('');



    return <>
        <p>3. Создайте форму для ввода данных. По клику на кнопку получите данные из input
            и отобразите в консоль</p>

        <div>

            <input type="text" placeholder="введите данные" onChange={(event) => setStr(event.target.value)} />

            <button onClick={() => console.log(str)}>Click</button>

        </div>

        <p><Link href='/'>home</Link></p>

    </>
}

