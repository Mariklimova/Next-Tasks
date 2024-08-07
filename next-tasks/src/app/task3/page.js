'use client'

import Link from "next/link";
import { useState } from "react";
import style from './style.module.css'

export default function Task3() {

    const [str, setStr] = useState('');



    return <>
        <p>3. Создайте форму для ввода данных. По клику на кнопку получите данные из input
            и отобразите в консоль</p>

        <div className={style.form}>
            <input type="text" placeholder="введите данные" onChange={getInput} />


            <button onClick={checkData}>Click</button>

            <p></p>
        </div>

        <p><Link href='/'>home</Link></p>

    </>
}

