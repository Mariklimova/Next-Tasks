'use client'

import Link from "next/link";
import { useState } from "react";
import style from './style.module.css'

export default function Task2() {

    const [data, setData] = useState({});

    const getInput = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const checkData = () => {
        if (!/^[\w]+\@[a-z]+.[a-z]{2,10}/gm.test(data.email) || !isNaN(data.name) || !isNaN(data.surname)|| data.pwd.length < 8) {
            alert(false)
        }else {
            alert(true)
        }
    }

    return <>
        <p>2. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
            По клику на кнопку проверить вводимые данные на регулярные выражения. В
            случае успешной валидации – alert(true)</p>

        <div className={style.form}>
            <input type="text" placeholder="введите имя" name='name' onChange={getInput} />
            <input type="text" placeholder="введите фамилию" name='surname' onChange={getInput} />
            <input type="text" placeholder="введите адрес электронной почты" name='email' onChange={getInput} />
            <input type="password" placeholder="введите пороль" name='pwd' onChange={getInput} />

            <button onClick={checkData}>Check</button>
        </div>

        <p><Link href='/'>home</Link></p>

    </>
}